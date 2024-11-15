import { Controller, Get, Patch, Body, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get user profile by ID' })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getProfile(@Param('id') id: string) {
    return this.userService.getProfile(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user profile' })
  @ApiBody({ type: UpdateProfileDto })
  @ApiResponse({ status: 200, description: 'Profile updated successfully' })
  async updateProfile(
    @Param('id') id: string,
    @Body() updateProfileDto: UpdateProfileDto,
  ) {
    return this.userService.updateProfile(id, updateProfileDto);
  }

  /*
  @Patch(':id/profile-picture')
  @ApiOperation({ summary: 'Upload or update user profile picture' })
  @ApiResponse({
    status: 200,
    description: 'Profile picture updated successfully',
  })
  @ApiBody({ description: 'Profile picture file', type: 'multipart/form-data' })
  async uploadProfilePicture(
    @Param('id') id: string,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const profilePicturePath = `/uploads/profile-pictures/${file.filename}`;
    return this.userService.updateProfilePicture(id, profilePicturePath);
  }
  */
}
