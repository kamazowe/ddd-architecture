import { RouteProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import { BreakpointsObserver } from './breakpoints.observer';
export const BreakpointsObserverProvider: RouteProviders = [
  BreakpointsObserver,
];
