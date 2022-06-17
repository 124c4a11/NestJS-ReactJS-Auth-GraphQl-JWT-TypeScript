import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      usernameField: 'name',
    });
  }

  // The arguments must be called "usename" and "password"!
  // Their names can be redefined to super using the "usernameField" and "passwordField" properties!
  async validate(name: string, password: string): Promise<any> {
    const user = await this.authService.validateUser(name, password);

    if (!user) throw new UnauthorizedException();

    return user;
  }
}
