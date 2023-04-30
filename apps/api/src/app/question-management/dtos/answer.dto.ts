import { ApiProperty } from '@nestjs/swagger';

export class AnswerDto {
  @ApiProperty({
    description: 'The UUID of the answer',
    example: '305b663e-8e11-44c1-889d-ffa4165f2336',
    required: false,
  })
  id?: string;

  @ApiProperty({
    description: 'The content of the answer',
    example:
      'A placeholder for a value that will be available in the future, allowing us to handle the result of an asynchronous task once it has completed or encountered an error.',
    required: true,
  })
  content: string;

  @ApiProperty({
    description: 'The UUID of the question',
    example: '599c9544-d8da-4761-a17f-d9c21eb5869c',
    required: true,
  })
  parentId: string;

  @ApiProperty({
    description: 'The UUID of the User who posted the answer',
    example: 'be238107-891e-4f73-b5e9-82449a856b84',
  })
  postedBy: string;

  @ApiProperty({
    description:
      'The calculated rating of the answer based on number of upvotes or downvotes',
    required: false,
  })
  rating?: number;

  @ApiProperty({
    description: 'The ISO date in UTC of the time when the answer of created',
    required: false,
  })
  creationDate?: string;

  constructor(values: Partial<AnswerDto>) {
    if (values) {
      this.id = values.id;
      this.content = values.content;
      this.postedBy = values.postedBy;
      this.parentId = values.parentId;
      this.rating = values.rating;
      this.creationDate = values.creationDate;
    }
  }
}
