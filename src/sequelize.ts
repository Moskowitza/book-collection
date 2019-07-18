import { Sequelize } from 'sequelize-typescript';
import { Op } from 'sequelize';

export const sequelize = new Sequelize({
  database: 'movies',
  dialect: 'postgres',
  host: '/Users/macPRO/Library/Application Support/Postgres/var-12',
  models: [__dirname + '/models'],
  operatorsAliases: Op,
  storage: ':memory:',
});
