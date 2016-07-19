import faker from 'faker';

export default async (ctx, next) => {
  if (!ctx.cookies.get('tiki-authentication')) {
    const token = faker.random.uuid();
    ctx.cookies.set('tiki-authentication', token, { signed: true });
    ctx.tmpToken = token;
  }

  await next();

  // work around login problem
  ctx.tmpToken = undefined;
};
