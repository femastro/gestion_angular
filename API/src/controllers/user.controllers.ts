import { Request, Response } from 'express';
import { neumaticos } from '../entity/User';
import { getRepository } from 'typeorm';

export const getUsers = async (req:Request, res:Response): Promise<Response> => {
    try {
        const datos = await getRepository(neumaticos).find({ select: ['idneumaticos', 'marca', 'modelo', 'medida'] });
        return res.send(datos);
    } catch (error) {
        return res.status(404).json({ message: 'Somenthing goes wrong!' });
    }
};

export const getUser = async (req:Request, res:Response): Promise<Response> => {
    try {
        const idneumaticos = req.params.idneumaticos;
        const dato = await getRepository(neumaticos).findOneOrFail(idneumaticos, { select: ['idneumaticos', 'marca', 'modelo', 'medida'] });
        if (dato){
            return res.send([dato]);
            //return res.status(200).json({ user });
        }
        return res.status(404).json({ message: 'User Not Found !' });
    } catch (error) {
        return res.status(404).json({ message: 'Somenthing goes wrong!' });
    }
};

export const createUser = async (req:Request, res:Response): Promise<Response> => {
    try {
        const newDato = getRepository(neumaticos).create(req.body);
        await getRepository(neumaticos).save(newDato);
        return res.status(200).json({ message: 'User Created !' });
    } catch (error) {
        return res.status(404).json({ message: 'Somenthing goes wrong!, User Exist !' });
    }
};

export const updateUser = async (req:Request, res:Response): Promise<Response> => {
    const dato = await getRepository(neumaticos).findOne(req.params.id);
    if (dato){
        try {
            getRepository(neumaticos).merge(dato, req.body);
            const results = await getRepository(neumaticos).save(dato);
            return res.status(200).json({ message: 'User Update !' });
        } catch (error) {
            return res.status(404).json({ message: 'Somenthing goes wrong!' });
        }
    }
    return res.status(404).json({ message: 'User Not Found !' });
};

export const deleteUser = async (req:Request, res:Response): Promise<Response> => {
    try {
        const results = await getRepository(neumaticos).delete(req.params.id);
        if (results.affected){
            return res.status(200).json({ message: 'User Deleted !' });
        }
        return res.status(404).json({ message: 'User Not Found !' });
    } catch (error) {
        return res.status(404).json({ message: 'Somenthing goes wrong!' });
    }
};
