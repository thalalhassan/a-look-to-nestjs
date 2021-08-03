import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TestNestResouceGenetatorModule } from './test-nest-resouce-genetator/test-nest-resouce-genetator.module';

@Module({
  imports: [UsersModule, TestNestResouceGenetatorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
