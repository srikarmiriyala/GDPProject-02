// import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

// class PassengerPriceDto {
//   @ApiProperty({ example: 300, description: 'Price for an adult passenger' })
//   adult: number;

//   @ApiPropertyOptional({
//     example: 150,
//     description: 'Price for a child passenger (optional)',
//   })
//   child?: number;

//   @ApiPropertyOptional({
//     example: 50,
//     description: 'Price for an infant passenger (optional)',
//   })
//   infant?: number;
// }

// class FlightSegmentDto {
//   @ApiProperty({ example: 'JFK', description: 'Departure airport code' })
//   from: string;

//   @ApiProperty({ example: 'LAX', description: 'Arrival airport code' })
//   to: string;

//   @ApiProperty({
//     example: '2024-09-30',
//     description: 'Departure date of the flight',
//   })
//   departureDate: Date;

//   @ApiProperty({
//     example: '08:00',
//     description: 'Departure time of the flight',
//   })
//   departureTime: Date;

//   @ApiProperty({
//     example: '2024-09-30',
//     description: 'Arrival date of the flight',
//   })
//   arrivalDate: Date;

//   @ApiProperty({
//     example: '19:00',
//     description: 'Arrival time of the flight',
//   })
//   arrivalTime: Date;

//   @ApiProperty({
//     example: '7 hours 30 minutes',
//     description: 'Flight duration',
//   })
//   duration: string;

//   @ApiProperty({ example: 'BG-147', description: 'Flight number' })
//   flightNumber: string;

//   @ApiProperty({ example: 'Boeing 777-300', description: 'Equipment type' })
//   equipmentType: string;

//   @ApiProperty({
//     example: 'Yes',
//     description: 'Electronic ticketing available',
//   })
//   electronicTicketing: string;

//   @ApiProperty({ example: 'Economy', description: 'Cabin class' })
//   cabinClass: string;

//   @ApiProperty({ example: 'TBDAPO', description: 'Fare basis' })
//   fareBasis: string;

//   @ApiPropertyOptional({
//     example: 'Technical Stopover at CGP',
//     description: 'Technical stop information',
//   })
//   techstop?: string;

//   @ApiProperty({
//     example: {
//       airportName: 'Hazrat Shahjalal International Airport',
//       city: 'Dhaka',
//       country: 'Bangladesh',
//       terminal: 'T1',
//     },
//     description: 'Detailed departure information',
//   })
//   departure: {
//     airportName: string;
//     city: string;
//     country: string;
//     terminal?: string;
//   };

//   @ApiProperty({
//     example: {
//       airportName: 'Dubai International Airport',
//       city: 'Dubai',
//       country: 'UAE',
//       terminal: 'T3',
//     },
//     description: 'Detailed arrival information',
//   })
//   arrival: {
//     airportName: string;
//     city: string;
//     country: string;
//     terminal?: string;
//   };
// }

// export class CreateFlightDto {
//   @ApiProperty({
//     example: 'one-way',
//     description: 'Type of flight (e.g., one-way, return-trip, multi-city)',
//   })
//   type: 'one-way' | 'return-trip' | 'multi-city';

//   @ApiPropertyOptional({
//     description: 'One-way or return trip flight segment details',
//     type: FlightSegmentDto,
//   })
//   flightSegment?: FlightSegmentDto;

//   @ApiPropertyOptional({
//     description: 'Return trip segment for return-trip type',
//     type: FlightSegmentDto,
//   })
//   returnSegment?: FlightSegmentDto;

//   @ApiPropertyOptional({
//     description: 'Array of flight segments for multi-city trip',
//     type: [FlightSegmentDto],
//   })
//   flights?: FlightSegmentDto[];

//   @ApiProperty({
//     description: 'Price breakdown for each passenger type',
//     type: PassengerPriceDto,
//   })
//   prices: PassengerPriceDto;

//   @ApiProperty({
//     example: 2,
//     description: 'Number of passengers (adults)',
//   })
//   adults: number;

//   @ApiPropertyOptional({
//     example: 1,
//     description: 'Number of children',
//   })
//   children?: number;

//   @ApiPropertyOptional({
//     example: 1,
//     description: 'Number of infants',
//   })
//   infants?: number;

//   @ApiProperty({ example: 'Economy', description: 'Cabin class' })
//   seatType: string;
// }

// dto/create-flight.dto.ts
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  IsObject,
} from 'class-validator';

export class CreateFlightDto {
  @IsObject()
  @IsNotEmpty()
  flightCombination: any;

  @IsObject()
  @IsNotEmpty()
  fareSummary: any;

  @IsArray()
  @IsNotEmpty()
  baggage: any[];

  @IsString()
  @IsNotEmpty()
  validatingCarrier: string;

  @IsString()
  @IsNotEmpty()
  finalFare: string;

  @IsArray()
  @IsNotEmpty()
  flightSummary: any[];

  @IsNumber()
  @IsNotEmpty()
  totalJourneyTime: number;
}
