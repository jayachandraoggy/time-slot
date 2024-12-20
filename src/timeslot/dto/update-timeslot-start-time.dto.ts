import { IsString } from 'class-validator';

export class UpdateTimeslotStartTimeDto {
  @IsString()
  start_time: string;
}
