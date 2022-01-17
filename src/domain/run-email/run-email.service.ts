import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateRunEmailDto } from './dto/create-run-email.dto';
import { EmailEntity } from './../../entity/email';
import { NodeMailgun } from 'ts-mailgun';
import { EmailFailedEntity } from '../../entity/email-failed';

@Injectable()
export class RunEmailService {
  constructor(
    @Inject('EMAIL')
    private emailRepository: typeof EmailEntity,
    @Inject('EMAIL-FAILED')
    private emailFailedRepository: typeof EmailFailedEntity,
  ) {}

  async create(createRunEmailDto: CreateRunEmailDto) {
    return await this.emailRepository.create(createRunEmailDto);
  }

  async findAll() {
    return await this.emailRepository.findAll();
  }

  async startSend() {
    const allEmails = await this.emailRepository.findAll();
    if (allEmails.length) {
      for (const emailNow of allEmails) {
        await this.sendEmail(emailNow);
      }
    }
  }

  async sendEmail(emailCurrent: EmailEntity) {
    const mailGunKey = process.env.MG_API_KEY;
    const mailGunDomain = process.env.MG_DOMAIN;
    const mailer = new NodeMailgun(mailGunKey, mailGunDomain);

    mailer.fromEmail = emailCurrent.from;
    mailer.fromTitle = emailCurrent.subject;
    mailer.init();

    await mailer
      .send(emailCurrent.to, emailCurrent.subject, emailCurrent.text)
      .then((data) => {
        Logger.log(data);
      })
      .catch(async (error) => {
        await this.createEmailFailed(emailCurrent.to);
        Logger.error(error);
      });
  }

  async createEmailFailed(email: string) {
    await this.emailFailedRepository.create({ email: email });
  }

  async findEmailFailed() {
    const emails = await this.emailFailedRepository.findAll();
    return emails;
  }
}
