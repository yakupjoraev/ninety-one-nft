import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/utils/typeorm/entities/User';
import { CreateUserParams, LoginUserParams, UpdateUserParams } from 'src/utils/types';
import { generateRandomNumber, generateRandomString } from 'src/utils/helpers';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
        private jwtService: JwtService,
    ) {}

    async createUserViaEmail(userDetails: CreateUserParams) {
        const user: User = await this.userRepository.findOneBy({ email: userDetails.email })

        if(user && user?.emailVerifiedAt) {
            throw new HttpException(
                'Email already verified',
                HttpStatus.BAD_REQUEST
            )
        }

        if(user?.emailVerificationCode) {
            throw new HttpException(
                'Verification code already sent to your email',
                HttpStatus.BAD_REQUEST
            )
        }

        const emailVerificationCode: string = generateRandomString(6)

        try {
            const newUser = this.userRepository.create({
                ...userDetails,
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
                HttpStatus.BAD_REQUEST
            )
        }

        if(userByEmail?.phoneVerifiedAt) {
            throw new HttpException(
                'Phone already verified',
                HttpStatus.BAD_REQUEST
            )
        }

        if(userByEmail?.phoneVerificationCode) {
            throw new HttpException(
                `Verification code already sent to your phone ********${userByEmail?.phone?.substring(9)}`,
                HttpStatus.BAD_REQUEST
            )
        }

        if(userByEmail?.phone && userByEmail?.phone != userDetails.phone) {
            throw new HttpException(
                `The user previously used another phone with the ending ********${userByEmail?.phone?.substring(9)}`,
                HttpStatus.BAD_REQUEST
            )
        }

        const userByPhone: User = await this.userRepository.findOneBy({ phone: userDetails.phone })
        if(userByPhone && userByEmail.email != userByPhone?.email) {
            throw new HttpException(
                'Phone already used by another user',
                HttpStatus.BAD_REQUEST
            )
        }

        try {
            const phoneVerificationCode: string = generateRandomNumber(4)
            await this.userRepository.update({ email: userDetails.email }, { phone: userDetails.phone, phoneVerificationCode })

            return {
                message: `Verification code sent to your phone ********${userByEmail?.phone?.substring(9)}`
            }
        } catch (error) {
            throw new HttpException(
                'Something went wrong. Try again.',
                HttpStatus.BAD_REQUEST
            )
        }
    }

    async login({ phone, phoneVerificationCode }: LoginUserParams) {
        const userByPhone: User = await this.userRepository.findOneBy({ phone })
        if(!userByPhone) {
            throw new HttpException(
                'User not exist',
                HttpStatus.BAD_REQUEST
            )
        }
        if(userByPhone?.status !== 'active') {
            throw new HttpException(
                'Inactive user',
                HttpStatus.FORBIDDEN
            )
        }
        if(userByPhone.phoneVerificationCode?.toLowerCase() !== phoneVerificationCode?.toLowerCase()) {
            throw new HttpException(
                'Incorrect code',
                HttpStatus.BAD_REQUEST
            )
        }
        const payload = { phone: userByPhone.phone, id: userByPhone.id }
        return {
            access_token: this.jwtService.sign(payload, { secret: process.env.JWT_SECRET_KEY })
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
