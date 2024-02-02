import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber('KZ', {
        message: 'Phone must be in KZ format'
    })
    phone: string;

    @IsOptional()
    @IsPhoneNumber('KZ', {
        message: 'Referrer must be in KZ format'
    })
    referrer: string;
}