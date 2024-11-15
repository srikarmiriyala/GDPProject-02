// import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
// import { RatingService } from './rating.service';
// import { CreateRatingDto } from './dto/create-rating.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

// @ApiTags('Rating')
// @Controller('ratings')
// @UseGuards(JwtAuthGuard)
// export class RatingController {
//   constructor(private ratingService: RatingService) {}

//   @Post()
//   @ApiOperation({ summary: 'Add a rating' })
//   @ApiBody({ type: CreateRatingDto })
//   @ApiResponse({ status: 201, description: 'Rating added successfully' })
//   async addRating(@Body() createRatingDto: CreateRatingDto) {
//     return this.ratingService.addRating(createRatingDto);
//   }

//   @Get('flight/:flightId')
//   @ApiOperation({ summary: 'Get ratings by flight ID' })
//   @ApiResponse({ status: 200, description: 'Ratings retrieved successfully' })
//   async getRatingsByFlight(@Param('flightId') flightId: number) {
//     return this.ratingService.getRatingsByFlight(flightId);
//   }
// }

import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Rating')
@Controller('ratings')
@UseGuards(JwtAuthGuard)
export class RatingController {
  constructor(private ratingService: RatingService) {}

  @Post()
  @ApiOperation({ summary: 'Add a rating' })
  @ApiBody({ type: CreateRatingDto })
  @ApiResponse({ status: 201, description: 'Rating added successfully' })
  async addRating(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.addRating(createRatingDto);
  }

  @Get('flight/:flightId')
  @ApiOperation({ summary: 'Get ratings by flight ID' })
  @ApiResponse({ status: 200, description: 'Ratings retrieved successfully' })
  async getRatingsByFlight(@Param('flightId') flightId: string) {
    return this.ratingService.getRatingsByFlight(flightId);
  }
}
