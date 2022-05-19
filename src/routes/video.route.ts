import { Application, Request, Response } from 'express';

import VideoController from '../controllers/video.controller';

const URL_VIDEOS = '/api/videos';

export default class VideokRoutes {
  private videoController: VideoController = new VideoController();

  /**
   * Routes management for video links
   * @param app application
   */
  public route(app: Application) {
    /**
     * Route to get video links
     */
    app.get(URL_VIDEOS, (req: Request, res: Response) => {
      this.videoController.getVideos(req, res);
    });

    /**
     * Route to get on video link
     */
    app.get(`${URL_VIDEOS}/:id`, (req: Request, res: Response) => {
      this.videoController.getVideoById(req, res);
    });

    /**
     * Route to post video link
     */
    app.post(URL_VIDEOS, (req: Request, res: Response) => {
      this.videoController.addBookmarkVideo(req, res);
    });

    /**
     * Route to update video link
     */
    app.put(`${URL_VIDEOS}/:id`, (req: Request, res: Response) => {
      this.videoController.updateVideo(req, res);
    });

    /**
     * Route to delete video link
     */
    app.delete(`${URL_VIDEOS}/:id`, (req: Request, res: Response) => {
      this.videoController.deleteVideo(req, res);
    });
  }
}
