import { Controller, Inject, Logger, Post } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import {
  addItemListToCartMockConfig,
  removeItemListToCartMockConfig,
} from '@ddd-architecture/server/customer-bff/mocks/application';
import { ConfigType } from '@nestjs/config';
import { removeItemListToCartUrl } from '@ddd-architecture/shared/contracts';

@Controller(removeItemListToCartUrl)
export class RemoveItemsToCartController {
  private readonly logger: Logger = new Logger(
    RemoveItemsToCartController.name
  );

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Post()
  @BffMocks(removeItemListToCartMockConfig)
  getData(): void {
    return removeItemListToCartMockConfig.mock().value;
  }
}
