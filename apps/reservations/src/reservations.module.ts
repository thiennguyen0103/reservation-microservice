import { DatabaseModule } from '@app/common';
import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
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
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            singleLine: true,
          },
        },
      },
    }),
  ],
  controllers: [ReservationsController],
  providers: [ReservationsService, ReservationsRespository],
})
export class ReservationsModule {}
