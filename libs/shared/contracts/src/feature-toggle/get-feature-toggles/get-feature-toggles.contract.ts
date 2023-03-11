export const getFeatureTogglestUrl = `feature-toggle`;

// response payload
export enum FeatureToggle {
  machine = 'machine',
  part = 'part',
}

export type GetFeatureTogglesResponsePayload = Record<FeatureToggle, boolean>;
