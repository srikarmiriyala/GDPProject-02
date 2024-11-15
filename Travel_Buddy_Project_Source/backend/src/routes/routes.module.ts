// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { RoutesService } from './routes.service';
// import { RoutesController } from './routes.controller';
// import { Route } from 'src/entities/routes.entity';
// import { AuthModule } from 'src/auth/auth.module';

// @Module({
//   imports: [TypeOrmModule.forFeature([Route]), AuthModule],
//   providers: [RoutesService],
//   controllers: [RoutesController],
// })
// export class RoutesModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoutesService } from './routes.service';
import { RoutesController } from './routes.controller';
import { Route, RouteSchema } from '../schemas/route.schema';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Route.name, schema: RouteSchema }]),
    AuthModule,
  ],
  providers: [RoutesService],
  controllers: [RoutesController],
})
export class RoutesModule {}
