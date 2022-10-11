import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ThirdclientsController } from './thirdclients.controller';
import { ThirdclientsService } from './thirdclients.service';

@Module({
  imports:[
    HttpModule,
  ],
  controllers: [
    ThirdclientsController,
  ],
  providers: [
    ThirdclientsService
  ]
})
export class ThirdclientsModule {}
