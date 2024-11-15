import { ApiProperty } from '@nestjs/swagger';

export class CreateBookingDto {
  @ApiProperty({
    example: '610d1b6e7e1d4a5e9b9e3f7d',
    description: 'Flight ID as an ObjectId',
  })
  flightId: string;

  @ApiProperty({
    example: '610d1b6e7e1d4a5e9b9e3f7e',
    description: 'User ID as an ObjectId',
  })
  userId: string;
}
