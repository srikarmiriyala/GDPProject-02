import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Body,
  NotFoundException,
  BadRequestException,
  Query,
  UnauthorizedException,
  Headers,
} from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { Booking } from '../schemas/booking.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Booking')
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Get()
  @ApiOperation({ summary: 'Get all bookings or user-specific bookings' })
  @ApiResponse({
    status: 200,
    description: 'List of bookings retrieved successfully.',
  })
  async getAllBookings(
    @Headers('Authorization') authHeader: string,
    @Query('search') search?: string,
    @Query('sortField') sortField?: string,
    @Query('sortOrder') sortOrder: 'asc' | 'desc' = 'asc',
    @Query('filter') filter?: string,
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<{ bookings: Booking[]; total: number }> {
    if (!authHeader) {
      throw new UnauthorizedException('No token provided');
    }

    // Extract the token from the 'Bearer' authorization header
    const token = authHeader.replace('Bearer ', '');

    // Parse the filter query if provided
    const parsedFilter = filter ? JSON.parse(filter) : {};

    return this.bookingService.getBookings(
      token,
      search,
      sortField,
      sortOrder,
      parsedFilter,
      page,
      limit,
    );
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a booking by ID' })
  @ApiResponse({ status: 200, description: 'Booking retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  async getBookingById(@Param('id') id: string): Promise<Booking> {
    const booking = await this.bookingService.getBooking(id);
    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  @Post()
  @ApiOperation({ summary: 'Create a new booking' })
  @ApiBody({ type: CreateBookingDto })
  @ApiResponse({ status: 201, description: 'Booking created successfully.' })
  async createBooking(@Body() createBookingDto: any): Promise<Booking> {
    try {
      const booking = await this.bookingService.createBooking(createBookingDto);
      return booking;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a booking' })
  @ApiResponse({ status: 200, description: 'Booking deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Booking not found.' })
  async deleteBooking(@Param('id') id: string): Promise<void> {
    return this.bookingService.deleteBooking(id);
  }
}
