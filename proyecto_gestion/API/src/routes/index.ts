import { Router } from 'express';
import auth from './auth';
import product from './product';

const routes = Router();

routes.use('/auth', auth);
routes.use('/prod', product);

export default routes;