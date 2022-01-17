import { Table, Column, Model, HasMany } from 'sequelize-typescript';

@Table
export class EmailEntity extends Model {
  @Column({ allowNull: false })
  from: string;

  @Column({ allowNull: false })
  to: string;

  @Column({ allowNull: false })
  subject: string;

  @Column({ allowNull: false })
  text: string;

}
