import { Router } from 'express';
import ClassesController from './controllers/ClassesController';

const routes = Router();

const { create } = new ClassesController();

routes.post('/classes', create);

export default routes;
