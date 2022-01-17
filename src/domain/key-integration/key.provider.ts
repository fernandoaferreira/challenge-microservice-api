import { KeyEntity } from '../../entity/key';

export const keyProviders = [
  {
    provide: 'KEY',
    useValue: KeyEntity,
  },
];