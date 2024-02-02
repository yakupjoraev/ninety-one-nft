import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { UpdateUserDto } from 'src/auth/dtos/UpdateUser.dto';

@Injectable()
export class ValidateUserDetailsPipe implements PipeTransform {
  transform(value: UpdateUserDto, metadata: ArgumentMetadata) {
    const phone = value?.phone?.replaceAll(' ', '').replaceAll('-', '').replaceAll('+', '')
    const referrer = value?.referrer?.replaceAll(' ', '').replaceAll('-', '').replaceAll('+', '')
    return {...value, phone, referrer};
  }
}
