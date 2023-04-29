import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { UpdateQuestionDto } from './dtos/update-question.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QuestionManagementConfig } from './question-management.config';
import { ApiImplicitParam } from '@nestjs/swagger/dist/decorators/api-implicit-param.decorator';
import { AnswerDto } from './dtos/answer.dto';
import { UpdateAnswerDto } from './dtos/update-answer.dto';
import { CreateAnswerDto } from './dtos/create-answer.dto';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags(QuestionManagementConfig.SWAGGER_FEATURE)
@Controller(QuestionManagementConfig.API_ROUTE)
export class QuestionManagementController {
  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  @Get()
  async getAllQuestions(): Promise<QuestionDto[]> {
    return this.questionService.readAll();
  }

  @Get(':id')
  async getQuestionById(@Param('id') id: string): Promise<QuestionDto> {
    return this.questionService.readById(id);
  }

  @Post()
  async createQuestion(@Body() dto: CreateQuestionDto): Promise<QuestionDto> {
    return this.questionService.create(dto);
  }

  @Patch(':id')
  async deleteQuestion(
    @Param('id') id: string,
    @Body() dto: UpdateQuestionDto
  ): Promise<QuestionDto> {
    return this.questionService.update(id, dto);
  }

  @Delete(':id')
  async updateQuestion(@Param('id') id: string): Promise<void> {
    return this.questionService.delete(id);
  }

  @Get(':questionId/answers')
  async getAllAnswers(
    @Param('questionId') questionId: string
  ): Promise<AnswerDto[]> {
    return this.answerService.readAllByQuestionId(questionId);
  }

  @Post(':questionId/answers')
  async addAnswer(
    @Body() answerDto: CreateAnswerDto,
    @Param('questionId') questionId: string
  ): Promise<AnswerDto> {
    return this.answerService.addAnswer(questionId, answerDto);
  }

  @ApiImplicitParam({ name: 'answerId', type: String })
  @Put(':questionId/answers/:answerId')
  async updateAnswer(
    @Body() answerDto: UpdateAnswerDto,
    @Param('answerId') answerId
  ): Promise<AnswerDto> {
    return this.answerService.update(answerId, answerDto);
  }

  @ApiImplicitParam({ name: 'answerId', type: String })
  @Delete(':questionId/answers/:answerId')
  async deleteAnswer(@Param('answerId') answerId: string): Promise<void> {
    return this.answerService.delete(answerId);
  }
}
