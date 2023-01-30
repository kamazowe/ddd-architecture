import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CONFIG_ENV } from '@ddd-architecture/server/customer-bff/infrastructure/env';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [
        {
          provide: CONFIG_ENV.KEY,
          useValue: jest.fn()
        },
        AppService],
    }).compile();
  });

  describe('getData', () => {
    it('should return "Welcome to customer-bff!"', () => {
      const appController = app.get<AppController>(AppController);
      expect(appController.getData()).toEqual({
        message: 'Welcome to customer-bff!',
      });
    });
  });
});
