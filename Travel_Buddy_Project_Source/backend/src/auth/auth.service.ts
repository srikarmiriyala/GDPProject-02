// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import * as bcrypt from 'bcryptjs';
// import { User } from '../entities/user.entity';
// import { AuthCredentialsDto } from './dto/auth-credentials.dto';
// import { JwtPayload } from './jwt-payload.interface';

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//     private readonly jwtService: JwtService,
//   ) {}

//   async register(
//     authCredentialsDto: AuthCredentialsDto,
//   ): Promise<{ message: string; fullName: string; email: string }> {
//     const { fullName, email, password } = authCredentialsDto;
//     const salt = await bcrypt.genSalt();
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create a new user entity with hashed password
//     const user = this.userRepository.create({
//       fullName,
//       email,
//       password: hashedPassword,
//     });

//     // Save the user in the database
//     await this.userRepository.save(user);

//     // Return a success message and the user's full name and email
//     return {
//       message: 'User successfully created',
//       fullName: user.fullName,
//       email: user.email,
//     };
//   }

//   // Validate user by email and password for login
//   async validateUser(email: string, password: string): Promise<User | null> {
//     const user = await this.userRepository.findOne({ where: { email } });
//     if (user && (await bcrypt.compare(password, user.password))) {
//       return user;
//     }
//     return null;
//   }

//   // New method for validating user by email without checking password (for JWT token validation)
//   async validateUserByEmail(email: string): Promise<User | null> {
//     const user = await this.userRepository.findOne({ where: { email } });
//     if (user) {
//       return user;
//     }
//     return null;
//   }

//   // Login method to authenticate a user and return a JWT token
//   async login(user: User) {
//     const payload: JwtPayload = {
//       email: user.email,
//       sub: user.id,
//       roles: [user.role],
//     };
//     const accessToken = this.jwtService.sign(payload);

//     return {
//       access_token: accessToken,
//       user: {
//         id: user.id,
//         fullName: user.fullName,
//         email: user.email,
//         role: user.role,
//         profilePicture: user.profilePicture,
//       },
//     };
//   }
// }

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User, UserDocument } from '../schemas/user.schema';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async register(
    authCredentialsDto: AuthCredentialsDto,
  ): Promise<{ message: string; fullName: string; email: string }> {
    const { fullName, email, password } = authCredentialsDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user document with hashed password
    const newUser = new this.userModel({
      fullName,
      email,
      password: hashedPassword,
    });

    // Save the user in the database
    const user = await newUser.save();

    return {
      message: 'User successfully created',
      fullName: user.fullName,
      email: user.email,
    };
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.userModel.findOne({ email }).exec();
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    return null;
  }

  async validateUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }

  async login(user: User) {
    const payload: JwtPayload = {
      email: user.email,
      sub: user._id, // MongoDB uses `_id`
      roles: [user.role],
    };
    const accessToken = this.jwtService.sign(payload);

    return {
      access_token: accessToken,
      user: {
        id: user._id, // Use MongoDB's `_id`
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        profilePicture: user.profilePicture,
      },
    };
  }
}
