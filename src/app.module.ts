import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { ConfigModule } from '@nestjs/config';
import { Test2Module } from './test2/test2.module';
import config1 from '../config/config1';
import config2 from '../config/config2';
import * as Joi from '@hapi/joi';

@Module({
  imports: [
    TestModule,
    ConfigModule.forRoot({
      load: [config1, config2],
      validationSchema: Joi.object({
        FOO: Joi.string()
          .valid('barbarbar', 'abc')
          .required(),
        ///.default('BBB'),
        // .default('BBB'),
        BAR: Joi.number(),
      }),
      // validationOptions: {
      //   allowUnknown: true,
      //   presence: 'required',
      // },
    }),
    Test2Module,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
