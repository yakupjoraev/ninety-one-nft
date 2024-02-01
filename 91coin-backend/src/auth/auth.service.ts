import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/utils/typeorm/entities/User';
import { CreateUserParams, LoginParams, UpdateUserParams, VerifyEmailParams, VerifyPhoneParams } from 'src/utils/types';
import { generateRandomNumber, generateRandomString } from 'src/utils/helpers';
import { JwtService } from '@nestjs/jwt';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService,
        private readonly mailerService: MailerService,
    ) {}

    async createUserByEmail(userDetails: CreateUserParams) {
        const user: User = await this.userRepository.findOneBy({ email: userDetails.email })

        if(user?.emailVerifiedAt) {
            throw new HttpException(
                'Email already verified',
                HttpStatus.NON_AUTHORITATIVE_INFORMATION
            )
        }

        if(user?.emailVerificationCode) {
            throw new HttpException(
                'Verification code already sent to your email',
                HttpStatus.NON_AUTHORITATIVE_INFORMATION
            )
        }

        try {
            const emailVerificationCode: string = generateRandomString(6)

            await this.mailerService.sendMail({
                to: userDetails.email,
                subject: "Verification code",
                html: `Verification code: <b>${emailVerificationCode}</b>`
            })

            const newUser = this.userRepository.create({
                email: userDetails.email,
                emailVerificationCode,
                createdAt: new Date(),
            })
            await this.userRepository.save(newUser)

            return {
                message: 'Verification code sent to your email'
            }
        } catch (error) {
            throw new HttpException(
                'Something went wrong. Try again.',
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async verifyEmail(userDetails: VerifyEmailParams) {
        const userByEmail: User = await this.userRepository.findOneBy({ email: userDetails.email })
        if(!userByEmail) {
            throw new HttpException(
                'User not found',
                HttpStatus.BAD_REQUEST
            )
        }

        if(userByEmail?.emailVerifiedAt) {
            throw new HttpException(
                'Email already verified',
                HttpStatus.NON_AUTHORITATIVE_INFORMATION
            )
        }

        if(userByEmail?.emailVerificationCode.toLowerCase() !== userDetails?.emailVerificationCode?.toLowerCase()) {
            throw new HttpException(
                'Incorrect code',
                HttpStatus.BAD_REQUEST
            )
        }

        try {
            await this.userRepository.update({ email: userDetails.email }, { 
                emailVerificationCode: null, 
                emailVerifiedAt: new Date() 
            })
            return {
                message: 'Email successfully verified'
            }
        } catch (error) {
            throw new HttpException(
                'Something went wrong. Try again.',
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async updateUserPhoneByEmail(userDetails: UpdateUserParams) {
        const userByEmail: User = await this.userRepository.findOneBy({ email: userDetails.email })
        if(!userByEmail) {
            throw new HttpException(
                'User not found',
                HttpStatus.BAD_REQUEST
            )
        }

        if(!userByEmail?.emailVerifiedAt) {
            throw new HttpException(
                'Please first verify your email',
                HttpStatus.NON_AUTHORITATIVE_INFORMATION
            )
        }

        if(userByEmail?.phoneVerifiedAt) {
            throw new HttpException(
                'Phone already verified',
                HttpStatus.NON_AUTHORITATIVE_INFORMATION
            )
        }

        if(userByEmail?.phoneVerificationCode) {
            throw new HttpException(
                `Verification code already sent to your phone ********${userByEmail?.phone?.substring(9)}`,
                HttpStatus.NON_AUTHORITATIVE_INFORMATION
            )
        }

        const userByPhone: User = await this.userRepository.findOneBy({ phone: userDetails.phone })
        if(userByPhone && userByEmail?.email != userByPhone?.email) {
            throw new HttpException(
                'Phone already used by another user',
                HttpStatus.BAD_REQUEST
            )
        }

        try {
            const phoneVerificationCode: string = generateRandomNumber(4)
            // send verification code to phone via api https://mobizon.kz/
            await this.userRepository.update({ email: userDetails.email }, { 
                phone: userDetails.phone, 
                phoneVerificationCode 
            })

            return {
                message: `Verification code sent to your phone ********${userDetails.phone?.substring(9)}`
            }
        } catch (error) {
            throw new HttpException(
                'Something went wrong. Try again.',
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async verifyPhone(userDetails: VerifyPhoneParams) {
        const userByPhone: User = await this.userRepository.findOneBy({ phone: userDetails.phone })
        if(!userByPhone) {
            throw new HttpException(
                'User not found',
                HttpStatus.BAD_REQUEST
            )
        }
        if(userByPhone.phoneVerificationCode?.toLowerCase() !== userDetails.phoneVerificationCode?.toLowerCase()) {
            throw new HttpException(
                'Incorrect code',
                HttpStatus.BAD_REQUEST
            )
        }
        let message = 'Successfully logged in'
        if(!userByPhone.phoneVerifiedAt) {
            try {
                await this.userRepository.update({ phone: userDetails.phone }, { 
                    phoneVerificationCode: null, 
                    phoneVerifiedAt: new Date(), 
                    status: 'active' 
                })
                message = 'Phone successfully verified'
            } catch (error) {
                throw new HttpException(
                    'Something went wrong. Try again.',
                    HttpStatus.BAD_REQUEST
                )
            }
        } else {
            await this.userRepository.update({ phone: userDetails.phone }, { 
                phoneVerificationCode: null 
            })
        }
        const payload = { phone: userByPhone.phone, id: userByPhone.id }
        return {
            message,
            access_token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET_KEY })
        }
    }

    async login(userDetails: LoginParams) {
        const userByPhone: User = await this.userRepository.findOneBy({ phone: userDetails.phone })
        if(!userByPhone) {
            throw new HttpException(
                'User not found',
                HttpStatus.BAD_REQUEST
            )
        }

        if(!userByPhone?.phoneVerifiedAt) {
            throw new HttpException(
                'Please first verify your phone',
                HttpStatus.NON_AUTHORITATIVE_INFORMATION
            )
        }

        if(userByPhone?.phoneVerificationCode) {
            throw new HttpException(
                `Verification code already sent to your phone ********${userByPhone?.phone?.substring(9)}`,
                HttpStatus.NON_AUTHORITATIVE_INFORMATION
            )
        }

        try {
            const phoneVerificationCode: string = generateRandomNumber(4)
            // send verification code to phone via api https://mobizon.kz/
            await this.userRepository.update({ phone: userDetails.phone }, { 
                phoneVerificationCode 
            })

            return {
                message: `Verification code sent to your phone ********${userDetails.phone?.substring(9)}`
            }
        } catch (error) {
            throw new HttpException(
                'Something went wrong. Try again.',
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async validateToken(token: string) {
        const userDetails = this.jwtService.verify(token, { secret: process.env.JWT_SECRET_KEY })
        if(!userDetails?.phone || !userDetails?.id) {
            throw new HttpException(
                'Invalid token',
                HttpStatus.BAD_REQUEST
            )
        }
        const user: User = await this.userRepository.findOneBy({ phone: userDetails.phone, id: userDetails.id })
        if(user?.status !== 'active') {
            throw new HttpException(
                'Inactive user',
                HttpStatus.BAD_REQUEST
            )
        }
        return userDetails
    }
}
