// import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
// import { ReviewService } from './review.service';
// import { CreateReviewDto } from './dto/create-review.dto';
// import { JwtAuthGuard } from '../auth/jwt-auth.guard';
// import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

// @ApiTags('Review')
// @Controller('reviews')
// @UseGuards(JwtAuthGuard)
// export class ReviewController {
//   constructor(private reviewService: ReviewService) {}

//   @Post()
//   @ApiOperation({ summary: 'Add a review' })
//   @ApiBody({ type: CreateReviewDto })
//   @ApiResponse({ status: 201, description: 'Review added successfully' })
//   async addReview(@Body() createReviewDto: CreateReviewDto) {
//     return this.reviewService.addReview(createReviewDto);
//   }

//   @Get('flight/:flightId')
//   @ApiOperation({ summary: 'Get reviews by flight ID' })
//   @ApiResponse({ status: 200, description: 'Reviews retrieved successfully' })
//   async getReviewsByFlight(@Param('flightId') flightId: number) {
//     return this.reviewService.getReviewsByFlight(flightId);
//   }
// }

import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { ReviewService } from './review.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Review')
@Controller('reviews')
@UseGuards(JwtAuthGuard)
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Post()
  @ApiOperation({ summary: 'Add a review' })
  @ApiBody({ type: CreateReviewDto })
  @ApiResponse({ status: 201, description: 'Review added successfully' })
  async addReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewService.addReview(createReviewDto);
  }

  @Get('flight/:flightId')
  @ApiOperation({ summary: 'Get reviews by flight ID' })
  @ApiResponse({ status: 200, description: 'Reviews retrieved successfully' })
  async getReviewsByFlight(@Param('flightId') flightId: string) {
    // Updated flightId to string for MongoDB ObjectId
    return this.reviewService.getReviewsByFlight(flightId);
  }
}
