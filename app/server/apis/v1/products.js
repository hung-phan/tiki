import { products } from 'server/fake-database';

export default function (router) {
  router.get('/api/v1/products', (ctx) => {
    ctx.body = products;
  });
}
