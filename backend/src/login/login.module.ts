import { Module } from '@nestjs/common';
import { LoginService } from './login.service';
import { LoginController } from './login.controller';
import LoginRepository from './login.repository';
import { PrismaModule } from 'src/PrismaDB/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LoginService, LoginRepository],
  controllers: [LoginController],
})
export class LoginModule {}
