// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class AppService {
//   getHello(): string {
//     return 'Hello World! Flight Booking System is Running';
//   }
// }

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealthCheck(): { message: string; timestamp: Date } {
    return {
      message: 'Hola! Flight Booking System is up and running!',
      timestamp: new Date(),
    };
  }
}
