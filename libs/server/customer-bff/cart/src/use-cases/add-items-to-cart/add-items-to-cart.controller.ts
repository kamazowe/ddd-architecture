import { Controller, Inject, Logger, Post } from '@nestjs/common';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';
import { BffMocks } from '@ddd-architecture/server/customer-bff/mocks/domain';
import { addItemListToCartMockConfig } from '@ddd-architecture/server/customer-bff/mocks/application';
import { ConfigType } from '@nestjs/config';
import { addItemListToCartUrl } from '@ddd-architecture/shared/contracts';

@Controller(addItemListToCartUrl)
export class AddItemsToCartController {
  private readonly logger: Logger = new Logger(AddItemsToCartController.name);

  constructor(
    @Inject(CONFIG_ENV.KEY)
    private configService: ConfigType<typeof CONFIG_ENV>
  ) {}

  @Post()
  @BffMocks(addItemListToCartMockConfig)
  getData(): void {
    return addItemListToCartMockConfig.mock().value;
  }
}
