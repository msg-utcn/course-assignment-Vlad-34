import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateAnswerDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The content of the answer',
    example: 'Ask ChatGPT for this answer',
    required: true,
  })
  content: string;

  @IsUUID()
  @ApiProperty({
    description: 'The UUID of the User who posted the question',
    example: 'be238107-891e-4f73-b5e9-82449a856b84',
    required: true,
  })
  postedBy: string;

  @IsUUID()
  @ApiProperty({
    description: 'The UUID of the question',
    example: '599c9544-d8da-4761-a17f-d9c21eb5869c',
    required: true,
  })
  parentId: string;
}
