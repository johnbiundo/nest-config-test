import { Injectable } from '@nestjs/common';
import * as config from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: config.ConfigService) {
    console.log('AppService -> foo:', this.configService.get('FOO'));
    console.log('AppService -> bar:', this.configService.get<number>('BAR'));
  }

  getHello(): string {
    return 'Hello World!';
  }
}
