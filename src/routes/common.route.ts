import { Application, Request, Response } from 'express';

export default class CommonRoutes {
  /**
   * Routes management global
   * @param app application
   */
  public route(app: Application) {
    /**
     * Route not exists in api
     */
    app.all('*', (req: Request, res: Response) => {
      res.status(404).send({ error: true, message: 'Check your url' });
    });
  }
}
