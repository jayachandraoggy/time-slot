import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TimeslotService } from './timeslot.service';
import { CreateTimeslotDto } from './dto/create-timeslot.dto';
import { Timeslot } from './timeslot.entity';
import { GetTimeslotsFilterDto } from './dto/get-timeslots-filter.dto';
import { UpdateTimeslotStartTimeDto } from './dto/update-timeslot-start-time.dto';

@Controller('timeslot')
export class TimeslotController {
  constructor(private timeslotService: TimeslotService) {}

  @Get()
  getTimeslots(@Query() filterDto: GetTimeslotsFilterDto): Promise<Timeslot[]> {
    return this.timeslotService.getTimeslots(filterDto);
  }

  @Get('/:id')
  getTimeslotById(@Param('id') id: string): Promise<Timeslot> {
    return this.timeslotService.getTimeslotById(id);
  }

  @Post()
  createTimeslot(
    @Body() createTimeslotDto: CreateTimeslotDto,
  ): Promise<Timeslot> {
    return this.timeslotService.createTimeslot(createTimeslotDto);
  }

  @Delete('/:id')
  deleteTimeslot(@Param('id') id: string): Promise<void> {
    return this.timeslotService.deleteTimeslot(id);
  }

  @Patch('/:id/start-time')
  updateTimeslotStartTime(
    @Param('id') id: string,
    @Body() updateTimeslotStartTimeDto: UpdateTimeslotStartTimeDto,
  ): Promise<Timeslot> {
    const { start_time } = updateTimeslotStartTimeDto;
    return this.timeslotService.updateTimeslotStartTime(id, start_time);
  }
}
