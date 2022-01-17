import { Sequelize } from 'sequelize-typescript';
import { EmailEntity } from './../entity/email';
import { KeyEntity } from './../entity/key';
import { EmailFailedEntity } from './../entity/email-failed';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: process.env.HOST,
        port: Number(process.env.PORT_BD),
        username: `${process.env.USERNAME_BD}`,
        password: `${process.env.PASSWORD}`,
        database: `${process.env.DATABASE}`,
      });
      sequelize.addModels([EmailEntity, KeyEntity, EmailFailedEntity]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
