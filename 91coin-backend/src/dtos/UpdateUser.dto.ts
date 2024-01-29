import { IsEmail, IsNotEmpty, IsPhoneNumber } from "class-validator";

export class UpdateUserDto {
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsPhoneNumber('KZ', {
        message: 'Phone must be in KZ format'
    })
    phone: string;
}