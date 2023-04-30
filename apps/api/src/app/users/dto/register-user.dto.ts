import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The name of the user',
    example: 'John Smith',
    required: true,
  })
  name: string;

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
}
