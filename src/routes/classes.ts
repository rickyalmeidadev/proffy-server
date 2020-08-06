import { Router } from 'express';
import ClassesController from '../controllers/ClassesController';

const routes = Router();

const { index, create } = new ClassesController();

routes.get('/', index);
routes.post('/', create);

export default routes;
