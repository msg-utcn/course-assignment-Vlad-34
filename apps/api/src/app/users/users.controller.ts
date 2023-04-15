import { ApiTags } from '@nestjs/swagger';
import { UsersConfig } from './users.config';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { RegisterUserDto } from './dtos/register-user.dto';
import { UserDto } from './dtos/user.dto';

@ApiTags(UsersConfig.SWAGGER_FEATURE)
@Controller(UsersConfig.API_ROUTE)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async registerUser(@Body() dto: RegisterUserDto): Promise<UserDto> {
    return this.usersService.registerUser(dto);
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.getUserById(id);
  }

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return this.usersService.getUsers();
  }
}
