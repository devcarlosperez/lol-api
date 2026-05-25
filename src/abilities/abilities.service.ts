import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Ability } from './entities/ability.entity';
import { CreateAbilityDto } from './dto/create-ability.dto';
import { UpdateAbilityDto } from './dto/update-ability.dto';
import { Champion } from '../champions/entities/champion.entity';

@Injectable()
export class AbilitiesService {
  constructor(
    @InjectModel(Ability)
    private abilityModel: typeof Ability,
  ) {}

  create(createAbilityDto: CreateAbilityDto) {
    return this.abilityModel.create(createAbilityDto as any);
  }

  findAll() {
    return this.abilityModel.findAll({ include: [Champion] });
  }

  findOne(id: number) {
    return this.abilityModel.findByPk(id, { include: [Champion] });
  }

  async update(id: number, updateAbilityDto: UpdateAbilityDto) {
    const ability = await this.abilityModel.findByPk(id);
    if (!ability) return null;
    return ability.update(updateAbilityDto);
  }

  async remove(id: number) {
    const ability = await this.abilityModel.findByPk(id);
    if (!ability) return null;
    await ability.destroy();
    return ability;
  }
}