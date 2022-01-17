import { Module } from '@nestjs/common';
import { RunEmailService } from './run-email.service';
import { RunEmailController } from './run-email.controller';
import { emailProviders } from './run-email.provider';

@Module({
  imports: [],
  controllers: [RunEmailController],
  providers: [RunEmailService, ...emailProviders],
})
export class RunEmailModule {}
