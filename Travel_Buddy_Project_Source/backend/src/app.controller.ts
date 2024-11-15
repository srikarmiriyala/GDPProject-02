// import { Controller, Get } from '@nestjs/common';
// import { ApiTags, ApiOperation } from '@nestjs/swagger';
// import { AppService } from './app.service';

// @ApiTags('App')
// @Controller()
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   @ApiOperation({ summary: 'Health check' })
//   getHello(): string {
//     return this.appService.getHello();
//   }
// }

import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  @ApiOperation({ summary: 'Health check to verify service is running' })
  @ApiResponse({
    status: 200,
    description: 'Service is healthy and running',
  })
  getHealthCheck(): { message: string; timestamp: Date } {
    return this.appService.getHealthCheck();
  }
}
