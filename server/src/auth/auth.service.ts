import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserInput } from 'src/users/dto/create-user.input';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { LoginResponse } from './dto/login-response';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(name: string, password: string): Promise<User | null> {
    const user: User = await this.usersService.findOne(name);

    const isValidPassword = await bcrypt.compare(password, user?.password);

    if (user && isValidPassword) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: User): Promise<LoginResponse> {
    return {
      access_token: this.jwtService.sign({ name: user.name, sub: user.id }),
      user,
    };
  }

  async signup(createUserInput: CreateUserInput) {
    const candidate: User = await this.usersService.findOne(
      createUserInput.name,
    );

    if (candidate) throw new Error('User already exists!');

    const password = await bcrypt.hash(createUserInput.password, 5);

    return this.usersService.create({ ...createUserInput, password });
  }
}
