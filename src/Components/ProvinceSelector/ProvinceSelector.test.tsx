import ProvinceSelector from './ProvinceSelector';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Province } from '../../Services/GeoLocality.interfaces';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
describe('test', () => {
    it('test', () => {
        const provinces:Province[] = [{
            id: 1,
            locations: ["san telmo", "caballito"],
            name: "Buenos aires"
        }]
        const selectProvince= jest.fn();
        render(<ProvinceSelector provinceNames={provinces} selectProvince={selectProvince} />)

        const dropdown = screen.getByText(/Buenos Aires/i) 
    })
})