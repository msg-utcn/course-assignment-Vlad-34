import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { QuestionDto } from './dtos/question.dto';
import { QuestionService } from './services/question.service';
import { CreateQuestionDto } from './dtos/create-question.dto';
import { UpdateQuestionDto } from './dtos/update-question.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QuestionManagementConfig } from './question-management.config';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { AnswerDto } from './dtos/answer.dto';
import { CreateAnswerDto } from './dtos/create-answer.dto';
import { UpdateAnswerDto } from './dtos/update-answer.dto';
import { AnswerService } from './services/answer.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags(QuestionManagementConfig.SWAGGER_FEATURE)
@Controller(QuestionManagementConfig.API_ROUTE)
export class QuestionManagementController {
  constructor(
    private questionService: QuestionService,
    private answerService: AnswerService
  ) {}

  @Get('answers')
  async getAllAnswers(): Promise<AnswerDto[]> {
    return this.answerService.readAll();
  }

  @Get()
  async getAllQuestions(): Promise<QuestionDto[]> {
    return this.questionService.readAll();
  }

  @Get(':id')
  async getQuestionById(@Param('id') id: string): Promise<QuestionDto> {
    return this.questionService.readById(id);
  }

  @Post('answers')
  async createAnswer(@Body() dto: CreateAnswerDto): Promise<AnswerDto> {
    return this.answerService.create(dto);
  }

  @Post()
  async createQuestion(@Body() dto: CreateQuestionDto): Promise<QuestionDto> {
    return this.questionService.create(dto);
  }

  @Patch('answers/:id')
  async updateAnswer(
    @Param('id') id: string,
    @Body() dto: UpdateAnswerDto
  ): Promise<AnswerDto> {
    return this.answerService.update(id, dto);
  }

  @Patch(':id')
  async updateQuestion(
    @Param('id') id: string,
    @Body() dto: UpdateQuestionDto
  ): Promise<QuestionDto> {
    return this.questionService.update(id, dto);
  }

  @Delete('answers/:id')
  async deleteAnswer(@Param('id') id: string): Promise<void> {
    return this.answerService.delete(id);
  }

  @Delete(':id')
  async deleteQuestion(@Param('id') id: string): Promise<void> {
    return this.questionService.delete(id);
  }
}
