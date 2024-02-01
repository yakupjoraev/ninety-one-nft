import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class VerifyPhoneDto {
    @IsNotEmpty()
    @IsPhoneNumber('KZ', {
        message: 'Phone must be in KZ format'
    })
    phone: string;

    @IsNotEmpty()
    phoneVerificationCode: string;
}