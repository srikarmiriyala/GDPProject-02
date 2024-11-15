// import { Injectable, InternalServerErrorException } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
// import * as nodemailer from 'nodemailer';
// import { Twilio } from 'twilio';

// @Injectable()
// export class NotificationService {
//   private transporter: nodemailer.Transporter;
//   private twilioClient: Twilio;

//   constructor(private configService: ConfigService) {
//     // Initialize Nodemailer Transporter
//     // const smtpHost = this.configService.get<string>('SMTP_HOST');
//     // const smtpPort = this.configService.get<number>('SMTP_PORT');
//     // const smtpUser = this.configService.get<string>('SMTP_USER');
//     // const smtpPass = this.configService.get<string>('SMTP_PASS');
//     // if (!smtpHost || !smtpPort || !smtpUser || !smtpPass) {
//     //   throw new Error('SMTP credentials are missing or invalid');
//     // }
//     // this.transporter = nodemailer.createTransport({
//     //   host: smtpHost,
//     //   port: smtpPort,
//     //   secure: false, // You might want to set this to `true` for production if your server requires TLS
//     //   auth: {
//     //     user: smtpUser,
//     //     pass: smtpPass,
//     //   },
//     // });
//     // Initialize Twilio Client
//     // const twilioSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
//     // const twilioAuthToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
//     // const twilioPhoneNumber = this.configService.get<string>(
//     //   'TWILIO_PHONE_NUMBER',
//     // );
//     // if (!twilioSid || !twilioAuthToken || !twilioPhoneNumber) {
//     //   throw new Error('Twilio credentials are missing or invalid');
//     // }
//     // this.twilioClient = new Twilio(twilioSid, twilioAuthToken);
//   }

//   // Send email using Nodemailer
//   async sendEmail(to: string, subject: string, text: string, html?: string) {
//     try {
//       const mailOptions = {
//         from: this.configService.get<string>('SMTP_USER'), // Ensure this is properly set in .env
//         to,
//         subject,
//         text,
//         html,
//       };

//       await this.transporter.sendMail(mailOptions);
//       console.log('Email sent successfully');
//     } catch (error) {
//       console.error('Error sending email:', error.message);
//       throw new InternalServerErrorException('Failed to send email');
//     }
//   }

//   // Send SMS using Twilio
//   async sendSms(to: string, body: string) {
//     try {
//       const from = this.configService.get<string>('TWILIO_PHONE_NUMBER');
//       await this.twilioClient.messages.create({
//         body,
//         from, // Make sure the "from" number is a verified Twilio phone number
//         to,
//       });
//       console.log('SMS sent successfully');
//     } catch (error) {
//       console.error('Error sending SMS:', error.message);
//       throw new InternalServerErrorException('Failed to send SMS');
//     }
//   }

//   // Send booking confirmation email
//   async sendBookingConfirmationEmail(userEmail: string, bookingDetails: any) {
//     const subject = 'Booking Confirmation';
//     const text = `Your booking is confirmed. Booking details: ${JSON.stringify(bookingDetails, null, 2)}`;
//     await this.sendEmail(userEmail, subject, text);
//   }

//   // Send booking confirmation SMS
//   async sendBookingConfirmationSms(userPhone: string, bookingDetails: any) {
//     const body = `Your booking is confirmed. Booking details: ${JSON.stringify(bookingDetails, null, 2)}`;
//     await this.sendSms(userPhone, body);
//   }

//   // Additional methods for other types of notifications can be added here
// }

import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { Twilio } from 'twilio';

@Injectable()
export class NotificationService {
  private transporter: nodemailer.Transporter;
  private twilioClient: Twilio;

  constructor(private configService: ConfigService) {
    // Initialize Nodemailer Transporter if SMTP configuration is available
    // const smtpHost = this.configService.get<string>('SMTP_HOST');
    // const smtpPort = this.configService.get<number>('SMTP_PORT');
    // const smtpUser = this.configService.get<string>('SMTP_USER');
    // const smtpPass = this.configService.get<string>('SMTP_PASS');
    // if (smtpHost && smtpPort && smtpUser && smtpPass) {
    //   this.transporter = nodemailer.createTransport({
    //     host: smtpHost,
    //     port: smtpPort,
    //     secure: false, // Set to true for TLS
    //     auth: {
    //       user: smtpUser,
    //       pass: smtpPass,
    //     },
    //   });
    // } else {
    //   console.warn(
    //     'SMTP configuration is missing. Email notifications will not be sent.',
    //   );
    // }
    // Initialize Twilio Client if Twilio configuration is available
    // const twilioSid = this.configService.get<string>('TWILIO_ACCOUNT_SID');
    // const twilioAuthToken = this.configService.get<string>('TWILIO_AUTH_TOKEN');
    // const twilioPhoneNumber = this.configService.get<string>(
    //   'TWILIO_PHONE_NUMBER',
    // );
    // if (twilioSid && twilioAuthToken && twilioPhoneNumber) {
    //   this.twilioClient = new Twilio(twilioSid, twilioAuthToken);
    // } else {
    //   console.warn(
    //     'Twilio configuration is missing. SMS notifications will not be sent.',
    //   );
    // }
  }

  // Send email using Nodemailer
  // async sendEmail(to: string, subject: string, text: string, html?: string) {
  //   if (!this.transporter) {
  //     throw new InternalServerErrorException(
  //       'Email service is not configured.',
  //     );
  //   }

  //   try {
  //     const mailOptions = {
  //       from: this.configService.get<string>('SMTP_USER'),
  //       to,
  //       subject,
  //       text,
  //       html,
  //     };

  //     await this.transporter.sendMail(mailOptions);
  //     console.log('Email sent successfully');
  //   } catch (error) {
  //     console.error('Error sending email:', error.message);
  //     throw new InternalServerErrorException('Failed to send email');
  //   }
  // }

  // Send SMS using Twilio
  // async sendSms(to: string, body: string) {
  //   if (!this.twilioClient) {
  //     throw new InternalServerErrorException('SMS service is not configured.');
  //   }

  //   try {
  //     const from = this.configService.get<string>('TWILIO_PHONE_NUMBER');
  //     await this.twilioClient.messages.create({
  //       body,
  //       from,
  //       to,
  //     });
  //     console.log('SMS sent successfully');
  //   } catch (error) {
  //     console.error('Error sending SMS:', error.message);
  //     throw new InternalServerErrorException('Failed to send SMS');
  //   }
  // }

  // // Send booking confirmation email
  // async sendBookingConfirmationEmail(userEmail: string, bookingDetails: any) {
  //   const subject = 'Booking Confirmation';
  //   const text = `Your booking is confirmed. Booking details: ${JSON.stringify(bookingDetails, null, 2)}`;
  //   await this.sendEmail(userEmail, subject, text);
  // }

  // // Send booking confirmation SMS
  // async sendBookingConfirmationSms(userPhone: string, bookingDetails: any) {
  //   const body = `Your booking is confirmed. Booking details: ${JSON.stringify(bookingDetails, null, 2)}`;
  //   await this.sendSms(userPhone, body);
  // }

  // Additional methods for other types of notifications can be added here
}
