// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { PlanesService } from './planes.service';
// import { PlanesController } from './planes.controller';
// import { Plane } from 'src/entities/planes.entity';
// import { AuthModule } from 'src/auth/auth.module';

// @Module({
//   imports: [TypeOrmModule.forFeature([Plane]), AuthModule],
//   providers: [PlanesService],
//   controllers: [PlanesController],
// })
// export class PlanesModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // MongooseModule instead of TypeOrmModule
import { PlanesService } from './planes.service';
import { PlanesController } from './planes.controller';
import { Plane, PlaneSchema } from '../schemas/plane.schema'; // Mongoose Schema
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Plane.name, schema: PlaneSchema }]), // Define the schema here
    AuthModule,
  ],
  providers: [PlanesService],
  controllers: [PlanesController],
})
export class PlanesModule {}
