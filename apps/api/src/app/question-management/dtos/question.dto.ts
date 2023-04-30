import { QuestionTopic } from '../model/question-topic';
import { ApiProperty } from '@nestjs/swagger';

export class QuestionDto {
  @ApiProperty({
    description: 'The UUID of the question',
    example: '599c9544-d8da-4761-a17f-d9c21eb5869c',
    required: false,
  })
  id?: string;

  @ApiProperty({
    description: 'The title of the question',
    example: 'What is a promise in JavaScript?',
    required: false,
  })
  title: string;

  @ApiProperty({
    description: 'The UUID of the User who posted the question',
    example: '238d8271-33cd-4c31-ab6a-58fc9df30a5e',
    required: false,
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

  @ApiProperty({
    description:
      'The calculated rating of the answer based on number of upvotes or downvotes',
    required: false,
  })
  rating?: number;

  @ApiProperty({
    description: 'The ISO date in UTC of the time when the question of created',
    required: false,
  })
  creationDate: string;

  constructor(values: Partial<QuestionDto>) {
    if (values) {
      this.id = values.id;
      this.title = values.title;
      this.postedBy = values.postedBy;
      this.content = values.content;
      this.topic = values.topic;
      this.rating = values.rating;
      this.creationDate = values.creationDate;
    }
  }
}
