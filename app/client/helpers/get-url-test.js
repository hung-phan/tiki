import { assert } from 'chai';
import getUrl from './get-url';

describe('Helper: getUrl', () => {
  it('should be defined', () => {
    assert.ok(getUrl);
  });

  it('should be a function', () => {
    assert.isFunction(getUrl);
  });

  it("should return url '/api/v1/products' in client environment", () => {
    process.env.RUNTIME_ENV = 'client';

    const url = '/api/v1/products';
    assert.equal(getUrl(url), url);
  });

  it(`should return url 'http://localhost:${process.env.PORT}/api/v1/products' in server environment`, () => {
    process.env.RUNTIME_ENV = 'server';

    const url = '/api/v1/products';
    assert.equal(getUrl(url), `http://localhost:${process.env.PORT}${url}`);
  });
});
