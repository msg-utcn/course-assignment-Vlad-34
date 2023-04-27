import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsStrongPassword } from 'class-validator';

export class LoginUserDto {
  @IsEmail()
  @ApiProperty({
    description: 'The email of the user',
    example: 'john@email.com',
    required: true,
  })
  email: string;

  @IsStrongPassword()
  @ApiProperty({
    description: 'The password of the user',
    example: 'password',
    required: true,
  })
  password: string;

  constructor(values: Partial<LoginUserDto>) {
    if (values) {
      this.password = values.password;
      this.email = values.email;
    }
  }
}
