import { Router } from 'express';
import ConnectionsController from '../controllers/ConnectionsController';

const routes = Router();

const { index, create } = new ConnectionsController();

routes.get('/', index);
routes.post('/', create);

export default routes;
