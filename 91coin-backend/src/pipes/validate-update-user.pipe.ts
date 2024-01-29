import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { UpdateUserDto } from 'src/dtos/UpdateUser.dto';

@Injectable()
export class ValidateUpdateUserPipe implements PipeTransform {
  transform(value: UpdateUserDto, metadata: ArgumentMetadata) {
    const phone = value.phone.replaceAll(' ', '').replace('-', '').replace('+', '')
    return {...value, phone};
  }
}
