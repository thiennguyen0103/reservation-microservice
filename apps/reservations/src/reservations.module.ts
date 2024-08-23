import { DatabaseModule, LoggerModule } from '@app/common';
import { Module } from '@nestjs/common';

import {
  ReservationDocument,
  ReservationSchema,
} from './models/reservation.schema';
import { ReservationsController } from './reservations.controller';
import { ReservationsRespository } from './reservations.repository';
import { ReservationsService } from './reservations.service';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ReservationDocument.name, schema: ReservationSchema },
    ]),
    LoggerModule,
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRespository],
})
export class ReservationsModule {}
