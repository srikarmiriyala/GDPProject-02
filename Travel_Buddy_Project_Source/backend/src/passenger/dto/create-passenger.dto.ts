// import { ApiProperty } from '@nestjs/swagger';

// export class CreatePassengerDto {
//   @ApiProperty({
//     description: 'Title of the passenger (e.g., Mr, Mrs, Ms)',
//     example: 'Mr',
//   })
//   readonly title: string;

//   @ApiProperty({ description: 'First name of the passenger', example: 'John' })
//   readonly firstName: string;

//   @ApiProperty({ description: 'Last name of the passenger', example: 'Doe' })
//   readonly lastName: string;

//   @ApiProperty({
//     description: 'Date of birth of the passenger',
//     example: '1990-01-01',
//   })
//   readonly dateOfBirth: Date;

//   @ApiProperty({
//     description: 'Passenger passport number',
//     example: 'A1234567',
//   })
//   readonly passportNumber: string;

//   @ApiProperty({ description: 'Passport expiry date', example: '2030-01-01' })
//   readonly passportExpiry: Date;
// }

import { IsString, IsDate, IsNotEmpty } from 'class-validator';

export class CreatePassengerDto {
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsDate()
  @IsNotEmpty()
  dateOfBirth?: Date;

  @IsString()
  @IsNotEmpty()
  passportNumber?: string;

  @IsDate()
  @IsNotEmpty()
  passportExpiry?: Date;
}
