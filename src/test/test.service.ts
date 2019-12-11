import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TestService {
  constructor(private readonly configService: ConfigService) {
    console.log('TestService -> foo:', this.configService.get('FOO'));
    console.log('TestService -> bar:', this.configService.get<number>('BAR'));
  }
}
