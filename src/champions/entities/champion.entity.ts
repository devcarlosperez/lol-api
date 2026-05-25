import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Champion extends Model {
  @Column
  name!: string;

  @Column
  role!: string;

  @Column
  difficulty!: number;

  @Column
  region!: string;
}
