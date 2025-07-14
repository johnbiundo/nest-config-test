import { Module } from '@nestjs/common';
import { Test2Service } from './test2.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  providers: [Test2Service],
  imports: [ConfigModule],
})
export class Test2Module {}
