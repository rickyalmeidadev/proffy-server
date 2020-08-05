import { Router } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionsController';

const routes = Router();

const { create, index } = new ClassesController();

routes.get('/classes', index);
routes.post('/classes', create);

export default routes;
