// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { PassportModule } from '@nestjs/passport';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from '../entities/user.entity';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { JwtStrategy } from './jwt.strategy';
// import { ConfigModule, ConfigService } from '@nestjs/config';

// @Module({
//   imports: [
//     ConfigModule,
//     TypeOrmModule.forFeature([User]),
//     PassportModule,
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         secret: configService.get<string>('JWT_SECRET'),
//         signOptions: { expiresIn: '7d' },
//       }),
//     }),
//   ],
//   providers: [AuthService, JwtStrategy],
//   controllers: [AuthController],
//   exports: [AuthService, JwtModule],
// })
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserSchema, User } from '../schemas/user.schema'; // MongoDB Schema

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '7d' },
      }),
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
