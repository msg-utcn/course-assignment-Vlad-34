import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class UpdateQuestionDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the question',
    example: 'How does the Event Loop work in the Browser?',
    required: false,
  })
  title: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The content of the question',
    example: 'How does the Event Loop work in the Browser?',
    required: true,
  })
  content: string;
}
