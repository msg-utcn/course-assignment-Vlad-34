import { UserRole } from './user-role.model';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { QuestionModel } from '../../question-management/model/question.model';
import { AnswerModel } from '../../question-management/model/answer.model';

@Entity()
export class UserModel {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: [UserRole.USER],
    nullable: false,
    array: true,
  })
  roles: UserRole[];

  @OneToMany(() => QuestionModel, (question) => question.postedBy, {
    lazy: true,
  })
  questions?: QuestionModel[];

  @OneToMany(() => AnswerModel, (answer) => answer.postedBy, { lazy: true })
  answers?: AnswerModel[];

  constructor(values: Partial<UserModel>) {
    if (values) {
      this.id = values.id;
      this.name = values.name;
      this.email = values.email;
      this.password = values.password;
      this.roles = values.roles;
    }
  }
}
