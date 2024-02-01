import { IsNotEmpty, IsPhoneNumber } from "class-validator";

export class LoginDto {
    @IsNotEmpty()
    @IsPhoneNumber('KZ', {
        message: 'Phone must be in KZ format'
    })
    phone: string;
}