import { Request, Response } from 'express';

const users = [
    { name: 'Filippo', email: 'filippoipp@hotmail.com'},
];

export default {
    async index(req: Request, res: Response) {
        return res.json(users);
    }
};