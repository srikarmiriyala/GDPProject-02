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
// import {
//   ApiTags,
//   ApiOperation,
//   ApiBearerAuth,
//   ApiResponse,
//   ApiQuery,
//   ApiParam,
// } from '@nestjs/swagger';
// import { AirportsService } from './airports.service';
// import { Airport } from 'src/entities/airports.entity';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

// @ApiTags('Airports') // Grouping routes under 'Airports' in Swagger UI
// @Controller('airports')
// export class AirportsController {
//   constructor(private readonly airportsService: AirportsService) {}

//   // Public: Get all airports with optional filters and total count
//   @Get()
//   @ApiOperation({ summary: 'Get all airports with optional filters' })
//   @ApiQuery({
//     name: 'search',
//     required: false,
//     description: 'Search airports by name, city, or country',
//   })
//   @ApiQuery({
//     name: 'sort',
//     required: false,
//     description: 'Sort by any field, e.g., name, city, or country',
//   })
//   @ApiQuery({
//     name: 'order',
//     required: false,
//     description: 'Order by ASC or DESC',
//     example: 'ASC',
//   })
//   @ApiQuery({
//     name: 'limit',
//     required: false,
//     description: 'Limit number of results',
//     example: 10,
//   })
//   @ApiQuery({
//     name: 'offset',
//     required: false,
//     description: 'Offset results for pagination',
//     example: 0,
//   })
//   @ApiResponse({
//     status: 200,
//     description: 'List of airports and total count returned successfully',
//     schema: {
//       properties: {
//         airports: {
//           type: 'array',
//           items: { $ref: '#/components/schemas/Airport' },
//         },
//         total: { type: 'number' },
//       },
//     },
//   })
//   async findAll(
//     @Query() query: any,
//   ): Promise<{ airports: Airport[]; total: number }> {
//     return this.airportsService.findAll(query);
//   }

//   // Public: Get airport by ID
//   @Get(':id')
//   @ApiOperation({ summary: 'Get airport by ID' })
//   @ApiParam({ name: 'id', description: 'ID of the airport', example: 1 })
//   @ApiResponse({ status: 200, description: 'Airport found', type: Airport })
//   @ApiResponse({ status: 404, description: 'Airport not found' })
//   findOne(@Param('id') id: number): Promise<Airport> {
//     return this.airportsService.findOne(id);
//   }

//   // Protected: Create a new airport (Admin only)
//   @Post()
//   @UseGuards(JwtAuthGuard, RolesGuard) // Apply guards only on protected routes
//   @Roles('admin') // Only 'admin' role can access this route
//   @ApiBearerAuth() // JWT Bearer token is required
//   @ApiOperation({ summary: 'Create a new airport (Admin only)' })
//   @ApiResponse({
//     status: 201,
//     description: 'Airport created successfully',
//     type: Airport,
//   })
//   @ApiResponse({ status: 403, description: 'Forbidden' })
//   create(@Body() airport: Airport): Promise<Airport> {
//     return this.airportsService.create(airport);
//   }

//   // Protected: Update an airport by ID (Admin only)
//   @Put(':id')
//   @UseGuards(JwtAuthGuard, RolesGuard) // Apply guards
//   @Roles('admin') // Only 'admin' role can access this route
//   @ApiBearerAuth() // JWT Bearer token is required
//   @ApiOperation({ summary: 'Update an airport by ID (Admin only)' })
//   @ApiParam({
//     name: 'id',
//     description: 'ID of the airport to update',
//     example: 1,
//   })
//   @ApiResponse({ status: 204, description: 'Airport updated successfully' })
//   @ApiResponse({ status: 403, description: 'Forbidden' })
//   update(@Param('id') id: number, @Body() airport: Airport): Promise<void> {
//     return this.airportsService.update(id, airport);
//   }

//   // Protected: Delete an airport by ID (Admin only)
//   @Delete(':id')
//   @UseGuards(JwtAuthGuard, RolesGuard) // Apply guards
//   @Roles('admin') // Only 'admin' role can access this route
//   @ApiBearerAuth() // JWT Bearer token is required
//   @ApiOperation({ summary: 'Delete an airport by ID (Admin only)' })
//   @ApiParam({
//     name: 'id',
//     description: 'ID of the airport to delete',
//     example: 1,
//   })
//   @ApiResponse({ status: 204, description: 'Airport deleted successfully' })
//   @ApiResponse({ status: 403, description: 'Forbidden' })
//   remove(@Param('id') id: number): Promise<void> {
//     return this.airportsService.remove(id);
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
import {
  ApiTags,
  ApiOperation,
  ApiBearerAuth,
  ApiResponse,
  ApiQuery,
  ApiParam,
} from '@nestjs/swagger';
import { AirportsService } from './airports.service';
import { Airport } from '../schemas/airport.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Airports')
@Controller('airports')
export class AirportsController {
  constructor(private readonly airportsService: AirportsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all airports with optional filters' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search airports by name, city, or country',
  })
  @ApiQuery({
    name: 'sort',
    required: false,
    description: 'Sort by any field, e.g., name, city, or country',
  })
  @ApiQuery({
    name: 'order',
    required: false,
    description: 'Order by ASC or DESC',
    example: 'ASC',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limit number of results',
    example: 10,
  })
  @ApiQuery({
    name: 'offset',
    required: false,
    description: 'Offset results for pagination',
    example: 0,
  })
  @ApiResponse({
    status: 200,
    description: 'List of airports and total count returned successfully',
    schema: {
      properties: {
        airports: {
          type: 'array',
          items: { $ref: '#/components/schemas/Airport' },
        },
        total: { type: 'number' },
      },
    },
  })
  async findAll(
    @Query() query: any,
  ): Promise<{ airports: Airport[]; total: number }> {
    return this.airportsService.findAll(query);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get airport by ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the airport',
    example: '610c...',
  })
  @ApiResponse({ status: 200, description: 'Airport found', type: Airport })
  @ApiResponse({ status: 404, description: 'Airport not found' })
  findOne(@Param('id') id: string): Promise<Airport> {
    return this.airportsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new airport (Admin only)' })
  @ApiResponse({
    status: 201,
    description: 'Airport created successfully',
    type: Airport,
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  create(@Body() airport: Airport): Promise<Airport> {
    return this.airportsService.create(airport);
  }

  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an airport by ID (Admin only)' })
  @ApiParam({
    name: 'id',
    description: 'ID of the airport to update',
    example: '610c...',
  })
  @ApiResponse({ status: 204, description: 'Airport updated successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(
    @Param('id') id: string,
    @Body() airport: Airport,
  ): Promise<void> {
    await this.airportsService.update(id, airport);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an airport by ID (Admin only)' })
  @ApiParam({
    name: 'id',
    description: 'ID of the airport to delete',
    example: '610c...',
  })
  @ApiResponse({ status: 204, description: 'Airport deleted successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.airportsService.remove(id);
  }
}
