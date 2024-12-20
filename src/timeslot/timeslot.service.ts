import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { Timeslot } from './timeslot.entity';
import { GetTimeslotsFilterDto } from './dto/get-timeslots-filter.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TimeslotRepository } from './timeslot.repository';

@Injectable()
export class TimeslotService {
  constructor(
    @InjectRepository(TimeslotRepository)
    private timeslotRepository: TimeslotRepository,
  ) {}

  getTimeslots(filterDto: GetTimeslotsFilterDto): Promise<Timeslot[]> {
    return this.timeslotRepository.getTasks(filterDto);
  }

  async getTimeslotById(id: string): Promise<Timeslot> {
    const timeslot = await this.timeslotRepository.findOne({ where: { id } });
    if (!timeslot) {
      throw new NotFoundException(`Timeslot with ID "${id}" not found`);
    }

    return timeslot;
  }

  createTimeslot(createTimeslotDto: CreateTimeslotDto): Promise<Timeslot> {
    return this.timeslotRepository.createTimeslot(createTimeslotDto);
  }

  async deleteTimeslot(id: string): Promise<void> {
    const result = await this.timeslotRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Timeslot with ID "${id}" not found`);
    }
  }

  async updateTimeslotStartTime(
    id: string,
    start_time: string,
  ): Promise<Timeslot> {
    const timeslot = await this.getTimeslotById(id);
    timeslot.start_time = start_time;
    await this.timeslotRepository.save(timeslot);

    return timeslot;
  }
}
