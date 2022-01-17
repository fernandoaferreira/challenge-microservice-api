import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateKeyIntegrationDto } from './dto/create-key-integration.dto';
import { UpdateKeyIntegrationDto } from './dto/update-key-integration.dto';
import * as crypto from 'crypto';
import { KeyEntity } from '../../entity/key';

@Injectable()
export class KeyIntegrationService {
  constructor(
    @Inject('KEY')
    private keyRepository: typeof KeyEntity,
  ) {}

  async generateKey() {
    const key = await crypto.randomBytes(32).toString('hex');
    const keyGenerate = await this.keyRepository.create({ key: key });
    return { keyIntegration: keyGenerate.key };
  }

  async findOne(id: string) {
    const key = await this.keyRepository.findOne({ where: { key: id } });
    if (!key) {
      throw new HttpException('Key invalid!', HttpStatus.UNAUTHORIZED);
    } {
      return { key: key.key, status: "Success"}
    }
  }
}
