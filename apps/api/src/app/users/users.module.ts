import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/user.model';
import { UsersController } from './controllers/users.controller';
import { RolesGuard } from './models/role.guard';

@Module({
  imports: [TypeOrmModule.forFeature([UserModel])],
  controllers: [UsersController],
  providers: [UsersService, RolesGuard],
  exports: [TypeOrmModule, UsersService, RolesGuard],
})
export class UsersModule {}
