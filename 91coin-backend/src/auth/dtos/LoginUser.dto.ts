import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class LoginUserDto {
    @IsNotEmpty()
    @IsPhoneNumber('KZ', {
        message: 'Phone must be in KZ format'
    })
    phone: string;

    @IsNotEmpty()
    phoneVerificationCode: string;
}