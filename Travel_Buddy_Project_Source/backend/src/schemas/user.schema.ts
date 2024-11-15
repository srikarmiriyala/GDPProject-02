import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Booking } from './booking.schema'; // Import the Booking schema if needed

// // Define the UserDocument type for Mongoose
// export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({
    example: '60f7f5c8b546ab001c8b4567',
    description: 'The unique ID of the user',
  })
  _id: Types.ObjectId;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ description: 'The hashed password of the user' })
  @Prop({ required: true })
  password: string;

  @ApiProperty({
    example: 'Nadim Chowdhury',
    description: 'The full name of the user',
    required: false,
  })
  @Prop({ required: false })
  fullName: string;

  @ApiProperty({
    example: 'https://example.com/profile.jpg',
    description: 'Profile picture URL',
    required: false,
  })
  @Prop({ required: false })
  profilePicture: string;

  @ApiProperty({
    example: 'user',
    description: 'The role of the user',
    default: 'user',
  })
  @Prop({ default: 'user' })
  role: string;

  // One-to-Many relationship with Booking (a user can have many bookings)
  @ApiProperty({
    description: 'List of bookings made by the user',
    type: [Booking],
  })
  @Prop({ type: [{ type: Types.ObjectId, ref: 'Booking' }], default: [] })
  bookings: Types.ObjectId[];
}

// Create the User schema
export const UserSchema = SchemaFactory.createForClass(User);

// Export the UserDocument type to be used in services
export type UserDocument = User & Document;
