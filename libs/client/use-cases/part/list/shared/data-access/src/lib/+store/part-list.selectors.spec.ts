import * as fromPartList from './part-list.reducer';
import { selectPartListState } from './part-list.selectors';

describe('PartList Selectors', () => {
  it('should select the feature state', () => {
    const result = selectPartListState({
      [fromPartList.partListFeatureKey]: {},
    });

    expect(result).toEqual({});
  });
});
