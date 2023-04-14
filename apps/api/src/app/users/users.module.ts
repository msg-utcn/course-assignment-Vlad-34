import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserModel} from "./model/user.model";
import {UsersService} from "./users.service";
import {UsersController} from "./users.controller";

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
