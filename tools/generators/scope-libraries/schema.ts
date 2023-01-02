export interface Schema {
  scopePath: string;
  directory?: string;
  scopeTags?: string;

  appNames?: string;
  multipleApplicationsEnabled?: boolean;

  featureLibName?: string;
  sharedFeatureLibEnabled?: boolean;

  domainLibName?: string;
  sharedDomainLibEnabled?: boolean;

  apiLibName?: string;
  sharedApiLibEnabled?: boolean;

  dataAccessLibName?: string;
  sharedDataAccessLibEnabled?: boolean;

  uiLibName?: string;
  sharedUiLibEnabled?: boolean;
}
