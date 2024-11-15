// import {
//   Controller,
//   Get,
//   Post,
//   Body,
//   Param,
//   Delete,
//   Query,
//   Put,
//   UseGuards,
// } from '@nestjs/common';
// import { PlanesService } from './planes.service';
// import { Plane } from 'src/entities/planes.entity';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';
// import {
//   ApiTags,
//   ApiOperation,
//   ApiResponse,
//   ApiBearerAuth,
// } from '@nestjs/swagger';

// @ApiTags('Planes')
// @Controller('planes')
// export class PlanesController {
//   constructor(private readonly planesService: PlanesService) {}

//   @Get()
//   @ApiOperation({ summary: 'Get all planes with optional filters' })
//   @ApiResponse({
//     status: 200,
//     description: 'Return list of planes and total count.',
//     schema: {
//       properties: {
//         planes: {
//           type: 'array',
//           items: { $ref: '#/components/schemas/Plane' },
//         },
//         total: { type: 'number' },
//       },
//     },
//   })
//   async findAll(
//     @Query() query: any,
//   ): Promise<{ planes: Plane[]; total: number }> {
//     return this.planesService.findAll(query);
//   }

//   @Get(':id')
//   @ApiOperation({ summary: 'Get a plane by ID' })
//   @ApiResponse({ status: 200, description: 'Return plane details.' })
//   @ApiResponse({ status: 404, description: 'Plane not found.' })
//   findOne(@Param('id') id: number): Promise<Plane> {
//     return this.planesService.findOne(id);
//   }

//   @Post()
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Create a new plane (Admin only)' })
//   @ApiResponse({ status: 201, description: 'The plane has been created.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   create(@Body() plane: Plane): Promise<Plane> {
//     return this.planesService.create(plane);
//   }

//   @Put(':id')
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Update a plane (Admin only)' })
//   @ApiResponse({ status: 200, description: 'The plane has been updated.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   update(@Param('id') id: number, @Body() plane: Plane): Promise<void> {
//     return this.planesService.update(id, plane);
//   }

//   @Delete(':id')
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Delete a plane (Admin only)' })
//   @ApiResponse({ status: 200, description: 'The plane has been deleted.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   remove(@Param('id') id: number): Promise<void> {
//     return this.planesService.remove(id);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { PlanesService } from './planes.service';
import { Plane } from '../schemas/plane.schema'; // Mongoose Schema
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { Types } from 'mongoose'; // Mongoose ObjectId

@ApiTags('Planes')
@Controller('planes')
export class PlanesController {
  constructor(private readonly planesService: PlanesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all planes with optional filters' })
  @ApiResponse({
    status: 200,
    description: 'Return list of planes and total count.',
    schema: {
      properties: {
        planes: {
          type: 'array',
          items: { $ref: '#/components/schemas/Plane' },
        },
        total: { type: 'number' },
      },
    },
  })
  async findAll(
    @Query() query: any,
  ): Promise<{ planes: Plane[]; total: number }> {
    return this.planesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a plane by ID' })
  @ApiResponse({ status: 200, description: 'Return plane details.' })
  @ApiResponse({ status: 404, description: 'Plane not found.' })
  findOne(@Param('id') id: string): Promise<Plane> {
    return this.planesService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new plane (Admin only)' })
  @ApiResponse({ status: 201, description: 'The plane has been created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() plane: Plane): Promise<Plane> {
    return this.planesService.create(plane);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update a plane (Admin only)' })
  @ApiResponse({ status: 200, description: 'The plane has been updated.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(@Param('id') id: string, @Body() plane: Plane): Promise<void> {
    return this.planesService.update(id, plane);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a plane (Admin only)' })
  @ApiResponse({ status: 200, description: 'The plane has been deleted.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.planesService.remove(id);
  }
}
