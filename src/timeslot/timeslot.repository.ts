import { DataSource, Repository } from 'typeorm';
import { Timeslot } from './timeslot.entity';
import { Injectable } from '@nestjs/common';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { DayOfWeek } from './day-of-week.enum';
import { GetTimeslotsFilterDto } from './dto/get-timeslots-filter.dto';

@Injectable()
export class TimeslotRepository extends Repository<Timeslot> {
  constructor(private dataSource: DataSource) {
    super(Timeslot, dataSource.createEntityManager());
  }

  getTasks(filterDto: GetTimeslotsFilterDto): Promise<Timeslot[]> {
    const { day, search } = filterDto;
    const query = this.createQueryBuilder('timeslot');

    if (day) {
      query.andWhere('timeslot.day = :day', { day: DayOfWeek[day] });
    }

    if (search) {
      query.andWhere('(LOWER(timeslot.title) LIKE LOWER(:search))', {
        search: `%${search}%`,
      });
    }

    return query.getMany();
  }

  async createTimeslot(
    createTimeslotDto: CreateTimeslotDto,
  ): Promise<Timeslot> {
    const { title, start_time, end_time, day } = createTimeslotDto;

    const timeslot = this.create({
      title,
      start_time,
      end_time,
      day: DayOfWeek[day as unknown as keyof typeof DayOfWeek],
    });

    await this.save(timeslot);
    return timeslot;
  }
}
