import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { SharedModule } from 'src/shared/shared.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './schema/user.schema';

@Module({
  imports: [
    SharedModule,
    MongooseModule.forFeature([
      {name:User.name, schema: userSchema}
    ])
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
