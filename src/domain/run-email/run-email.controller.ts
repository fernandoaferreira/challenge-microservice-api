import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RunEmailService } from './run-email.service';
import { CreateRunEmailDto } from './dto/create-run-email.dto';

@Controller('run-email')
export class RunEmailController {
  constructor(private readonly runEmailService: RunEmailService) {}

  @Post()
  async create(@Body() createRunEmailDto: CreateRunEmailDto) {
    return await this.runEmailService.create(createRunEmailDto);
  }

  @Get()
  async findAll() {
    return await this.runEmailService.findAll();
  }

  @Get('/failed')
  async findAllFailed() {
    return await this.runEmailService.findEmailFailed();
  }

  @Get('/start-send')
  async startSend() {
    return await this.runEmailService.startSend();
  }
}
