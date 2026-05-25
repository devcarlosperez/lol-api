import { Column, Model, Table, HasMany } from 'sequelize-typescript';
import { Ability } from '../../abilities/entities/ability.entity';

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

  @HasMany(() => Ability)
  abilities!: Ability[];
}