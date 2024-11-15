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
// import { AirlinesService } from './airlines.service';
// import { Airline } from 'src/entities/airlines.entity';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';

// @ApiTags('Airlines')
// @Controller('airlines')
// export class AirlinesController {
//   constructor(private readonly airlinesService: AirlinesService) {}

//   // Public: Get all airlines with optional filters
//   @Get()
//   @ApiOperation({ summary: 'Get all airlines with optional filters' })
//   @ApiQuery({
//     name: 'search',
//     required: false,
//     description: 'Search airlines by name or country',
//   })
//   @ApiQuery({
//     name: 'sort',
//     required: false,
//     description: 'Sort by any field, e.g., name or country',
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
//     description: 'List of airlines returned successfully',
//     schema: {
//       properties: {
//         airlines: {
//           type: 'array',
//           items: { $ref: '#/components/schemas/Airline' },
//         },
//         total: { type: 'number' },
//       },
//     },
//   })
//   async findAll(
//     @Query() query: any,
//   ): Promise<{ airlines: Airline[]; total: number }> {
//     return this.airlinesService.findAll(query);
//   }

//   // Public: Get airline by ID
//   @Get(':id')
//   @ApiOperation({ summary: 'Get airline by ID' })
//   @ApiParam({ name: 'id', description: 'ID of the airline', example: 1 })
//   @ApiResponse({ status: 200, description: 'Airline found', type: Airline })
//   @ApiResponse({ status: 404, description: 'Airline not found' })
//   findOne(@Param('id') id: number): Promise<Airline> {
//     return this.airlinesService.findOne(id);
//   }

//   // Protected: Create a new airline (Admin only)
//   @Post()
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin') // Only 'admin' role can access this route
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Create a new airline (Admin only)' })
//   @ApiResponse({
//     status: 201,
//     description: 'Airline created successfully',
//     type: Airline,
//   })
//   @ApiResponse({ status: 403, description: 'Forbidden' })
//   create(@Body() airline: Airline): Promise<Airline> {
//     return this.airlinesService.create(airline);
//   }

//   // Protected: Update an airline (Admin only)
//   @Put(':id')
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin') // Only 'admin' role can access this route
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Update an airline by ID (Admin only)' })
//   @ApiParam({
//     name: 'id',
//     description: 'ID of the airline to update',
//     example: 1,
//   })
//   @ApiResponse({ status: 204, description: 'Airline updated successfully' })
//   @ApiResponse({ status: 403, description: 'Forbidden' })
//   async update(
//     @Param('id') id: number,
//     @Body() airline: Airline,
//   ): Promise<void> {
//     await this.airlinesService.update(id, airline);
//   }

//   // Protected: Delete an airline (Admin only)
//   @Delete(':id')
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin') // Only 'admin' role can access this route
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Delete an airline by ID (Admin only)' })
//   @ApiParam({
//     name: 'id',
//     description: 'ID of the airline to delete',
//     example: 1,
//   })
//   @ApiResponse({ status: 204, description: 'Airline deleted successfully' })
//   @ApiResponse({ status: 403, description: 'Forbidden' })
//   async remove(@Param('id') id: number): Promise<void> {
//     await this.airlinesService.remove(id);
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
import { AirlinesService } from './airlines.service';
import { Airline } from '../schemas/airline.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@ApiTags('Airlines')
@Controller('airlines')
export class AirlinesController {
  constructor(private readonly airlinesService: AirlinesService) {}

  // Public: Get all airlines with optional filters
  @Get()
  @ApiOperation({ summary: 'Get all airlines with optional filters' })
  @ApiQuery({
    name: 'search',
    required: false,
    description: 'Search airlines by name or country',
  })
  @ApiQuery({
    name: 'sort',
    required: false,
    description: 'Sort by any field, e.g., name or country',
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
    description: 'List of airlines returned successfully',
    schema: {
      properties: {
        airlines: {
          type: 'array',
          items: { $ref: '#/components/schemas/Airline' },
        },
        total: { type: 'number' },
      },
    },
  })
  async findAll(
    @Query() query: any,
  ): Promise<{ airlines: Airline[]; total: number }> {
    return this.airlinesService.findAll(query);
  }

  // Public: Get airline by ID
  @Get(':id')
  @ApiOperation({ summary: 'Get airline by ID' })
  @ApiParam({
    name: 'id',
    description: 'ID of the airline',
    example: '610c...',
  })
  @ApiResponse({ status: 200, description: 'Airline found', type: Airline })
  @ApiResponse({ status: 404, description: 'Airline not found' })
  findOne(@Param('id') id: string): Promise<Airline> {
    return this.airlinesService.findOne(id);
  }

  // Protected: Create a new airline (Admin only)
  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin') // Only 'admin' role can access this route
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new airline (Admin only)' })
  @ApiResponse({
    status: 201,
    description: 'Airline created successfully',
    type: Airline,
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  create(@Body() airline: Airline): Promise<Airline> {
    return this.airlinesService.create(airline);
  }

  // Protected: Update an airline (Admin only)
  @Put(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin') // Only 'admin' role can access this route
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an airline by ID (Admin only)' })
  @ApiParam({
    name: 'id',
    description: 'ID of the airline to update',
    example: '610c...',
  })
  @ApiResponse({ status: 204, description: 'Airline updated successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(
    @Param('id') id: string,
    @Body() airline: Airline,
  ): Promise<void> {
    await this.airlinesService.update(id, airline);
  }

  // Protected: Delete an airline (Admin only)
  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin') // Only 'admin' role can access this route
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete an airline by ID (Admin only)' })
  @ApiParam({
    name: 'id',
    description: 'ID of the airline to delete',
    example: '610c...',
  })
  @ApiResponse({ status: 204, description: 'Airline deleted successfully' })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.airlinesService.remove(id);
  }
}
