// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { Booking } from '../entities/booking.entity';
// import { User } from '../entities/user.entity';
// import { Flight } from '../entities/flight.entity';
// import { Payment } from '../entities/payment.entity';

// @Injectable()
// export class AdminService {
//   constructor(
//     @InjectRepository(Booking)
//     private readonly bookingRepository: Repository<Booking>,
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//     @InjectRepository(Flight)
//     private readonly flightRepository: Repository<Flight>,
//     @InjectRepository(Payment)
//     private readonly paymentRepository: Repository<Payment>,
//   ) {}

//   async getOverview() {
//     const totalBookings = await this.bookingRepository.count();
//     const totalUsers = await this.userRepository.count();
//     const totalFlights = await this.flightRepository.count();
//     const totalRevenue = await this.paymentRepository
//       .createQueryBuilder('payment')
//       .select('SUM(payment.amount)', 'sum')
//       .getRawOne();

//     return {
//       totalBookings,
//       totalUsers,
//       totalFlights,
//       totalRevenue: totalRevenue?.sum || 0,
//     };
//   }
// }

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from '../schemas/booking.schema';
import { User } from '../schemas/user.schema';
import { Flight } from '../schemas/flight.schema';
import { Payment } from '../schemas/payment.schema';

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Booking.name) private readonly bookingModel: Model<Booking>,
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Flight.name) private readonly flightModel: Model<Flight>,
    @InjectModel('Payment') private readonly paymentModel: Model<Payment>,
  ) {}

  async getOverview() {
    const totalBookings = await this.bookingModel.countDocuments();
    const totalUsers = await this.userModel.countDocuments();
    const totalFlights = await this.flightModel.countDocuments();
    const totalRevenue = await this.paymentModel.aggregate([
      { $group: { _id: null, sum: { $sum: '$amount' } } },
    ]);

    return {
      totalBookings,
      totalUsers,
      totalFlights,
      totalRevenue: totalRevenue?.[0]?.sum || 0,
    };
  }
}
