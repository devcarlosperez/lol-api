import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Champion } from './entities/champion.entity';
import { CreateChampionDto } from './dto/create-champion.dto';
import { UpdateChampionDto } from './dto/update-champion.dto';

@Injectable()
export class ChampionsService {
  constructor(
    @InjectModel(Champion)
    private championModel: typeof Champion,
  ) {}

  create(createChampionDto: CreateChampionDto) {
    return this.championModel.create(createChampionDto as any);
  }

  findAll() {
    return this.championModel.findAll();
  }

  findOne(id: number) {
    return this.championModel.findByPk(id);
  }

  async update(id: number, updateChampionDto: UpdateChampionDto) {
    const champion = await this.championModel.findByPk(id);
    if (!champion) return null;
    return champion.update(updateChampionDto);
  }

  async remove(id: number) {
    const champion = await this.championModel.findByPk(id);
    if (!champion) return null;
    await champion.destroy();
    return champion;
  }
}