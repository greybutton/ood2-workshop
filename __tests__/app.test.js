import ipgeobase from '../src/ipgeobase';

describe('ipgeobase', () => {
  test('region', async () => {
    const ip = '188.168.152.50';
    const { region } = await ipgeobase(ip);
    const expected = 'IRK';
    expect(region).toBe(expected);
  });
});
