import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { BrowserStorageService } from './browser-storage.service';

export const storageProviders: RouteProviders = [BrowserStorageService];
