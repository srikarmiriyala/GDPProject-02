import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Headers,
  BadRequestException,
  Param,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { AmadeusService } from './amadeus.service'; // Import AmadeusService
import { BookFlight } from 'src/schemas/book-flight.schema';
import { FlightPricingResponse } from '../schemas/flight-pricing-response.schema';
// import { UpdateFlightDto } from './dto/UpdateFlight.dto';

@Controller('amadeus')
export class AmadeusController {
  constructor(private readonly amadeusService: AmadeusService) {} // Use AmadeusService

  @Get('airports')
  async searchAirports(@Query('keyword') keyword: string) {
    try {
      const data = await this.amadeusService.searchAirports(keyword);
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Get('all-airports')
  async searchAllAirports(@Query('keyword') keyword: string) {
    try {
      const data = await this.amadeusService.searchAllAirports(keyword);
      return data;
    } catch (error) {
      return { error: error.message };
    }
  }

  @Post('flight-pricing')
  async confirmFlightPricing(
    @Body() flightOffersDto: { flightOffers: any[] },
    @Headers('Authorization') token: string,
  ) {
    if (!token) {
      throw new BadRequestException('Authorization token is required');
    }

    // Call the Amadeus service to confirm pricing
    return this.amadeusService.confirmPricing(flightOffersDto);
  }

  @Get('flight-pricing/:id')
  async getFlightPricingById(@Param('id') id: string) {
    try {
      return await this.amadeusService.getFlightPricingById(id);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  @Put('flight-pricing/:id')
  async updateFlightPricingById(
    @Param('id') id: string,
    @Body() updateData: Partial<FlightPricingResponse>,
  ) {
    try {
      return await this.amadeusService.updateFlightPricingById(id, updateData);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException('Error updating flight pricing data');
    }
  }

  @Post('create-flight-order')
  async createFlightOrder(
    @Body() flightOrderDto: { flightOffers: any[]; travelers: any[] },
    @Headers('Authorization') token: string,
  ) {
    if (!token) {
      throw new BadRequestException('Authorization token is required');
    }

    // Call the Amadeus service to create a flight order
    return this.amadeusService.createFlightOrder(flightOrderDto);
  }
}
