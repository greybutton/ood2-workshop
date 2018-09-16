import IpGeobase from '../src/ipgeobase';

describe('ipgeobase', () => {
  test('ip-api.com', async () => {
    const http = () => ({ status: 200, data: { region: 'IRK' } });
    const ip = '188.168.152.50';
    const ipgeobase = new IpGeobase({ http });
    const result = await ipgeobase.getDataIp(ip);
    const expected = 'IRK';
    expect(result.region).toBe(expected);
  });
});
