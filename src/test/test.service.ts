import { Injectable } from '@nestjs/common';
import * as config from '@nestjs/config';

@Injectable()
export class TestService {
  constructor(private readonly configService: config.ConfigService) {
    console.log('TestService -> foo:', this.configService.get('FOO'));
    console.log('TestService -> bar:', this.configService.get<number>('BAR'));
  }
}
