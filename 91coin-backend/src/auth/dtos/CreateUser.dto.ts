import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsOptional()
    @IsPhoneNumber('KZ', {
        message: 'Referrer must be in KZ format'
    })
    referrer: string;
}