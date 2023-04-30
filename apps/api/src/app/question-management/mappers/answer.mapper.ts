import { AnswerModel } from '../model/answer.model';
import { AnswerDto } from '../dtos/answer.dto';
import { CreateAnswerDto } from '../dtos/create-answer.dto';
import { UpdateAnswerDto } from '../dtos/update-answer.dto';
import { QuestionModel } from '../model/question.model';
import { UserModel } from '../../users/models/user.model';

export class AnswerMapper {
  static mapToDto(model: AnswerModel): AnswerDto {
    return new AnswerDto({
      id: model.id,
      content: model.content,
      parentId: model.parent.id,
      rating: model.rating,
      creationDate: new Date(model.creationDate).toISOString(),
    });
  }

  static mapCreateDtoToModel(
    dto: CreateAnswerDto,
    parent: QuestionModel,
    postedByUser: UserModel
  ): AnswerModel {
    return new AnswerModel({
      id: undefined,
      content: dto.content,
      parent,
      postedBy: postedByUser,
      rating: 0,
      creationDate: new Date(),
    });
  }

  static mapUpdateDtoToModel(
    dto: UpdateAnswerDto,
    oldModel: AnswerModel
  ): AnswerModel {
    return new AnswerModel({
      id: oldModel.id,
      content: dto.content,
      parent: oldModel.parent,
      postedBy: oldModel.postedBy,
      rating: oldModel.rating,
      creationDate: oldModel.creationDate,
    });
  }
}
