import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Route extends Document {
  @ApiProperty({
    example: '60f7f5c8b546ab001c8b4567',
    description: 'The unique identifier of the route',
  })
  _id: Types.ObjectId;

  @Prop({ required: true })
  @ApiProperty({ example: 'QR', description: 'Airline code (IATA or ICAO)' })
  airline_code: string;

  @Prop()
  @ApiProperty({
    example: 157,
    description: 'Airline ID associated with the route',
  })
  airline_id: number;

  @Prop({ required: true })
  @ApiProperty({ example: 'ATL', description: 'Source airport code (IATA)' })
  departure_airport: string;

  @Prop()
  @ApiProperty({ example: 347, description: 'Source airport ID' })
  departure_airport_id: number;

  @Prop({ required: true })
  @ApiProperty({
    example: 'DOH',
    description: 'Destination airport code (IATA)',
  })
  arrival_airport: string;

  @Prop()
  @ApiProperty({ example: 348, description: 'Destination airport ID' })
  arrival_airport_id: number;

  @Prop({ required: false })
  @ApiProperty({ example: 'Y', description: 'Codeshare status' })
  codeshare?: string;

  @Prop({ required: true })
  @ApiProperty({ example: 0, description: 'Number of stops in the route' })
  stops: number;

  @Prop({ required: false })
  @ApiProperty({ example: '747', description: 'Equipment used for the route' })
  equipment?: string;

  @Prop({ required: false })
  @ApiProperty({ example: 'QR157', description: 'Flight number' })
  flight_number?: string;
}

export const RouteSchema = SchemaFactory.createForClass(Route);
