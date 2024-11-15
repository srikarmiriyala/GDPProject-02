import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

class PassengerInfo {
  @ApiProperty({ example: '2', description: 'Number of adults' })
  adults: string;

  @ApiPropertyOptional({
    example: '1',
    description: 'Number of children',
    required: false,
  })
  children?: string;

  @ApiPropertyOptional({
    example: '1',
    description: 'Number of infants',
    required: false,
  })
  infants?: string;
}

class FlightSegmentDto {
  @ApiProperty({ example: 'AAH', description: 'Departure city airport code' })
  departureCity: string;

  @ApiProperty({ example: 'AAL', description: 'Destination city airport code' })
  destinationCity: string;

  @ApiProperty({
    example: '2024-10-25',
    description: 'Departure date (YYYY-MM-DD)',
  })
  departureDate: string; // String format for the date
}

// Search DTO for one-way and return-trip
export class SearchFlightDto {
  @ApiProperty({
    example: 'one-way',
    description:
      'Type of flight search (e.g., one-way, return-trip, multi-city)',
  })
  type: string;

  @ApiPropertyOptional({
    example: 'AAH',
    description: 'Departure city airport code',
  })
  departureCity?: string;

  @ApiPropertyOptional({
    example: 'AAL',
    description: 'Destination city airport code',
  })
  destinationCity?: string;

  @ApiPropertyOptional({
    example: '2024-10-25',
    description: 'Departure date (YYYY-MM-DD)',
  })
  departureDate?: string;

  @ApiPropertyOptional({
    example: '2024-10-30',
    description: 'Return date (YYYY-MM-DD)',
  })
  returnDate?: string;

  @ApiPropertyOptional({
    description: 'List of flights for multi-city search',
    type: [FlightSegmentDto],
  })
  flights?: FlightSegmentDto[];

  @ApiProperty({ description: 'Passenger information' })
  passengers: PassengerInfo;

  @ApiProperty({
    example: 'business',
    description: 'Seat type (e.g., economy, business)',
  })
  seatType: string;
}
