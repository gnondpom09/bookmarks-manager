import { Application, Request, Response } from 'express';

import PhotoController from '../controllers/photo.controller';

const URL_PHOTOS = '/api/photos';

export default class BookmarkRoutes {
  private photoController: PhotoController = new PhotoController();

  public route(app: Application) {
    app.get(URL_PHOTOS, (req: Request, res: Response) => {
      this.photoController.getPhotos(req, res);
    });

    app.get(`${URL_PHOTOS}/:id`, (req: Request, res: Response) => {
      this.photoController.getPhotoById(req, res);
    });

    app.post(URL_PHOTOS, (req: Request, res: Response) => {
      this.photoController.addBookmarkPhoto(req, res);
    });

    app.put(`${URL_PHOTOS}/:id`, (req: Request, res: Response) => {
      this.photoController.updatePhoto(req, res);
    });

    app.delete(`${URL_PHOTOS}/:id`, (req: Request, res: Response) => {
      this.photoController.deletePhoto(req, res);
    });
  }
}
