import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import appConfig from './config/app.config';
import { APP_PIPE } from '@nestjs/core';



@Module({
  imports: [   
    ConfigModule.forRoot({
      load : [appConfig]
    }),
    CoffeesModule,
    TypeOrmModule.forRoot(),
    CoffeeRatingModule
  ], 
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
