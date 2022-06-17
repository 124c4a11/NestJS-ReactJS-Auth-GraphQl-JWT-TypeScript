import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './strategies/local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  providers: [AuthService, AuthResolver, LocalStrategy],
  imports: [UsersModule, PassportModule],
})
export class AuthModule {}
