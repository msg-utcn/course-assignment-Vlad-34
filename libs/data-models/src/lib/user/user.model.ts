import {UserRole} from "../../../../../apps/api/src/app/users/models/user-role.model";

export interface UserModel {
  id?: string;
  username?: string;
  role?: UserRole[];
}
