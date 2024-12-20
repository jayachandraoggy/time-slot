import { Module } from '@nestjs/common';
import { TimeslotController } from './timeslot.controller';
import { TimeslotService } from './timeslot.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Timeslot } from './timeslot.entity';
import { TimeslotRepository } from './timeslot.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Timeslot])],
  controllers: [TimeslotController],
  providers: [TimeslotService, TimeslotRepository],
})
export class TimeslotModule {}
