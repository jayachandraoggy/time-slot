import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DayOfWeek } from './day-of-week.enum';

@Entity()
export class Timeslot {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  start_time: string;

  @Column()
  end_time: string;

  @Column()
  day: DayOfWeek;
}
