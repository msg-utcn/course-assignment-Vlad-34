import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './models/user.model';
import { UsersController } from './controllers/users.controller';

@Module({
    imports: [TypeOrmModule.forFeature([UserModel])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [TypeOrmModule, UsersService]
})
export class UsersModule {}
