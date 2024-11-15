import { ApiProperty } from '@nestjs/swagger';

export class CreateRatingDto {
  @ApiProperty({
    example: '60c72b2f9b1d8e4d88b7e4d8',
    description: 'ID of the user giving the rating',
  })
  userId: string; // Updated to use string for MongoDB ObjectId

  @ApiProperty({
    example: '60c72b2f9b1d8e4d88b7e4d9',
    description: 'ID of the flight being rated',
  })
  flightId: string; // Updated to use string for MongoDB ObjectId

  @ApiProperty({
    example: 5,
    description: 'Rating score (1 to 5)',
    minimum: 1,
    maximum: 5,
  })
  score: number;
}
