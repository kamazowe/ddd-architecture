import { Module } from '@nestjs/common';
import { GetPartListController } from './use-cases/get-part-list/get-part-list.controller';
import { GetPartDetailsController } from './use-cases/get-part-details/get-part-details.controller';
import { GetPartAvailabilityListController } from './use-cases/get-part-availability-list/get-part-availability-list.controller';
import { GetPartPriceListController } from './use-cases/get-part-price-list/get-part-price-list.controller';

@Module({
  controllers: [
    GetPartListController,
    GetPartDetailsController,
    GetPartAvailabilityListController,
    GetPartPriceListController,
  ],
})
export class ServerCustomerBffPartModule {}
