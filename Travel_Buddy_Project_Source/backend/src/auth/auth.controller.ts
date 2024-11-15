// import {
//   Controller,
//   Post,
//   Body,
//   UseGuards,
//   UnauthorizedException,
//   HttpCode,
//   HttpStatus,
// } from '@nestjs/common';
// import {
//   ApiTags,
//   ApiOperation,
//   ApiResponse,
//   ApiBearerAuth,
// } from '@nestjs/swagger';
// import { AuthService } from './auth.service';
// import { AuthCredentialsDto } from './dto/auth-credentials.dto';
// import { JwtAuthGuard } from './jwt-auth.guard';

// @ApiTags('Auth')
// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @ApiOperation({ summary: 'Register a new user' })
//   @ApiResponse({ status: 201, description: 'User successfully created' })
//   @ApiResponse({ status: 400, description: 'Bad request' })
//   @Post('/register')
//   @HttpCode(HttpStatus.CREATED) // Return 201 Created status
//   async register(
//     @Body() authCredentialsDto: AuthCredentialsDto,
//   ): Promise<{ message: string; fullName: string; email: string }> {
//     // Return the message, fullName, and email from the service
//     return this.authService.register(authCredentialsDto);
//   }

//   @ApiOperation({ summary: 'Log in a user' })
//   @ApiResponse({ status: 200, description: 'User successfully logged in' })
//   @ApiResponse({ status: 401, description: 'Invalid credentials' })
//   @Post('/login')
//   async login(@Body() authCredentialsDto: AuthCredentialsDto) {
//     const user = await this.authService.validateUser(
//       authCredentialsDto.email,
//       authCredentialsDto.password,
//     );
//     if (!user) {
//       throw new UnauthorizedException('Invalid credentials');
//     }
//     return this.authService.login(user);
//   }
// }

import {
  Controller,
  Post,
  Body,
  UseGuards,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register a new user' })
  @ApiResponse({ status: 201, description: 'User successfully created' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @Post('/register')
  @HttpCode(HttpStatus.CREATED)
  async register(
    @Body() authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ message: string; fullName: string; email: string }> {
    return this.authService.register(authCredentialsDto);
  }

  @ApiOperation({ summary: 'Log in a user' })
  @ApiResponse({ status: 200, description: 'User successfully logged in' })
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  @Post('/login')
  async login(@Body() authCredentialsDto: AuthCredentialsDto) {
    const user = await this.authService.validateUser(
      authCredentialsDto.email,
      authCredentialsDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
