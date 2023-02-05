import { Module } from '@nestjs/common';
import { GetCartController } from './use-cases/get-cart/get-cart.controller';
import { GetCartItemCountController } from './use-cases/get-cart-item-count/get-cart-item-count.controller';
import { AddItemsToCartController } from './use-cases/add-items-to-cart/add-items-to-cart.controller';
import { RemoveItemsToCartController } from './use-cases/remove-items-to-cart/remove-items-to-cart.controller';

@Module({
  controllers: [
    GetCartController,
    GetCartItemCountController,
    AddItemsToCartController,
    RemoveItemsToCartController,
  ],
})
export class ServerCustomerBffCartModule {}
