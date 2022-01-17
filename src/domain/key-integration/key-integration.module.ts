import { Module } from '@nestjs/common';
import { KeyIntegrationService } from './key-integration.service';
import { KeyIntegrationController } from './key-integration.controller';
import { keyProviders } from './key.provider'

@Module({
  controllers: [KeyIntegrationController],
  providers: [KeyIntegrationService, ...keyProviders]
})
export class KeyIntegrationModule {}
