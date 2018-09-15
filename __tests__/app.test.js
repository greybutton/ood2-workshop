import app from '../src';

describe('app', () => {
  test('region', async () => {
    const ip = '188.168.152.50';
    const { region } = await app(ip);
    const expected = 'IRK';
    expect(region).toBe(expected);
  });
});
