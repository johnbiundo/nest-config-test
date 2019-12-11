import { Module } from '@nestjs/common';
import { Test2Service } from './test2.service';

@Module({
  providers: [Test2Service]
})
export class Test2Module {}
