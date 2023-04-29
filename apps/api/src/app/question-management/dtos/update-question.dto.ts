import { ApiProperty } from '@nestjs/swagger';

export class UpdateQuestionDto {
  @ApiProperty({
    description: 'The title of the question',
    example: 'How does the Event Loop work in the Browser?',
    required: false,
  })
  title: string;

  @ApiProperty({
    description: 'The content of the question',
    example: 'How does the Event Loop work in the Browser?',
    required: true,
  })
  content: string;
}
