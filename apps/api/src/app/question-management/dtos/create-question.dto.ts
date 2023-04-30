import { QuestionTopic } from '../model/question-topic';
import { ApiProperty } from '@nestjs/swagger';

export class CreateQuestionDto {
  @ApiProperty({
    description: 'The title of the question',
    example: 'What is a promise in JavaScript?',
    required: true,
  })
  title: string;

  @ApiProperty({
    description: 'The UUID of the User who posted the question',
    example: '238d8271-33cd-4c31-ab6a-58fc9df30a5e',
    required: true,
  })
  postedBy: string;

  @ApiProperty({
    description: 'The content of the question',
    example: 'What is a promise in JavaScript?',
    required: true,
  })
  content: string;

  @ApiProperty({
    description: 'The topic of the question',
    enum: QuestionTopic,
    example: QuestionTopic.JavaScript,
    required: true,
  })
  topic: QuestionTopic;
}
