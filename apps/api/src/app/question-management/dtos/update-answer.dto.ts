import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateAnswerDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The content of the answer',
    example: 'something',
    required: true,
  })
  content: string;
}
