import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    throw new HttpException(
      'Hello 91ninetyone!',
      HttpStatus.OK
    )
  }
}
