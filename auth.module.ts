import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller'

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([User])],
  providers: [AuthService, EmailService],
  exports: [AuthService, EmailService], 
})
export class AuthModule {}
