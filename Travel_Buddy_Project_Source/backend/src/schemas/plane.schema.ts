import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Plane extends Document {
  @ApiProperty({
    example: '60f7f5c8b546ab001c8b4567',
    description: 'The unique ID of the plane',
  })
  _id: Types.ObjectId;

  @Prop({ required: true })
  @ApiProperty({ example: 'Boeing 747', description: 'The name of the plane' })
  name: string;

  @Prop({ required: true })
  @ApiProperty({ example: 'B747', description: 'The code of the plane' })
  code: string;

  @Prop({ required: false })
  @ApiProperty({
    example: 'B747-8',
    description: 'The additional code of the plane',
    nullable: true,
  })
  additional_code: string;
}

export const PlaneSchema = SchemaFactory.createForClass(Plane);
