import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyIntegrationDto } from './create-key-integration.dto';

export class UpdateKeyIntegrationDto extends PartialType(CreateKeyIntegrationDto) {}
