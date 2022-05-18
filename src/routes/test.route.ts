import { Application, Request, Response } from 'express';

import PhotoController from '../controllers/photo.controller';
import VideoController from '../controllers/video.controller';

export default class TestRoutes {
  private videoController: VideoController = new VideoController();

  private photoController: PhotoController = new PhotoController();

  public route(app: Application) {
    /**
     * Test route to get data from external link photo
     */
    app.get('/api/test/photo', (req: Request, res: Response) => {
      this.photoController.getLinkData(req, res);
    });

    /**
     * Test route to get data from external link video
     */
    app.get('/api/test/video', (req: Request, res: Response) => {
      this.videoController.getLinkData(req, res);
    });
  }
}
