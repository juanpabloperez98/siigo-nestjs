import { HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ThirdclientsController } from './thirdclients.controller';
import { ThirdclientsService } from './thirdclients.service';

@Module({
  controllers: [
    ThirdclientsController,
    HttpService,
  ],
  providers: [ThirdclientsService]
})
export class ThirdclientsModule {}
