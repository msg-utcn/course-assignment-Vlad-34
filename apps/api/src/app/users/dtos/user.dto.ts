import {UserRole} from "../model/user-role";

export class UserDto {
  id?: string;
  name: string;
  email: string;
  roles: UserRole[];

  constructor(values: Partial<UserDto>) {
    if(values) {
      this.id = values.id;
      this.name = values.name;
      this.email = values.email;
      this.roles = values.roles;
    }
  }

}
