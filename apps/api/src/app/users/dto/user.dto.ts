import { UserRole } from '../models/user-role.model';
import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    description: 'The UUID of the user',
    required: true,
  })
  id?: string;

  @ApiProperty({
    description: 'The name of the user',
    example: 'John Smith',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'john@email.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    description: 'The role of the user',
    enum: UserRole,
    required: true,
    isArray: true,
  })
  roles: UserRole[];

  constructor(values: Partial<UserDto>) {
    if (values) {
      this.id = values.id;
      this.name = values.name;
      this.email = values.email;
      this.roles = values.roles;
    }
  }
}
