import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
export class KeyEntity extends Model {
  @Column({ allowNull: false })
  key: string;
}
