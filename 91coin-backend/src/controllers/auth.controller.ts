import { Body, Controller, Post, Put } from '@nestjs/common';
import { CreateUserDto } from 'src/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/dtos/UpdateUser.dto';
import { ValidateUpdateUserPipe } from 'src/pipes/validate-update-user.pipe';
import { AuthService } from 'src/services/auth.service';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('register')
    createUserViaEmail(@Body() createUserDto: CreateUserDto) {
        return this.authService.createUserViaEmail({email: createUserDto.email})
    }

    @Put('register')
    updateUserPhone(@Body(ValidateUpdateUserPipe) updateUserDto: UpdateUserDto) {
        return this.authService.updateUserPhoneByEmail(updateUserDto)
    }
}
