import { CanActivate, ExecutionContext, ForbiddenException, HttpException, HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly authService: AuthService) {}

  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean> {
    try {
      const request = context.switchToHttp().getRequest()
      const { authorization }: any = request.headers
      if (!authorization || authorization.trim() === '') {
        throw new HttpException(
          'Please provide token',
          HttpStatus.ACCEPTED
        )
        throw new UnauthorizedException('')
      }
      const authToken = authorization.split(' ')[1]
      const userDetails = await this.authService.validateToken(authToken)
      request.decodedData = userDetails
      return true
    } catch (error) {
      throw new HttpException(
        error.message || 'session expired! Please sign in',
        HttpStatus.ACCEPTED
      )
    }
  }
}
