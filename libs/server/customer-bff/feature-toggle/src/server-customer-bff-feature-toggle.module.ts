import { Module } from '@nestjs/common';
import { GetFeatureTogglesController } from './use-cases/get-feature-toggles/get-feature-toggles.controller';

@Module({
  controllers: [GetFeatureTogglesController],
})
export class ServerCustomerBffFeatureToggleModule {}
