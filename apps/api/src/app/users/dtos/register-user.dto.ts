import {ApiProperty} from "@nestjs/swagger";

export class RegisterUserDto {
  @ApiProperty({
    description: 'Name of user',
    example: 'Ion Pop',
    required: true
  })
  name: string;

  @ApiProperty({
    description: 'Email of user',
    example: 'ion.pop@gmail.com',
    required: true
  })
  email: string;

  @ApiProperty({
    description: 'Password of user',
    example: 'someGibberish',
    required: true
  })
  password: string;
}
