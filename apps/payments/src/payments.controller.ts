import { CreateChargeDto } from '@app/common';
import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentsService } from './payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @MessagePattern('create_charge')
  async createCharge(@Payload() data: CreateChargeDto) {
    return this.paymentsService.createCharge(data);
  }

  @MessagePattern('create_customer')
  async createCustomer(@Payload() data: { email: string; name: string }) {
    return this.paymentsService.createCustomer(data.name, data.email);
  }
}
