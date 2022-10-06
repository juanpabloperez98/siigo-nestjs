import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ThirdclientsModule } from './thirdclients/thirdclients.module';

@Module({
  imports: [
    ThirdclientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
  