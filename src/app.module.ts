import { Module } from '@nestjs/common';
import { TimeslotModule } from './timeslot/timeslot.module';

@Module({
  imports: [TimeslotModule],
})
export class AppModule {}
