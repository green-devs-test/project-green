import searchFieldsSlice, { setProvince, setLocality, SearchFieldsState } from './searchFieldsSlice';

describe('searchFieldsSlice', () => {
  let initialState: SearchFieldsState;

  beforeEach(() => {
    initialState = {
      province: "",
      locality: "",
    };
  });

  it('should handle setProvince', () => {
    const actual = searchFieldsSlice(initialState, setProvince('Buenos Aires'));
    expect(actual.province).toEqual('Buenos Aires');
  });

  it('should handle setLocality', () => {
    const actual = searchFieldsSlice(initialState, setLocality('San Telmo'));
    expect(actual.locality).toEqual('San Telmo');
  });
});