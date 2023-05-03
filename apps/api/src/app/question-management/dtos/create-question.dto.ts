import { QuestionTopic } from '../model/question-topic';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateQuestionDto {
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the question',
    example: 'What is a promise in JavaScript?',
    required: true,
  })
  title: string;

  @IsUUID()
  @ApiProperty({
    description: 'The UUID of the User who posted the question',
    example: '238d8271-33cd-4c31-ab6a-58fc9df30a5e',
    required: true,
  })
  postedBy: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The content of the question',
    example: 'What is a promise in JavaScript?',
    required: true,
  })
  content: string;

  @IsNotEmpty()
  @ApiProperty({
    description: 'The topic of the question',
    enum: QuestionTopic,
    example: QuestionTopic.JavaScript,
    required: true,
  })
  topic: QuestionTopic;
}
