import { Module } from '@nestjs/common';
import { TestService } from './test.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [TestService],
  imports: [ConfigModule],
})
export class TestModule {}
