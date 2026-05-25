import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AbilitiesController } from './abilities.controller';
import { AbilitiesService } from './abilities.service';
import { Ability } from './entities/ability.entity';

@Module({
  imports: [SequelizeModule.forFeature([Ability])],
  controllers: [AbilitiesController],
  providers: [AbilitiesService],
})
export class AbilitiesModule {}