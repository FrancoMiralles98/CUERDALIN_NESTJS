import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Joi from 'joi';
import { NodeEnv } from './config/types/node-env.enum';
import { MongooseModule } from '@nestjs/mongoose';
import { AppConfigType } from './config/types/app-config.type';
import { appConfig } from './config/app-config';
import { dbConfig } from './config/db-config';
import { authConfig } from './config/auth-config';
import { UserModule } from './user/user.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        NODE_ENV: Joi.string().valid(...Object.values(NodeEnv)).default(NodeEnv.DEVELOPMENT),
        DEV_DB_URI: Joi.string().required() ,
        PROD_DB_URI: Joi.string().required()
      }),
      load:  [appConfig,dbConfig,authConfig]
    }),
    MongooseModule.forRootAsync({
      inject:[ConfigService],
      useFactory: (config:ConfigService<AppConfigType>) => ({
        uri: config.getOrThrow('db',{infer:true}).uri
      })
    }),
    UserModule,
    SharedModule
  ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
