import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/utils/typeorm/entities/User';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';
import { generateRandomNumber, generateRandomString } from 'src/utils/helpers';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User>,
    ) {}

    async createUserViaEmail(userDetails: CreateUserParams) {
        const oldUser: User = await this.userRepository.findOneBy({ email: userDetails.email })

        if(oldUser && oldUser?.emailVerifiedAt) {
            throw new HttpException(
                'Email already verified',
                HttpStatus.BAD_REQUEST
            )
        }

        if(oldUser?.emailVerificationCode) {
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
        const oldUserByEmail: User = await this.userRepository.findOneBy({ email: userDetails.email })
        if(!oldUserByEmail) {
            throw new HttpException(
                'User not found',
                HttpStatus.BAD_REQUEST
            )
        }

        if(!oldUserByEmail?.emailVerifiedAt) {
            throw new HttpException(
                'Please first verify your email',
                HttpStatus.BAD_REQUEST
            )
        }

        if(oldUserByEmail?.phoneVerifiedAt) {
            throw new HttpException(
                'Phone already verified',
                HttpStatus.BAD_REQUEST
            )
        }

        if(oldUserByEmail?.phoneVerificationCode) {
            throw new HttpException(
                `Verification code already sent to your phone ********${oldUserByEmail?.phone?.substring(9)}`,
                HttpStatus.BAD_REQUEST
            )
        }

        if(oldUserByEmail?.phone && oldUserByEmail?.phone != userDetails.phone) {
            throw new HttpException(
                `The user previously used another phone with the ending ********${oldUserByEmail?.phone?.substring(9)}`,
                HttpStatus.BAD_REQUEST
            )
        }

        const oldUserByPhone: User = await this.userRepository.findOneBy({ phone: userDetails.phone })
        if(oldUserByPhone && oldUserByEmail.email != oldUserByPhone?.email) {
            throw new HttpException(
                'Phone already used by another user',
                HttpStatus.BAD_REQUEST
            )
        }

        try {
            const phoneVerificationCode: string = generateRandomNumber(4)
            await this.userRepository.update({ email: userDetails.email }, { phone: userDetails.phone, phoneVerificationCode })

            return {
                message: `Verification code sent to your phone ********${oldUserByEmail?.phone?.substring(9)}`
            }
        } catch (error) {
            throw new HttpException(
                'Something went wrong. Try again.',
                HttpStatus.BAD_REQUEST
            )
        }
    }
}
