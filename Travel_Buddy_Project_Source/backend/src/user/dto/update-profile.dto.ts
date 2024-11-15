import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateProfileDto {
  @ApiPropertyOptional({
    example: 'John',
    description: 'First name of the user',
  })
  firstName?: string;

  @ApiPropertyOptional({ example: 'Doe', description: 'Last name of the user' })
  lastName?: string;

  @ApiPropertyOptional({
    example: '/uploads/profile-pictures/johndoe.jpg',
    description: 'URL to the profile picture',
  })
  profilePicture?: string;
}
