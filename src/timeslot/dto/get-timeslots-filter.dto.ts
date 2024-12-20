import { IsEnum, IsOptional, IsString } from 'class-validator';
import { DayOfWeek } from '../day-of-week.enum';

export class GetTimeslotsFilterDto {
  @IsOptional()
  @IsEnum(DayOfWeek)
  day?: DayOfWeek;

  @IsOptional()
  @IsString()
  search?: string;
}
