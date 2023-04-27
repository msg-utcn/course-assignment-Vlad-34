import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LoginUserDto } from '../users/dtos/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtTokenDto } from './dto/jwt-token.dto';
import { UserDto } from '../users/dtos/user.dto';
import { JwtPayloadDto } from './dto/jwt-payload.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validate(dto: LoginUserDto): Promise<UserDto | null> {
    const isValid = await this.usersService.checkCredentials(dto);
    if (isValid) {
      return await this.usersService.getUserByEmail(dto.email);
    }
    return null;
  }
  async login(dto: JwtPayloadDto): Promise<JwtTokenDto> {
    return {
      access_token: this.jwtService.sign({
        email: dto.email,
        sub: dto.userId,
      }),
    };
  }
}
