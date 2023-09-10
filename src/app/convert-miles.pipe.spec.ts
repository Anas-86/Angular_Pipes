import { convertMiles } from './convert-miles.pipe';

describe('ConvertMiles', () => {
  it('create an instance', () => {
    const pipe = new convertMiles();
    expect(pipe).toBeTruthy();
  });
});
