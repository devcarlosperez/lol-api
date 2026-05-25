import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ChampionsController } from './champions.controller';
import { ChampionsService } from './champions.service';
import { Champion } from './entities/champion.entity';

@Module({
  imports: [SequelizeModule.forFeature([Champion])],
  controllers: [ChampionsController],
  providers: [ChampionsService],
})
export class ChampionsModule {}