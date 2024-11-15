import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Headers,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { FlightService } from './flight.service';
import { SearchFlightDto } from './dto/search-flight.dto';
// import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiParam,
} from '@nestjs/swagger';
import { CreateFlightDto } from './dto/create-flight.dto';
import { BookFlight } from 'src/schemas/book-flight.schema';

@ApiTags('Flight')
@Controller('flights')
export class FlightController {
  constructor(private flightService: FlightService) {}

  @Post('search')
  @ApiOperation({ summary: 'Search for flights based on criteria' })
  @ApiResponse({ status: 200, description: 'Flights found successfully.' })
  @ApiResponse({ status: 404, description: 'Flights not found.' })
  searchFlights(@Body() searchFlightDto: SearchFlightDto) {
    return this.flightService.searchFlights(searchFlightDto);
  }

  @Post('book')
  @ApiOperation({ summary: 'Create a new flight and save it to MongoDB' })
  @ApiResponse({ status: 201, description: 'Flight created successfully.' })
  @ApiResponse({
    status: 400,
    description: 'Invalid data for flight creation.',
  })
  createFlight(
    @Body() createFlightDto: CreateFlightDto,
    @Headers('Authorization') token: string,
  ) {
    const accessToken = token.split(' ')[1]; // Extract token from Bearer token
    return this.flightService.createFlight(createFlightDto, accessToken);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get all flights for a user or all data for admin' })
  @ApiResponse({ status: 200, description: 'Flights retrieved successfully.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  getAllFlights(@Req() request: Request) {
    try {
      // Extract authorization header
      const authHeader = request.headers['authorization'];

      if (!authHeader) {
        throw new NotFoundException('Authorization header not found');
      }

      const token = authHeader.split(' ')[1]; // Assumes Bearer token format

      if (!token) {
        throw new NotFoundException('Token not found in authorization header');
      }

      return this.flightService.getAllFlights(token);
    } catch (error) {
      console.error('Error in getAllFlights:', error.message);
      throw new NotFoundException('Failed to retrieve flights');
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get flight by ID' })
  @ApiResponse({ status: 200, description: 'Flight retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Flight not found.' })
  @ApiParam({ name: 'id', required: true, description: 'ID of the flight' })
  getFlightById(@Param('id') id: string) {
    return this.flightService.getFlightById(id);
  }

  @Put('flight-pricing/:id')
  async updateFlight(
    @Param('id') id: string,
    @Body() updateFlightDto: UpdateFlightDto,
  ): Promise<BookFlight> {
    return await this.flightService.updateFlightById(id, updateFlightDto);
  }

  // @Get(':id')
  // @ApiOperation({ summary: 'Get flight by ID' })
  // @ApiResponse({ status: 200, description: 'Flight retrieved successfully.' })
  // @ApiResponse({ status: 404, description: 'Flight not found.' })
  // getFlightById(@Param('id') id: string) {
  //   return this.flightService.getFlightById(id);
  // }

  // @Post('create')
  // @ApiOperation({ summary: 'Create a new flight' })
  // @ApiBody({ type: CreateFlightDto })
  // @ApiResponse({ status: 201, description: 'Flight created successfully.' })
  // @ApiResponse({
  //   status: 400,
  //   description: 'Invalid data for flight creation.',
  // })
  // createFlight(@Body() createFlightDto: CreateFlightDto) {
  //   return this.flightService.createFlight(createFlightDto);
  // }

  // @Put(':id')
  // @ApiOperation({ summary: 'Update a flight' })
  // @ApiBody({ type: UpdateFlightDto })
  // @ApiResponse({ status: 200, description: 'Flight updated successfully.' })
  // @ApiResponse({ status: 404, description: 'Flight not found.' })
  // @ApiResponse({ status: 400, description: 'Invalid data for flight update.' })
  // updateFlight(
  //   @Param('id') id: string,
  //   @Body() updateFlightDto: UpdateFlightDto,
  // ) {
  //   return this.flightService.updateFlight(id, updateFlightDto);
  // }

  // @Delete(':id')
  // @ApiOperation({ summary: 'Delete a flight' })
  // @ApiResponse({ status: 200, description: 'Flight deleted successfully.' })
  // @ApiResponse({ status: 404, description: 'Flight not found.' })
  // deleteFlight(@Param('id') id: string) {
  //   return this.flightService.deleteFlight(id);
  // }
}
