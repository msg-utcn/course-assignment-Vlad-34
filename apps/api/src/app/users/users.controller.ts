import { ApiTags } from '@nestjs/swagger';
import { UsersConfig } from './users.config';
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserDto } from './dtos/user.dto';
import { RegisterUserDto } from './dtos/register-user.dto';
import { UsersService } from './users.service';

@ApiTags(UsersConfig.SWAGGER_FEATURE)
@Controller(UsersConfig.API_ROUTE)
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async getUsers(): Promise<UserDto[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<UserDto> {
    return this.userService.getUserById(id);
  }

  @Post()
  async registerUser(@Body() dto: RegisterUserDto): Promise<UserDto> {
    return this.userService.registerUser(dto);
  }
}
