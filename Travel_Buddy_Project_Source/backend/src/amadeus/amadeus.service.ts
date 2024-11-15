// src/amadeus/amadeus.service.ts

import {
  Injectable,
  HttpException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';
import { InjectModel } from '@nestjs/mongoose';
import { FlightPricingResponse } from '../schemas/flight-pricing-response.schema';
import { Model } from 'mongoose';
// import { UpdateFlightDto } from './dto/UpdateFlight.dto';
import { BookFlight } from 'src/schemas/book-flight.schema';

@Injectable()
export class AmadeusService {
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly tokenUrl: string;
  private readonly apiBaseUrl: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
    @InjectModel(FlightPricingResponse.name)
    private readonly flightPricingResponseModel: Model<FlightPricingResponse>,
  ) {
    this.clientId = this.configService.get<string>('AMADEUS_API_KEY');
    this.clientSecret = this.configService.get<string>('AMADEUS_API_SECRET');
    this.tokenUrl = 'https://test.api.amadeus.com/v1/security/oauth2/token';
    this.apiBaseUrl = 'https://test.api.amadeus.com/v1';
  }

  // Fetch the access token from Amadeus API
  private async getAccessToken(): Promise<string> {
    const payload = new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: this.clientId,
      client_secret: this.clientSecret,
    });

    try {
      const response = await firstValueFrom(
        this.httpService.post(this.tokenUrl, payload.toString(), {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        }),
      );

      return response.data.access_token;
    } catch (error) {
      throw new HttpException(
        `Failed to retrieve access token: ${error.message}`,
        error.response?.status || 500,
      );
    }
  }

  // Confirm flight pricing using Amadeus API and save the response
  async confirmPricing(flightOffersDto: { flightOffers: any[] }): Promise<any> {
    const accessToken = await this.getAccessToken();
    const url = `${this.apiBaseUrl}/shopping/flight-offers/pricing`;

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          url,
          {
            data: {
              type: 'flight-offers-pricing',
              flightOffers: flightOffersDto.flightOffers,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/vnd.amadeus+json',
            },
          },
        ),
      );
      console.log('confirmPricing ~ response:', response.data);

      if (!response.data) {
        throw new NotFoundException('Flight pricing confirmation failed');
      }

      // Save the confirmed pricing response to the database
      const pricingResponse = new this.flightPricingResponseModel({
        flightOffers: response.data.data.flightOffers,
        bookingRequirements: response.data.data.bookingRequirements,
        dictionaries: response.data.dictionaries,
      });
      console.log('confirmPricing ~ pricingResponse:', pricingResponse);

      const savedData = await pricingResponse.save();
      console.log('confirmPricing ~ savedData:', savedData);

      return savedData;
    } catch (error) {
      throw new BadRequestException('Error confirming flight pricing');
    }
  }

  async getFlightPricingById(id: string): Promise<FlightPricingResponse> {
    try {
      const flightPricingResponse = await this.flightPricingResponseModel
        .findById(id)
        .exec();

      if (!flightPricingResponse) {
        throw new NotFoundException(`Flight Pricing with ID ${id} not found`);
      }

      return flightPricingResponse;
    } catch (error) {
      throw new BadRequestException('Error retrieving flight pricing data');
    }
  }

  async updateFlightPricingById(id: string, updateData: any) {
    try {
      // Update the flight pricing data using findByIdAndUpdate
      const updatedFlightPricingResponse = await this.flightPricingResponseModel
        .findByIdAndUpdate(
          id,
          { $set: updateData },
          { new: true, runValidators: true },
        )
        .exec();

      // If no flight pricing response is found, throw a NotFoundException
      if (!updatedFlightPricingResponse) {
        throw new NotFoundException(`Flight Pricing with ID ${id} not found`);
      }

      // Return the updated flight pricing response
      return updatedFlightPricingResponse;
    } catch (error) {
      throw new BadRequestException('Error updating flight pricing data');
    }
  }

  // Create a flight order using Amadeus API
  async createFlightOrder(flightOrderDto: {
    flightOffers: any[];
    travelers: any[];
  }): Promise<any> {
    const accessToken = await this.getAccessToken();
    const url = `${this.apiBaseUrl}/booking/flight-orders`;

    try {
      const response = await firstValueFrom(
        this.httpService.post(
          url,
          {
            data: {
              type: 'flight-order',
              flightOffers: flightOrderDto.flightOffers,
              travelers: flightOrderDto.travelers,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
              'Content-Type': 'application/vnd.amadeus+json',
            },
          },
        ),
      );
      console.log('response data:', response.data);

      if (!response.data) {
        throw new NotFoundException('Flight order creation failed');
      }

      return response.data;
    } catch (error) {
      console.log('error:', error);
      if (error.response) {
        console.error('API error:', error.response.data);
      }
      throw new BadRequestException('Error creating flight order');
    }
  }

  // Fetch airport details based on IATA code (for CITY or AIRPORT subType)
  async getAirportDetails(iataCode: string): Promise<any> {
    // This method is currently commented out. Uncomment and implement it if needed
  }

  // Fetch airport data from Amadeus API based on a search keyword
  async searchAirports(keyword: string): Promise<any> {
    const accessToken = await this.getAccessToken();
    const url = `${this.apiBaseUrl}/reference-data/locations?subType=CITY,AIRPORT&keyword=${keyword}&page[limit]=10`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        `Failed to fetch airport data: ${error.message}`,
        error.response?.status || 500,
      );
    }
  }

  // Fetch all airport data from Amadeus API based on a search keyword
  async searchAllAirports(keyword: string): Promise<any> {
    const accessToken = await this.getAccessToken();
    const url = `${this.apiBaseUrl}/reference-data/locations?subType=CITY,AIRPORT&keyword=${keyword}`;

    try {
      const response = await firstValueFrom(
        this.httpService.get(url, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      );

      return response.data;
    } catch (error) {
      throw new HttpException(
        `Failed to fetch all airport data: ${error.message}`,
        error.response?.status || 500,
      );
    }
  }
}
