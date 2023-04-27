import { CreateAnswerDto } from '../dtos/create-answer.dto';
import { AnswerModel } from '../models/answer.model';
import { UpdateAnswerDto } from '../dtos/update-answer.dto';
import { AnswerDto } from '../dtos/answer.dto';

export class AnswerMapper {
  static mapCreateAnswerToModel(dto: CreateAnswerDto): AnswerModel {
    return new AnswerModel({
      id: undefined,
      rating: 0,
      content: dto.content,
      creationDate: new Date(),
    });
  }

  static mapUpdateAnswerToModel(
    dto: UpdateAnswerDto,
    oldModel: AnswerModel
  ): AnswerModel {
    return new AnswerModel({
      ...oldModel,
      content: dto.content,
    });
  }

  static mapToDto(model: AnswerModel): AnswerDto {
    return new AnswerDto({
      id: model.id,
      content: model.content,
      rating: model.rating,
      creationDate: model.creationDate,
    });
  }
}
