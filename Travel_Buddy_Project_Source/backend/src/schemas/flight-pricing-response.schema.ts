import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class FlightPricingResponse extends Document {
  @Prop({ type: Object, required: true })
  flightOffers: any[];

  @Prop({ type: Object, required: true })
  bookingRequirements: {
    emailAddressRequired: boolean;
    mobilePhoneNumberRequired: boolean;
  };

  @Prop({ type: Object })
  dictionaries: {
    locations: Record<string, any>;
  };
}

export const FlightPricingResponseSchema = SchemaFactory.createForClass(
  FlightPricingResponse,
);
