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
// import { RoutesService } from './routes.service';
// import { Route } from 'src/entities/routes.entity';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';
// import {
//   ApiTags,
//   ApiOperation,
//   ApiResponse,
//   ApiBearerAuth,
// } from '@nestjs/swagger';

// @ApiTags('Routes')
// @Controller('routes')
// export class RoutesController {
//   constructor(private readonly routesService: RoutesService) {}

//   @Get()
//   @ApiOperation({ summary: 'Get all routes with optional filters' })
//   @ApiResponse({
//     status: 200,
//     description: 'Returns list of routes and total count.',
//     schema: {
//       properties: {
//         routes: {
//           type: 'array',
//           items: { $ref: '#/components/schemas/Route' },
//         },
//         total: { type: 'number' },
//       },
//     },
//   })
//   async findAll(
//     @Query() query: any,
//   ): Promise<{ routes: Route[]; total: number }> {
//     return this.routesService.findAll(query);
//   }

//   @Get(':id')
//   @ApiOperation({ summary: 'Get a route by ID' })
//   @ApiResponse({
//     status: 200,
//     description: 'Returns the details of the route.',
//   })
//   @ApiResponse({ status: 404, description: 'Route not found.' })
//   findOne(@Param('id') id: number): Promise<Route> {
//     return this.routesService.findOne(id);
//   }

//   @Post()
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Create a new route (Admin only)' })
//   @ApiResponse({ status: 201, description: 'Route created successfully.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   create(@Body() route: Route): Promise<Route> {
//     return this.routesService.create(route);
//   }

//   @Put(':id')
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Update an existing route (Admin only)' })
//   @ApiResponse({ status: 200, description: 'Route updated successfully.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   update(@Param('id') id: number, @Body() route: Route): Promise<void> {
//     return this.routesService.update(id, route);
//   }

//   @Delete(':id')
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Delete a route (Admin only)' })
//   @ApiResponse({ status: 200, description: 'Route deleted successfully.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   remove(@Param('id') id: number): Promise<void> {
//     return this.routesService.remove(id);
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
import { RoutesService } from './routes.service';
import { Route } from '../schemas/route.schema'; // Updated path
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Routes')
@Controller('routes')
export class RoutesController {
  constructor(private readonly routesService: RoutesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all routes with optional filters' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of routes and total count.',
    schema: {
      properties: {
        routes: {
          type: 'array',
          items: { $ref: '#/components/schemas/Route' },
        },
        total: { type: 'number' },
      },
    },
  })
  async findAll(
    @Query() query: any,
  ): Promise<{ routes: Route[]; total: number }> {
    return this.routesService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a route by ID' })
  @ApiResponse({
    status: 200,
    description: 'Returns the details of the route.',
  })
  @ApiResponse({ status: 404, description: 'Route not found.' })
  findOne(@Param('id') id: string): Promise<Route> {
    // ID as string
    return this.routesService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new route (Admin only)' })
  @ApiResponse({ status: 201, description: 'Route created successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() route: Route): Promise<Route> {
    return this.routesService.create(route);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an existing route (Admin only)' })
  @ApiResponse({ status: 200, description: 'Route updated successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(@Param('id') id: string, @Body() route: Route): Promise<Route> {
    return this.routesService.update(id, route);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a route (Admin only)' })
  @ApiResponse({ status: 200, description: 'Route deleted successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('id') id: string): Promise<void> {
    return this.routesService.remove(id);
  }
}
