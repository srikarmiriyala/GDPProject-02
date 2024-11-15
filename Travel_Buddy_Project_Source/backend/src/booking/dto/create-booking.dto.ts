import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, ValidateNested } from 'class-validator';

class TravelerDetailsDto {
  @ApiProperty({ example: '1', description: 'Traveler ID' })
  id: string;

  @ApiProperty({
    example: '1988-06-22',
    description: 'Date of Birth in YYYY-MM-DD format',
  })
  dateOfBirth: string;

  @ApiProperty({ example: 'MALE', description: 'Gender of the traveler' })
  gender: string;

  @ApiProperty({
    example: { firstName: 'John', lastName: 'Doe' },
    description: 'Name object',
  })
  name: {
    firstName: string;
    lastName: string;
  };

  @ApiProperty({
    example: [
      {
        number: '12345678',
        expiryDate: '2025-04-29',
        issuanceCountry: 'US',
        documentType: 'PASSPORT',
        holder: true,
      },
    ],
    description: 'Array of document objects',
  })
  documents: Array<{
    number: string;
    expiryDate: string;
    issuanceCountry: string;
    documentType: string;
    holder: boolean;
  }>;

  @ApiProperty({
    example: {
      phones: [
        { deviceType: 'MOBILE', countryCallingCode: '1', number: '1234567890' },
      ],
      emailAddress: 'example@mail.com',
    },
    description: 'Contact information',
  })
  contact: {
    phones: Array<{
      deviceType: string;
      countryCallingCode: string;
      number: string;
    }>;
    emailAddress: string;
  };
}

class FlightOfferDto {
  @ApiProperty({
    example: 'GDS',
    description: 'The source of the flight offer',
  })
  source: string;

  @ApiProperty({
    example: '2024-10-26',
    description: 'The last ticketing date for this flight offer',
  })
  lastTicketingDate: string;

  @ApiProperty({
    description: 'Array of itinerary objects',
  })
  itineraries: Array<any>; // Simplified for brevity, use specific DTOs in real applications
}

export class CreateBookingDto {
  @ApiProperty({
    description: 'List of flight offers to book',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => FlightOfferDto)
  flightOffers: FlightOfferDto[];

  @ApiProperty({
    description: 'List of travelers making the booking',
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TravelerDetailsDto)
  travelers: TravelerDetailsDto[];
}
