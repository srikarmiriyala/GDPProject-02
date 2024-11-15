// import { Injectable, NotFoundException } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { User } from '../entities/user.entity';
// import { UpdateProfileDto } from './dto/update-profile.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

// @Injectable()
// export class UserService {
//   constructor(
//     @InjectRepository(User)
//     private readonly userRepository: Repository<User>,
//   ) {}

//   // Get all users
//   async getUsers(): Promise<User[]> {
//     return this.userRepository.find();
//   }

//   // Get user profile by ID
//   async getProfile(userId: number): Promise<User> {
//     const user = await this.userRepository.findOne({
//       where: { id: userId },
//     });
//     if (!user) {
//       throw new NotFoundException(`User with ID ${userId} not found`);
//     }
//     return user;
//   }

//   // Update user profile
//   async updateProfile(
//     userId: number,
//     updateProfileDto: UpdateProfileDto,
//   ): Promise<User> {
//     const user = await this.userRepository.preload({
//       id: userId,
//       ...updateProfileDto,
//     });

//     if (!user) {
//       throw new NotFoundException(`User with ID ${userId} not found`);
//     }

//     return this.userRepository.save(user);
//   }

//   // Update profile picture path in the database
//   async updateProfilePicture(
//     userId: number,
//     profilePicture: string,
//   ): Promise<User> {
//     const user = await this.userRepository.preload({
//       id: userId,
//       profilePicture,
//     });

//     if (!user) {
//       throw new NotFoundException(`User with ID ${userId} not found`);
//     }

//     return this.userRepository.save(user);
//   }

//   // Update a user's general information (e.g., admin functions)
//   async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
//     await this.userRepository.update(id, updateUserDto);
//     const updatedUser = await this.userRepository.findOne({ where: { id } });
//     if (!updatedUser) {
//       throw new NotFoundException(`User with ID ${id} not found`);
//     }
//     return updatedUser;
//   }

//   // Delete a user
//   async deleteUser(id: number): Promise<void> {
//     const user = await this.userRepository.findOne({ where: { id } });
//     if (!user) {
//       throw new NotFoundException(`User with ID ${id} not found`);
//     }
//     await this.userRepository.delete(id);
//   }
// }

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../schemas/user.schema';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  // Get all users
  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // Get user profile by ID
  async getProfile(userId: string): Promise<User> {
    const user = await this.userModel
      .findById(userId)
      .select('-password') // Exclude the password field
      .exec();

    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return user;
  }

  // Update user profile
  async updateProfile(
    userId: string,
    updateProfileDto: UpdateProfileDto,
  ): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(userId, updateProfileDto, {
        new: true,
      })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return updatedUser;
  }

  // Update profile picture path in the database
  async updateProfilePicture(
    userId: string,
    profilePicture: string,
  ): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(userId, { profilePicture }, { new: true })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }

    return updatedUser;
  }

  // Update a user's general information (e.g., admin functions)
  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const updatedUser = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, {
        new: true,
      })
      .exec();

    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return updatedUser;
  }

  // Delete a user
  async deleteUser(id: string): Promise<void> {
    const user = await this.userModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    await this.userModel.findByIdAndDelete(id).exec();
  }
}
