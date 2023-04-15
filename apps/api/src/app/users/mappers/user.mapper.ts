import { UserModel } from '../model/user.model';
import { UserDto } from '../dtos/user.dto';
import { RegisterUserDto } from '../dtos/register-user.dto';
import bcrypt from 'bcrypt';
import { UserRole } from '../model/user-role';
import { Logger } from '@nestjs/common';

export class UserMapper {
  static mapUserToDto(model: UserModel): UserDto {
    return new UserDto({
      id: model.id,
      name: model.name,
      email: model.email,
      roles: model.roles,
    });
  }

  static mapRegisterToModel(dto: RegisterUserDto): UserModel {
    return new UserModel({
      id: undefined,
      name: dto.name,
      email: dto.email,
      password: bcrypt.hash(dto.password, 12, (err, hash) => {
        if (err) {
          Logger.error(err);
          return null;
        }
      }),
      roles: [UserRole.USER],
    });
  }
}
