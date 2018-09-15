import ipgeobase from '../src/ipgeobase';

describe('ipgeobase', () => {
  test('region', async () => {
    const request = () => ({ region: 'IRK' });
    const { region } = await ipgeobase('188.168.152.50', request);
    const expected = 'IRK';
    expect(region).toBe(expected);
  });
});
