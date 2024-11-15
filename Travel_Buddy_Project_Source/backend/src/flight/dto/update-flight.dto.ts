import { PartialType } from '@nestjs/mapped-types';
import { CreateFlightDto } from './create-flight.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateFlightDto extends PartialType(CreateFlightDto) {
  @ApiPropertyOptional({
    example: 'Biman Bangladesh Airlines',
    description: 'Updated name of the airline',
  })
  airline?: string;

  @ApiPropertyOptional({
    example: 'DAC',
    description: 'Updated departure airport code',
  })
  from?: string;

  @ApiPropertyOptional({
    example: 'DXB',
    description: 'Updated arrival airport code',
  })
  to?: string;

  @ApiPropertyOptional({
    example: '2024-09-30T12:00:00Z',
    description: 'Updated departure time',
  })
  departureTime?: Date;

  @ApiPropertyOptional({
    example: '2024-09-30T15:00:00Z',
    description: 'Updated arrival time',
  })
  arrivalTime?: Date;

  @ApiPropertyOptional({
    example: 32175,
    description: 'Updated price of the flight',
  })
  price?: number;

  @ApiPropertyOptional({
    example: 100,
    description: 'Updated number of available seats',
  })
  availableSeats?: number;

  @ApiPropertyOptional({
    example: 'BG-147',
    description: 'Updated flight number',
  })
  flightNumber?: string;

  @ApiPropertyOptional({
    example: 'Boeing 777-300',
    description: 'Updated aircraft type',
  })
  equipmentType?: string;

  @ApiPropertyOptional({
    example: 'Yes',
    description: 'Updated electronic ticketing availability',
  })
  electronicTicketing?: string;

  @ApiPropertyOptional({
    example: 'Economy',
    description: 'Updated cabin class',
  })
  cabinClass?: string;

  @ApiPropertyOptional({
    example: 'TBDAPO',
    description: 'Updated fare basis',
  })
  fareBasis?: string;

  @ApiPropertyOptional({
    example: 'Technical Stopover at CGP',
    description: 'Updated technical stop information',
  })
  techstop?: string;

  @ApiPropertyOptional({
    example: {
      airportName: 'Hazrat Shahjalal International Airport',
      city: 'Dhaka',
      country: 'Bangladesh',
      terminal: 'T1',
    },
    description: 'Updated detailed departure information',
  })
  departure?: {
    airportName: string;
    city: string;
    country: string;
    terminal?: string;
  };

  @ApiPropertyOptional({
    example: {
      airportName: 'Dubai International Airport',
      city: 'Dubai',
      country: 'UAE',
      terminal: 'T3',
    },
    description: 'Updated detailed arrival information',
  })
  arrival?: {
    airportName: string;
    city: string;
    country: string;
    terminal?: string;
  };
}
