import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// configuring the paths can be done using decorators @controller and @Get
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
