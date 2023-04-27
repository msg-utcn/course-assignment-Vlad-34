import { RegisterUserDto } from '../dtos/register-user.dto';
import { UserDto } from '../dtos/user.dto';
import { UserModel } from '../model/user.model';
import bcrypt from 'bcrypt';
import { UserRole } from '../model/user-role';

export class UserMapper {
  static mapToDto(model: UserModel): UserDto {
    return new UserDto({
      id: model.id,
      name: model.name,
      email: model.email,
      roles: model.roles,
    });
  }

  static async mapRegisterToModel(dto: RegisterUserDto): Promise<UserModel> {
    return new UserModel({
      id: undefined,
      name: dto.name,
      email: dto.email,
      password: await bcrypt.hash(dto.password, 12),
      roles: [UserRole.USER],
    });
  }
}
