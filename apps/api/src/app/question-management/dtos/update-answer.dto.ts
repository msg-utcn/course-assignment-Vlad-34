import { ApiProperty } from '@nestjs/swagger';

export class UpdateAnswerDto {
  @ApiProperty({
    description: 'The content of the answer',
    example:
      'A placeholder for a value that will be available in the future, allowing us to handle the result of an asynchronous task once it has completed or encountered an error.',
    required: true,
  })
  content: string;
}
