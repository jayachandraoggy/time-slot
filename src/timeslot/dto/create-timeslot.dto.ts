import { IsEnum, IsNotEmpty } from 'class-validator';
import { DayOfWeek } from '../day-of-week.enum';

export class CreateTimeslotDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  start_time: string;

  @IsNotEmpty()
  end_time: string;

  @IsNotEmpty()
  @IsEnum(DayOfWeek)
  day: DayOfWeek;
}
