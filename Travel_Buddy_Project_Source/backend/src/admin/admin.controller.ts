// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Body,
//   Param,
//   UseGuards,
// } from '@nestjs/common';
// import { AdminService } from './admin.service';
// import { FlightService } from '../flight/flight.service';
// import { UserService } from '../user/user.service';
// import { CreateFlightDto } from '../flight/dto/create-flight.dto';
// import { UpdateFlightDto } from '../flight/dto/update-flight.dto';
// import { UpdateUserDto } from '../user/dto/update-user.dto';
// import { RolesGuard } from '../auth/roles.guard';
// import { Roles } from '../auth/roles.decorator';
// import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

// @ApiTags('Admin')
// @Controller('admin')
// @UseGuards(RolesGuard)
// @Roles('admin')
// export class AdminController {
//   constructor(
//     private readonly adminService: AdminService,
//     private readonly flightService: FlightService,
//     private readonly userService: UserService,
//   ) {}

//   @Get('dashboard')
//   @ApiOperation({ summary: 'Get Admin Dashboard Overview' })
//   @ApiResponse({
//     status: 200,
//     description: 'Dashboard overview retrieved successfully.',
//   })
//   async getDashboard() {
//     return this.adminService.getOverview();
//   }

//   @Get('flights')
//   @ApiOperation({ summary: 'Get List of Flights' })
//   @ApiResponse({
//     status: 200,
//     description: 'List of flights retrieved successfully.',
//   })
//   async getFlights() {
//     return this.flightService.getFlights();
//   }

//   @Post('flights')
//   @ApiOperation({ summary: 'Create a New Flight' })
//   @ApiBody({ type: CreateFlightDto })
//   @ApiResponse({ status: 201, description: 'Flight created successfully.' })
//   async createFlight(@Body() createFlightDto: CreateFlightDto) {
//     return this.flightService.createFlight(createFlightDto);
//   }

//   @Put('flights/:id')
//   @ApiOperation({ summary: 'Update Flight Information' })
//   @ApiBody({ type: UpdateFlightDto })
//   @ApiResponse({ status: 200, description: 'Flight updated successfully.' })
//   @ApiResponse({ status: 404, description: 'Flight not found.' })
//   async updateFlight(
//     @Param('id') id: number,
//     @Body() updateFlightDto: UpdateFlightDto,
//   ) {
//     return this.flightService.updateFlight(id, updateFlightDto);
//   }

//   @Delete('flights/:id')
//   @ApiOperation({ summary: 'Delete a Flight' })
//   @ApiResponse({ status: 200, description: 'Flight deleted successfully.' })
//   @ApiResponse({ status: 404, description: 'Flight not found.' })
//   async deleteFlight(@Param('id') id: number) {
//     return this.flightService.deleteFlight(id);
//   }

//   @Get('users')
//   @ApiOperation({ summary: 'Get List of Users' })
//   @ApiResponse({
//     status: 200,
//     description: 'List of users retrieved successfully.',
//   })
//   async getUsers() {
//     return this.userService.getUsers();
//   }

//   @Put('users/:id')
//   @ApiOperation({ summary: 'Update User Information' })
//   @ApiBody({ type: UpdateUserDto })
//   @ApiResponse({ status: 200, description: 'User updated successfully.' })
//   @ApiResponse({ status: 404, description: 'User not found.' })
//   async updateUser(
//     @Param('id') id: number,
//     @Body() updateUserDto: UpdateUserDto,
//   ) {
//     return this.userService.updateUser(id, updateUserDto);
//   }

//   @Delete('users/:id')
//   @ApiOperation({ summary: 'Delete a User' })
//   @ApiResponse({ status: 200, description: 'User deleted successfully.' })
//   @ApiResponse({ status: 404, description: 'User not found.' })
//   async deleteUser(@Param('id') id: number) {
//     return this.userService.deleteUser(id);
//   }
// }

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { FlightService } from '../flight/flight.service';
import { UserService } from '../user/user.service';
import { CreateFlightDto } from '../flight/dto/create-flight.dto';
import { UpdateFlightDto } from '../flight/dto/update-flight.dto';
import { UpdateUserDto } from '../user/dto/update-user.dto';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Admin')
@Controller('admin')
@UseGuards(RolesGuard)
@Roles('admin')
export class AdminController {
  constructor(
    private readonly adminService: AdminService,
    private readonly flightService: FlightService,
    private readonly userService: UserService,
  ) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get Admin Dashboard Overview' })
  @ApiResponse({
    status: 200,
    description: 'Dashboard overview retrieved successfully.',
  })
  async getDashboard() {
    return this.adminService.getOverview();
  }

  // @Get('flights')
  // @ApiOperation({ summary: 'Get List of Flights' })
  // @ApiResponse({
  //   status: 200,
  //   description: 'List of flights retrieved successfully.',
  // })
  // async getFlights() {
  //   return this.flightService.getFlights();
  // }

  // @Post('flights')
  // @ApiOperation({ summary: 'Create a New Flight' })
  // @ApiBody({ type: CreateFlightDto })
  // @ApiResponse({ status: 201, description: 'Flight created successfully.' })
  // async createFlight(@Body() createFlightDto: CreateFlightDto) {
  //   return this.flightService.createFlight(createFlightDto);
  // }

  // @Put('flights/:id')
  // @ApiOperation({ summary: 'Update Flight Information' })
  // @ApiBody({ type: UpdateFlightDto })
  // @ApiResponse({ status: 200, description: 'Flight updated successfully.' })
  // @ApiResponse({ status: 404, description: 'Flight not found.' })
  // async updateFlight(
  //   @Param('id') id: string, // Use string since MongoDB IDs are strings
  //   @Body() updateFlightDto: UpdateFlightDto,
  // ) {
  //   return this.flightService.updateFlight(id, updateFlightDto);
  // }

  // @Delete('flights/:id')
  // @ApiOperation({ summary: 'Delete a Flight' })
  // @ApiResponse({ status: 200, description: 'Flight deleted successfully.' })
  // @ApiResponse({ status: 404, description: 'Flight not found.' })
  // async deleteFlight(@Param('id') id: string) {
  //   return this.flightService.deleteFlight(id);
  // }

  @Get('users')
  @ApiOperation({ summary: 'Get List of Users' })
  @ApiResponse({
    status: 200,
    description: 'List of users retrieved successfully.',
  })
  async getUsers() {
    return this.userService.getUsers();
  }

  @Put('users/:id')
  @ApiOperation({ summary: 'Update User Information' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async updateUser(
    @Param('id') id: string, // Use string for MongoDB IDs
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete('users/:id')
  @ApiOperation({ summary: 'Delete a User' })
  @ApiResponse({ status: 200, description: 'User deleted successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }
}
