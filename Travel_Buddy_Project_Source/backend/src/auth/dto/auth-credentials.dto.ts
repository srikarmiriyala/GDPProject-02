// import { ApiProperty } from '@nestjs/swagger';

// export class AuthCredentialsDto {
//   @ApiProperty({
//     example: 'Nadim Chowdhury',
//     description: 'The full name of the user',
//   })
//   fullName: string;

//   @ApiProperty({
//     example: 'user@example.com',
//     description: 'The email of the user',
//   })
//   email: string;

//   @ApiProperty({
//     example: 'StrongPassword123!',
//     description: 'The password of the user (min 8 characters)',
//   })
//   password: string;
// }

import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @ApiProperty({
    example: 'Nadim Chowdhury',
    description: 'The full name of the user',
  })
  fullName: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: 'StrongPassword123!',
    description: 'The password of the user (min 8 characters)',
  })
  password: string;
}
