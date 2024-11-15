import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiPropertyOptional({
    example: 'johndoe',
    description: 'Username of the user',
  })
  username?: string;

  @ApiPropertyOptional({
    example: 'johndoe@example.com',
    description: 'Email of the user',
  })
  email?: string;

  @ApiPropertyOptional({
    example: ['admin', 'user'],
    description: 'Roles assigned to the user',
  })
  roles?: string[];
}
