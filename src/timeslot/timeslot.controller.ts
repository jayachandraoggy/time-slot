import { Controller } from '@nestjs/common';
import { TimeslotService } from './timeslot.service';

@Controller('timeslot')
export class TimeslotController {
  constructor(private timeslotService: TimeslotService) {}
}
