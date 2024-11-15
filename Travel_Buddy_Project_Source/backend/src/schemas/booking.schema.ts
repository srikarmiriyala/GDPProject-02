// booking.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema()
class Segment {
  @Prop({ type: Object, required: true })
  departure: {
    iataCode: string;
    terminal: string;
    at: Date;
  };

  @Prop({ type: Object, required: true })
  arrival: {
    iataCode: string;
    terminal: string;
    at: Date;
  };

  @Prop({ required: true })
  carrierCode: string;

  @Prop({ required: true })
  number: string;

  @Prop({ type: Object, required: true })
  aircraft: {
    code: string;
  };

  @Prop({ required: true })
  duration: string;

  @Prop({ required: true })
  id: string;

  @Prop({ type: Array })
  co2Emissions: Array<{
    weight: number;
    weightUnit: string;
    cabin: string;
  }>;
}

@Schema()
class Itinerary {
  @Prop({ type: [Segment], required: true })
  segments: Segment[];
}

@Schema()
class Price {
  @Prop({ required: true })
  currency: string;

  @Prop({ required: true })
  total: string;

  @Prop({ required: true })
  base: string;

  @Prop({ type: Array, default: [] })
  fees: Array<{
    amount: string;
    type: string;
  }>;

  @Prop({ required: false })
  grandTotal: string;

  @Prop({ required: false })
  billingCurrency: string;
}

@Schema()
class TravelerPricing {
  @Prop({ required: true })
  travelerId: string;

  @Prop({ required: true })
  fareOption: string;

  @Prop({ required: true })
  travelerType: string;

  @Prop({ type: Price, required: true })
  price: Price;

  @Prop({ type: Array })
  fareDetailsBySegment: Array<{
    segmentId: string;
    cabin: string;
    fareBasis: string;
    brandedFare: string;
    class: string;
    includedCheckedBags: {
      quantity: number;
    };
  }>;
}

@Schema()
class FlightOffer {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  source: string;

  @Prop()
  lastTicketingDate: Date;

  @Prop({ type: [Itinerary], required: true })
  itineraries: Itinerary[];

  @Prop({ type: Price, required: true })
  price: Price;

  @Prop({ type: [TravelerPricing] })
  travelerPricings: TravelerPricing[];
}

@Schema()
class Contact {
  @Prop({ required: true })
  purpose: string;

  @Prop({ type: Array })
  phones: Array<{
    deviceType: string;
    countryCallingCode: string;
    number: string;
  }>;

  @Prop({ required: true })
  emailAddress: string;
}

@Schema()
class DocumentDetails {
  @Prop({ required: true })
  number: string;

  @Prop({ required: true })
  expiryDate: Date;

  @Prop({ required: true })
  issuanceCountry: string;

  @Prop({ required: true })
  nationality: string;

  @Prop({ required: true })
  documentType: string;

  @Prop({ required: true })
  holder: boolean;
}

@Schema()
class Traveler {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  dateOfBirth: Date;

  @Prop({ required: true })
  gender: string;

  @Prop({ type: Object, required: true })
  name: {
    firstName: string;
    lastName: string;
  };

  @Prop({ type: [DocumentDetails] })
  documents: DocumentDetails[];

  @Prop({ type: Contact, required: true })
  contact: Contact;
}

@Schema()
class AssociatedRecord {
  @Prop({ required: true })
  reference: string;

  @Prop({ required: true })
  creationDate: Date;

  @Prop({ required: true })
  originSystemCode: string;

  @Prop({ required: true })
  flightOfferId: string;
}

@Schema()
class AutomatedProcess {
  @Prop({ required: true })
  code: string;

  @Prop({ type: Object })
  queue: {
    number: string;
    category: string;
  };

  @Prop({ required: true })
  officeId: string;
}

@Schema()
class TicketingAgreement {
  @Prop({ required: true })
  option: string;
}

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class Booking extends Document {
  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  queuingOfficeId: string;

  @Prop({ required: false })
  paymentId: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId; // Added userId field with reference to User model

  @Prop({ type: [AssociatedRecord], required: true })
  associatedRecords: AssociatedRecord[];

  @Prop({ type: [FlightOffer], required: true })
  flightOffers: FlightOffer[];

  @Prop({ type: [Traveler], required: true })
  travelers: Traveler[];

  @Prop({ type: TicketingAgreement, required: true })
  ticketingAgreement: TicketingAgreement;

  @Prop({ type: [AutomatedProcess], required: true })
  automatedProcess: AutomatedProcess[];

  @Prop({ required: false })
  bookingDate: Date;
}

export const BookingSchema = SchemaFactory.createForClass(Booking);
