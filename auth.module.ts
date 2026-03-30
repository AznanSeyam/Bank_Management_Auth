import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([User])],
  providers: [AuthService, EmailService],
  controllers: [AuthController],
  exports: [AuthService, EmailService], 
})
export class AuthModule {}
