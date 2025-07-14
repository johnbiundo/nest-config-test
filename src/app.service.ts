import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {
    console.log('AppService -> foo:', this.configService.get('FOO'));
    console.log('AppService -> bar:', this.configService.get<number>('BAR'));
    const bar = this.configService.get<number>('BAR');
    console.log('type of bar: ', typeof bar);
    const barplus1 = bar + 1;
    console.log('AppService -> barplus1: ', barplus1);
    const port = this.configService.get<number>('PORT');
    console.log('AppService -> port: ', port);
    console.log('type of port: ', typeof port);
    console.log(
      'AppService -> database: ',
      this.configService.get('database', { host: 'localhost', port: 3333 }),
    );
    console.log(
      'AppService -> database2: ',
      this.configService.get('database2'),
    );
  }

  getHello(): string {
    return 'Hello World!';
  }
}
