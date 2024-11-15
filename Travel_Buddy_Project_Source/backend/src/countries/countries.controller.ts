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
// import { CountriesService } from './countries.service';
// import { Country } from 'src/entities/countries.entity';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';
// import {
//   ApiTags,
//   ApiOperation,
//   ApiResponse,
//   ApiBearerAuth,
// } from '@nestjs/swagger';

// @ApiTags('Countries')
// @Controller('countries')
// export class CountriesController {
//   constructor(private readonly countriesService: CountriesService) {}

//   @Get()
//   @ApiOperation({ summary: 'Get all countries with optional filters' })
//   @ApiResponse({
//     status: 200,
//     description: 'Returns list of countries and total count.',
//     schema: {
//       properties: {
//         countries: {
//           type: 'array',
//           items: { $ref: '#/components/schemas/Country' },
//         },
//         total: { type: 'number' },
//       },
//     },
//   })
//   async findAll(
//     @Query() query: any,
//   ): Promise<{ countries: Country[]; total: number }> {
//     return this.countriesService.findAll(query);
//   }

//   @Get(':code')
//   @ApiOperation({ summary: 'Get a country by its code' })
//   @ApiResponse({
//     status: 200,
//     description: 'Returns the details of the country.',
//   })
//   @ApiResponse({ status: 404, description: 'Country not found.' })
//   findOne(@Param('code') code: string): Promise<Country> {
//     return this.countriesService.findOne(code);
//   }

//   @Post()
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Create a new country (Admin only)' })
//   @ApiResponse({ status: 201, description: 'Country created successfully.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   create(@Body() country: Country): Promise<Country> {
//     return this.countriesService.create(country);
//   }

//   @Put(':code')
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Update an existing country (Admin only)' })
//   @ApiResponse({ status: 200, description: 'Country updated successfully.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   update(@Param('code') code: string, @Body() country: Country): Promise<void> {
//     return this.countriesService.update(code, country);
//   }

//   @Delete(':code')
//   @UseGuards(JwtAuthGuard, RolesGuard)
//   @Roles('admin')
//   @ApiBearerAuth()
//   @ApiOperation({ summary: 'Delete a country (Admin only)' })
//   @ApiResponse({ status: 200, description: 'Country deleted successfully.' })
//   @ApiResponse({ status: 403, description: 'Forbidden.' })
//   remove(@Param('code') code: string): Promise<void> {
//     return this.countriesService.remove(code);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  Query,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Country } from '../schemas/country.schema';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all countries with optional filters' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of countries and total count.',
    schema: {
      properties: {
        countries: {
          type: 'array',
          items: { $ref: '#/components/schemas/Country' },
        },
        total: { type: 'number' },
      },
    },
  })
  async findAll(
    @Query() query: any,
  ): Promise<{ countries: Country[]; total: number }> {
    return this.countriesService.findAll(query);
  }

  @Get(':code')
  @ApiOperation({ summary: 'Get a country by its code' })
  @ApiResponse({
    status: 200,
    description: 'Returns the details of the country.',
  })
  @ApiResponse({ status: 404, description: 'Country not found.' })
  findOne(@Param('code') code: string): Promise<Country> {
    return this.countriesService.findOne(code);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new country (Admin only)' })
  @ApiResponse({ status: 201, description: 'Country created successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  create(@Body() country: Country): Promise<Country> {
    return this.countriesService.create(country);
  }

  @Put(':code')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Update an existing country (Admin only)' })
  @ApiResponse({ status: 200, description: 'Country updated successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  update(@Param('code') code: string, @Body() country: Country): Promise<void> {
    return this.countriesService.update(code, country);
  }

  @Delete(':code')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Delete a country (Admin only)' })
  @ApiResponse({ status: 200, description: 'Country deleted successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  remove(@Param('code') code: string): Promise<void> {
    return this.countriesService.remove(code);
  }
}
