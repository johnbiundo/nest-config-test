import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class Test2Service {
  constructor(private readonly configService: ConfigService) {
    // console.log('Test2Service -> foo: ', this.configService.get<string>('FOO'));
  }
}
