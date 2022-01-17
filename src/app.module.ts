import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RunEmailModule } from './domain/run-email/run-email.module';
import { databaseProviders } from './providers/database.provider'
import { DatabaseModule } from './providers/database.module'
import { KeyIntegrationModule } from './domain/key-integration/key-integration.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    RunEmailModule,
    DatabaseModule,
    KeyIntegrationModule,
  ],
  exports: [...databaseProviders],
  providers: [...databaseProviders],
})
export class AppModule {}
