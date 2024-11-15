import { Types } from 'mongoose';

export interface JwtPayload {
  email: string;
  sub: Types.ObjectId; // User's ID as ObjectId for MongoDB
  roles?: string[]; // Optional roles array
}
