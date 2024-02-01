import { Body, Controller, Get, HttpStatus, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateUpdateUserPipe } from 'src/auth/pipes/validate-update-user.pipe';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from './auth.guard';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { VerifyEmailDto } from './dtos/VerifyEmail.dto';
import { UpdateUserDto } from './dtos/UpdateUser.dto';
import { VerifyPhoneDto } from './dtos/VerifyPhone.dto';
import { LoginDto } from './dtos/Login.dto';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('register')
    createUserByEmail(@Body() createUserDto: CreateUserDto) {
        return this.authService.createUserByEmail(createUserDto)
    }

    @Post('verify-email')
    verifyEmail(@Body() verifyEmailDto: VerifyEmailDto) {
        return this.authService.verifyEmail(verifyEmailDto)
    }

    @Put('register')
    updateUserPhoneByEmail(@Body(ValidateUpdateUserPipe) updateUserDto: UpdateUserDto) {
        return this.authService.updateUserPhoneByEmail(updateUserDto)
    }

    @Post('verify-phone')
    verifyPhone(@Body(ValidateUpdateUserPipe) verifyPhoneDto: VerifyPhoneDto) {
        return this.authService.verifyPhone(verifyPhoneDto)
    }

    @Post('login')
    login(@Body(ValidateUpdateUserPipe) loginDto: LoginDto) {
        return this.authService.login(loginDto)
    }

    @UseGuards(AuthGuard)
    @Get('status')
    status(@Req() req: Request, @Res() res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'OK'
        })
    }

    @UseGuards(AuthGuard)
    @Post('logout')
    logout(@Req() req: Request, @Res() res: Response) {
        res.sendStatus(200)
    }
}
