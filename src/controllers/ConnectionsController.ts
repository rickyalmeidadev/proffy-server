import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
  async index(request: Request, response: Response): Promise<Response> {
    try {
      const [total] = await db('connections').count('* as total');

      return response.json(total);
    } catch (error) {
      return response.json({
        message: 'Error while getting total number of connections',
        error,
      });
    }
  }

  async create(request: Request, response: Response): Promise<Response> {
    const { user_id } = request.body;

    try {
      await db('connections').insert({ user_id });

      return response.status(201).send();
    } catch (error) {
      return response.json({
        message: 'Error while creating connections',
        error,
      });
    }
  }
}
