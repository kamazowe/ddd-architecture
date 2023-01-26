import { UseCaseProviders } from '@ddd-architecture/client/shared/infrastructure/utils';
import {
  PartListFeatureProvider,
  PartListFeatureService,
  PartListViewQuery,
} from '@ddd-architecture/client/use-cases/part/list/shared/feature';

export const partListUseCaseProviders: UseCaseProviders = [
  { provide: PartListFeatureProvider, useClass: PartListFeatureService },
  PartListViewQuery,
];
