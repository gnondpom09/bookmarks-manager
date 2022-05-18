import { Application, Request, Response } from 'express';

import VideoController from '../controllers/video.controller';

const URL_VIDEOS = '/api/videos';

export default class VideokRoutes {
  private videoController: VideoController = new VideoController();

  public route(app: Application) {
    app.get(URL_VIDEOS, (req: Request, res: Response) => {
      this.videoController.getVideos(req, res);
    });

    app.get(`${URL_VIDEOS}/:id`, (req: Request, res: Response) => {
      this.videoController.getVideoById(req, res);
    });

    app.post(URL_VIDEOS, (req: Request, res: Response) => {
      this.videoController.addBookmarkVideo(req, res);
    });

    app.put(`${URL_VIDEOS}/:id`, (req: Request, res: Response) => {
      this.videoController.updateVideo(req, res);
    });

    app.delete(`${URL_VIDEOS}/:id`, (req: Request, res: Response) => {
      this.videoController.deleteVideo(req, res);
    });
  }
}
