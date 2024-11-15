import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from '../schemas/booking.schema';
import { Flight } from '../schemas/flight.schema';
import { Passenger } from '../schemas/passenger.schema';
import { CreateBookingDto } from './dto/create-booking.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class BookingService {
  constructor(
    @InjectModel(Booking.name) private bookingModel: Model<Booking>,
    @InjectModel(Flight.name) private flightModel: Model<Flight>,
    @InjectModel(Passenger.name) private passengerModel: Model<Passenger>,
    private jwtService: JwtService,
  ) {}

  async createBooking(createBookingDto: any): Promise<any> {
    // const { flightOffers, travelers } = createBookingDto;

    // Save each flight offer directly without any modifications
    // const savedFlightOffers = await this.flightModel.insertMany(flightOffers);

    // Save traveler details directly without any modifications
    // const savedTravelers = await this.passengerModel.insertMany(travelers);

    // Create a new booking document with references to saved offers and travelers
    const newBooking = new this.bookingModel({
      ...createBookingDto,
    });

    // Save and return the booking document
    const savedNewBooking = await newBooking.save();

    return savedNewBooking;
  }

  async getBooking(id: string): Promise<Booking> {
    const booking = await this.bookingModel
      .findById(id)
      .populate('flightOffers travelers')
      .exec();
    console.log('getBooking ~ booking:', booking);

    if (!booking) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
    return booking;
  }

  // async getBookings(
  //   token: string,
  //   search?: string,
  //   sortField: string = 'bookingDate',
  //   sortOrder: 'asc' | 'desc' = 'asc',
  //   filter?: { [key: string]: any },
  //   page: number = 1,
  //   limit: number = 10,
  // ): Promise<{ bookings: Booking[]; total: number }> {
  //   // Decode the token to get user information (you need to implement this method)
  //   // const decodedUser = this.verifyToken(token);
  //   // console.log('decodedUser:', decodedUser);

  //   // if (!decodedUser) {
  //   //   throw new UnauthorizedException('Invalid or expired token');
  //   // }

  //   // // Check if the user is an admin based on the decoded token information
  //   // const isAdmin = decodedUser.roles && decodedUser.roles.includes('admin');

  //   // Build the query object
  //   let query: any = {};

  //   // if (!isAdmin) {
  //   //   query = {
  //   //     'travelers.id': decodedUser.sub, // Make sure 'sub' matches the exact field structure in MongoDB
  //   //   };
  //   // }
  //   // console.log('query:', query);

  //   // Apply search conditions if provided
  //   if (search) {
  //     query.$or = [
  //       { 'travelers.name.firstName': new RegExp(search, 'i') },
  //       { 'travelers.name.lastName': new RegExp(search, 'i') },
  //       { 'flightOffers.id': new RegExp(search, 'i') },
  //       // Add more searchable fields as needed
  //     ];
  //   }

  //   // Apply additional filters if provided
  //   if (filter) {
  //     Object.keys(filter).forEach((key) => {
  //       query[key] = filter[key];
  //     });
  //   }

  //   // Calculate pagination
  //   const skip = (page - 1) * limit;

  //   // Sorting setup
  //   const sortOption: any = {};
  //   sortOption[sortField] = sortOrder === 'asc' ? 1 : -1;

  //   // Fetch the total count of matching documents
  //   const total = await this.bookingModel.countDocuments(query).exec();

  //   // Fetch the paginated and sorted documents
  //   const bookings = await this.bookingModel
  //     .find(query)
  //     .populate('flightOffers travelers')
  //     .sort(sortOption)
  //     .skip(skip)
  //     .limit(limit)
  //     .exec();

  //   return {
  //     bookings,
  //     total,
  //   };
  // }

  private verifyToken(token: string) {
    try {
      // Verify and decode the token
      return this.jwtService.verify(token);
    } catch (error) {
      return null;
    }
  }

  async getBookings(
    token: string,
    search?: string,
    sortField: string = 'createdAt', // Sort by createdAt for latest first
    sortOrder: 'asc' | 'desc' = 'desc', // Default to descending order
    filter?: { [key: string]: any },
    page: number = 1,
    limit: number = 10,
  ): Promise<{ bookings: Booking[]; total: number }> {
    // Decode the token to get user information
    const decodedUser = this.verifyToken(token);
    console.log('decodedUser:', decodedUser);

    if (!decodedUser) {
      throw new UnauthorizedException('Invalid or expired token');
    }

    // Check if the user is an admin based on the decoded token information
    const isAdmin = decodedUser.roles && decodedUser.roles.includes('admin');
    console.log('isAdmin:', isAdmin);

    // Build the query object
    let query: any = {};

    // If the user is not an admin, filter bookings by the user's ID
    if (!isAdmin) {
      query['userId'] = decodedUser.sub; // 'sub' should match the exact field structure in MongoDB
    }

    // Apply search conditions if provided
    if (search) {
      query.$or = [
        { 'travelers.name.firstName': new RegExp(search, 'i') },
        { 'travelers.name.lastName': new RegExp(search, 'i') },
        { 'flightOffers.id': new RegExp(search, 'i') },
        // Add more searchable fields as needed
      ];
    }

    // Apply additional filters if provided
    if (filter) {
      Object.keys(filter).forEach((key) => {
        query[key] = filter[key];
      });
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Sorting setup
    const sortOption: any = {};
    sortOption[sortField] = sortOrder === 'asc' ? 1 : -1;

    // Fetch the total count of matching documents
    const total = await this.bookingModel.countDocuments(query).exec();

    // Fetch the paginated and sorted documents
    const bookings = await this.bookingModel
      .find(query)
      .populate('flightOffers travelers')
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .exec();

    return {
      bookings,
      total,
    };
  }

  async deleteBooking(id: string): Promise<void> {
    const result = await this.bookingModel.findByIdAndDelete(id).exec();
    if (!result) {
      throw new NotFoundException(`Booking with ID ${id} not found`);
    }
  }
}
