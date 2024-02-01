import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class VerifyEmailDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    emailVerificationCode: string;
}