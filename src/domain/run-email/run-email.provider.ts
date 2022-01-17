import { EmailEntity } from '../../entity/email';
import { EmailFailedEntity } from '../../entity/email-failed';

export const emailProviders = [
  {
    provide: 'EMAIL',
    useValue: EmailEntity,
  },
  {
    provide: 'EMAIL-FAILED',
    useValue: EmailFailedEntity,
  },
];