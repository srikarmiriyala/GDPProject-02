// import { ApiProperty } from '@nestjs/swagger';

// export class CreateReviewDto {
//   @ApiProperty({ example: 1, description: 'ID of the user giving the review' })
//   userId: number;

//   @ApiProperty({ example: 1, description: 'ID of the flight being reviewed' })
//   flightId: number;

//   @ApiProperty({
//     example: 'Great flight, had a wonderful experience!',
//     description: 'Content of the review',
//   })
//   content: string;
// }

import { ApiProperty } from '@nestjs/swagger';

export class CreateReviewDto {
  @ApiProperty({
    example: '60c72b2f9b1d8e4d88b7e4d8',
    description: 'ID of the user giving the review',
  })
  userId: string; // Updated to string for MongoDB ObjectId

  @ApiProperty({
    example: '60c72b2f9b1d8e4d88b7e4d9',
    description: 'ID of the flight being reviewed',
  })
  flightId: string; // Updated to string for MongoDB ObjectId

  @ApiProperty({
    example: 'Great flight, had a wonderful experience!',
    description: 'Content of the review',
  })
  content: string;
}
