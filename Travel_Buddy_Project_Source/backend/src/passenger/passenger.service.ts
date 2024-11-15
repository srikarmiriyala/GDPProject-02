import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Passenger } from '../schemas/passenger.schema';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { v4 as uuidv4 } from 'uuid';
import { Types } from 'mongoose';
@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(Passenger.name)
    private readonly passengerModel: Model<Passenger>,
  ) {}

  async findPassengerByPassport(
    passportNumber: string,
  ): Promise<Passenger | null> {
    console.log(
      `Searching for passenger with passport number: ${passportNumber}`,
    );

    const passenger = await this.passengerModel
      .findOne({ passportNumber: passportNumber.trim() }) // Trimming in case of any spacing issues
      .exec();

    console.log('Found passenger:', passenger);
    return passenger;
  }

  async createPassenger(
    createPassengerDto: CreatePassengerDto,
  ): Promise<Partial<Passenger>> {
    const { passportNumber } = createPassengerDto;

    // Check if the passport number already exists
    const existingPassenger = await this.passengerModel
      .findOne({ passportNumber })
      .exec();
    if (existingPassenger) {
      throw new ConflictException(
        'Passenger with this passport number already exists',
      );
    }

    // Create a new passenger with a unique passenger ID
    const passenger = new this.passengerModel({
      ...createPassengerDto,
      passengerId: uuidv4(),
    });

    const savedPassenger = await passenger.save();

    // Return only the relevant fields for the frontend, including _id
    const { _id, firstName, lastName, passengerId, dateOfBirth, title } =
      savedPassenger;

    return {
      _id: _id as Types.ObjectId, // Explicitly return the _id as an ObjectId
      passengerId,
      firstName,
      lastName,
      dateOfBirth,
      title,
    };
  }

  // async createMultiplePassengers(
  //   passengers: CreatePassengerDto[],
  // ): Promise<Partial<Passenger>[]> {
  //   console.log('passengers:', passengers);
  //   const createdPassengers = [];
  //   // console.log('createdPassengers:', createdPassengers);

  //   for (const createPassengerDto of passengers) {
  //     try {
  //       // Create each passenger using the existing createPassenger method
  //       const passenger = await this.createPassenger(createPassengerDto);
  //       createdPassengers.push(passenger);
  //     } catch (error) {
  //       if (error instanceof ConflictException) {
  //         console.warn(
  //           `Passenger with passport number ${createPassengerDto.passportNumber} already exists.`,
  //         );
  //         // You can choose to skip this passenger or handle it differently if needed
  //       } else {
  //         throw error; // Re-throw other errors
  //       }
  //     }
  //   }

  //   return createdPassengers;
  // }

  async createMultiplePassengers(
    passengers: CreatePassengerDto[],
  ): Promise<Partial<Passenger>[]> {
    console.log('passengers:', passengers);
    const createdOrUpdatedPassengers = [];

    for (const createPassengerDto of passengers) {
      try {
        // Check if a passenger with the same passport number already exists
        const existingPassenger = await this.findPassengerByPassport(
          createPassengerDto.passportNumber,
        );
        console.log('existingPassenger:', existingPassenger);

        if (existingPassenger) {
          // Update the existing passenger
          console.log(
            `Updating passenger with passport number ${createPassengerDto.passportNumber}`,
          );
          const updatedPassenger = await this.updatePassenger(
            existingPassenger.id,
            createPassengerDto,
          );
          createdOrUpdatedPassengers.push(updatedPassenger);
        } else {
          // Create a new passenger
          const passenger = await this.createPassenger(createPassengerDto);
          createdOrUpdatedPassengers.push(passenger);
        }
      } catch (error) {
        console.error(
          `Error processing passenger with passport number ${createPassengerDto.passportNumber}:`,
          error,
        );
        throw error; // Re-throw any errors to handle appropriately
      }
    }

    return createdOrUpdatedPassengers;
  }

  async getPassenger(id: string): Promise<Passenger> {
    const passenger = await this.passengerModel.findById(id).exec();
    if (!passenger) {
      throw new NotFoundException(`Passenger with ID ${id} not found`);
    }
    return passenger;
  }

  async getAllPassengers(): Promise<Passenger[]> {
    return this.passengerModel.find().exec();
  }

  async searchPassengers({
    name,
    passportNumber,
  }: {
    name?: string;
    passportNumber?: string;
  }): Promise<Passenger[]> {
    const query: any = {};

    // Create an array for $or conditions
    const orConditions = [];

    if (name) {
      orConditions.push(
        { firstName: { $regex: name, $options: 'i' } },
        { lastName: { $regex: name, $options: 'i' } },
      );
    }

    if (passportNumber) {
      orConditions.push({
        passportNumber: { $regex: passportNumber, $options: 'i' },
      });
    }

    // If there are any or conditions, set the query's $or field
    if (orConditions.length > 0) {
      query['$or'] = orConditions;
    }

    return this.passengerModel.find(query).exec();
  }

  async updatePassenger(
    id: Types.ObjectId | string,
    updateDto: Partial<CreatePassengerDto>,
  ): Promise<Passenger> {
    // Ensure id is an ObjectId
    const objectId = typeof id === 'string' ? new Types.ObjectId(id) : id;

    // Debugging log before the update
    console.log(`Updating passenger with ID ${objectId}`, updateDto);

    const updatedPassenger = await this.passengerModel
      .findByIdAndUpdate(objectId, updateDto, {
        new: true, // Return the updated document
      })
      .exec();

    if (!updatedPassenger) {
      throw new NotFoundException(`Passenger with ID ${objectId} not found`);
    }

    // Debugging log after the update
    console.log(`Updated passenger with ID ${objectId}`, updatedPassenger);

    return updatedPassenger;
  }

  async deletePassenger(id: string): Promise<void> {
    const deletedPassenger = await this.passengerModel
      .findByIdAndDelete(id)
      .exec();
    if (!deletedPassenger) {
      throw new NotFoundException(`Passenger with ID ${id} not found`);
    }
  }
}
