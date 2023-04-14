import {UserRole} from "./user-role";
import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class UserModel {

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column( {nullable: false} )
  name: string;

  @Column( {nullable: false} )
  email: string;

  @Column( {nullable: true} )
  password: string;

  @Column( {nullable: true, enum: UserRole, type: 'enum'} )
  roles: UserRole[];

  constructor(values: Partial<UserModel>) {
    if(values) {
      this.id = values.id;
      this.name = values.name;
      this.email = values.email;
      this.password = values.password;
      this.roles = values.roles;
    }
  }

}
