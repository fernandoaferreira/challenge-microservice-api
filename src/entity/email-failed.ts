import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
export class EmailFailedEntity extends Model {
  @Column({ allowNull: false })
  email: string;
}
