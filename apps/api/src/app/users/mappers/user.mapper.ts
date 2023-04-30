import { UserDto } from '../dto/user.dto';
import { UserModel } from '../models/user.model';
import { RegisterUserDto } from '../dto/register-user.dto';

export class UserMapper {
  static mapToDto(model: UserModel): UserDto {
    return new UserDto({
      id: model.id,
      email: model.email,
      roles: model.roles,
    });
  }

  static mapRegisterDtoToModel(
    dto: RegisterUserDto,
    hashedPassword: string
  ): UserModel {
    return new UserModel({
      id: undefined,
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      roles: undefined,
    });
  }
}
