import { Controller, Get, Render } from '@nestjs/common';
import * as pkg from '../package.json';

@Controller()
export class AppController {
  @Get()
  @Render('hello')
  getHello() {
    return {
      name: 'world',
      version: pkg.version,
    };
  }
}
