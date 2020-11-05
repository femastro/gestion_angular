import { Router } from 'express';
import { getUsers, createUser, getUser, updateUser, deleteUser } from './../controllers/user.controllers';

const router = Router();

router.get('/tire/', getUsers)

router.get('/tire/:id', getUser);

router.post('/tire', createUser);

router.put('/tire/:id', updateUser);

router.delete('/tire/:id', deleteUser);

export default router
