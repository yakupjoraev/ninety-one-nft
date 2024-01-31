import { Body, Controller, Get, HttpStatus, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/auth/dtos/CreateUser.dto';
import { UpdateUserDto } from 'src/auth/dtos/UpdateUser.dto';
import { ValidateUpdateUserPipe } from 'src/auth/pipes/validate-update-user.pipe';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from './dtos/LoginUser.dto';
import { AuthGuard } from './auth.guard';

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

    @Post('login')
    login(@Body(ValidateUpdateUserPipe) loginUserDto: LoginUserDto) {
        return this.authService.login(loginUserDto)
    }

    @UseGuards(AuthGuard)
    @Get('status')
    async status(@Req() req: Request, @Res() res: Response) {
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
