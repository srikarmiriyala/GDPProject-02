// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserService } from './user.service';
// import { UserController } from './user.controller';
// import { User } from '../entities/user.entity';

// @Module({
//   imports: [TypeOrmModule.forFeature([User])],
//   providers: [UserService],
//   controllers: [UserController],
//   exports: [UserService], // In case UserService is used elsewhere
// })
// export class UserModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from '../schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // In case UserService is used elsewhere
})
export class UserModule {}
