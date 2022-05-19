import { Application, Request, Response } from 'express';

import PhotoController from '../controllers/photo.controller';

const URL_PHOTOS = '/api/photos';

export default class BookmarkRoutes {
  private photoController: PhotoController = new PhotoController();

  /**
   * Routes management for photo links
   * @param app application
   */
  public route(app: Application) {
    /**
     * Route to get photo links list
     */
    app.get(URL_PHOTOS, (req: Request, res: Response) => {
      this.photoController.getPhotos(req, res);
    });

    /**
     * Route to get photo link
     */
    app.get(`${URL_PHOTOS}/:id`, (req: Request, res: Response) => {
      this.photoController.getPhotoById(req, res);
    });

    /**
     * Route to post new photo link
     */
    app.post(URL_PHOTOS, (req: Request, res: Response) => {
      this.photoController.addBookmarkPhoto(req, res);
    });

    /**
     * Route to update photo link
     */
    app.put(`${URL_PHOTOS}/:id`, (req: Request, res: Response) => {
      this.photoController.updatePhoto(req, res);
    });

    /**
     * Route to delete photo link
     */
    app.delete(`${URL_PHOTOS}/:id`, (req: Request, res: Response) => {
      this.photoController.deletePhoto(req, res);
    });
  }
}
