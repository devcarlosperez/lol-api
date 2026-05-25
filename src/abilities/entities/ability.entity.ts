import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Champion } from '../../champions/entities/champion.entity';

@Table
export class Ability extends Model {
  @Column
  name!: string;

  @Column
  description!: string;

  @Column
  type!: string;

  @ForeignKey(() => Champion)
  @Column
  championId!: number;

  @BelongsTo(() => Champion)
  champion!: Champion;
}