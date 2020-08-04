import { Router } from 'express';

const routes = Router();

routes.get('/', (request, response, next) => {
  response.json({ message: 'Hello, World!' });
});

export default routes;
