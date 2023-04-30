import { ApiProperty } from '@nestjs/swagger';

export class RegisterUserDto {
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
    description: 'The password of the user',
    example: 'password',
    required: true,
  })
  password: string;
}
