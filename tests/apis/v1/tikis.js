import supertest from 'supertest';
import app from 'app/server-app';

describe('API: v1/products', () => {
  const request = supertest(app.listen());

  it('should return json products when calling GET request', async () => {
    await request
            .get('/api/v1/products')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
  });
});
