import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KeyIntegrationService } from './key-integration.service';
import { CreateKeyIntegrationDto } from './dto/create-key-integration.dto';
import { UpdateKeyIntegrationDto } from './dto/update-key-integration.dto';

@Controller('key-integration')
export class KeyIntegrationController {
  constructor(private readonly keyIntegrationService: KeyIntegrationService) {}

  @Get('/generate')
  async generateKey() {
    return await this.keyIntegrationService.generateKey();
  }

  @Get('/validate-key/:id')
  async findOne(@Param('id') id: string) {
    return await this.keyIntegrationService.findOne(id);
  }

}
