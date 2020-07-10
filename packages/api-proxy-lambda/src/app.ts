import fastify from 'fastify';

const app = fastify();
app.get('/', (request, reply) => {
  reply.send({ hello: 'world' });
});

if (process.env.NODE_ENV === 'TEST') {
  app.listen(3000, (err) => {
    if (err) console.error(err);
    console.log('server listening on 3000');
  });
}

export default app;
