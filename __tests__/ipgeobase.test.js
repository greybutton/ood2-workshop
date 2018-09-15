import ipgeobase from '../src/ipgeobase';

describe('ipgeobase', () => {
  test('region', async () => {
    const response = () => ({ status: 200, data: { region: 'IRK' } });
    const { region } = await ipgeobase('188.168.152.50', response);
    const expected = 'IRK';
    expect(region).toBe(expected);
  });
});
