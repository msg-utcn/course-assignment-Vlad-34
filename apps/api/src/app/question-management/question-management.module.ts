import { Module } from '@nestjs/common';
import { QuestionManagementController } from './question-management.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionModel } from './model/question.model';
import { AnswerService } from './services/answer.service';
import { AnswerModel } from './model/answer.model';
import { QuestionService } from './services/question.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionModel, AnswerModel]),
    UsersModule,
  ],
  controllers: [QuestionManagementController],
  providers: [QuestionService, AnswerService],
})
export class QuestionManagementModule {}
