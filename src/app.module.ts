import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import {ConfigModule} from '@nestjs/config';
import { Test2Module } from './test2/test2.module';

@Module({
  imports: [TestModule, ConfigModule.forRoot(), Test2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
