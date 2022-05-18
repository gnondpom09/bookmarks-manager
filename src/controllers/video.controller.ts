import { Request, Response, Router } from 'express';

import Video from '../models/bookmark/video/video.interface';

import VideoService from '../services/video.service';
import UtilsService from '../services/utils.service';

export default class VideoController {
  public router = Router();

  private videoService: VideoService = new VideoService();

  private utilsService: UtilsService = new UtilsService();

  /**
   * Test get data from external link for video
   * @param req request
   * @param res response
   */
  public async getLinkData(req: Request, res: Response) {
    const data = await this.utilsService.getOembed(
      'https://vimeo.com/565486457'
    );
    res.status(200).send(data);
  }

  /**
   * Add new bookmark type video
   * @param req request
   * @param res response
   */
  public async addBookmarkVideo(req: Request, res: Response) {
    const link: string = req.body?.url || '';
    const data: any = await this.utilsService.getOembed(link);

    if (!data) res.status(404).send({ error: 'Error datas link!' });

    try {
      const linkVideo: Video = {
        type: data.type,
        title: data.title,
        author: data.author_name,
        url: data.url,
        creationDate: new Date(),
        publishDate: new Date(),
        thumbnail: data.thumbnail_url,
        width: data.width,
        height: data.height,
        duration: data.duration,
      };
      const bookmark: Video = await this.videoService.saveVideo(linkVideo);
      res.status(201).send({ bookmark });
    } catch {
      res.status(404).send({ error: 'bookmark not saved!' });
    }
  }

  /**
   * Get all bookmarks type video
   * @param req request
   * @param res response
   */
  public async getVideos(req: Request, res: Response) {
    try {
      const bookmarks = await this.videoService.getVideos();
      res.status(200).json(bookmarks);
    } catch {
      res.status(404).send({ error: "bookmarks doesn't exist!" });
    }
  }

  /**
   * Get bookmark type video by Id
   * @param req request
   * @param res response
   */
  public async getVideoById(req: Request, res: Response) {
    try {
      if (req.params) {
        const { id } = req.params;
        const bookmark = await this.videoService.getVideoByParams(id);
        res
          .status(200)
          .json({ data: bookmark, message: 'Get request successfull' });
      } else {
        res.status(400).send({ error: true, message: 'Missing params' });
      }
    } catch {
      res.status(404).send({ error: "bookmark doesn't exist!" });
    }
  }

  /**
   * Update bookmark type video
   * @param req request
   * @param res response
   */
  public async updateVideo(req: Request, res: Response) {
    try {
      if (req.body) {
        const newBookmark = req.body;
        const bookmark = await this.videoService.updateVideo(newBookmark);

        res.send(bookmark);
      } else {
        res.status(400).send({ error: true, message: 'Missing params' });
      }
    } catch {
      res.status(404).send({ error: 'bookmark not updated!' });
    }
  }

  /**
   * Delete bookmark type video
   * @param req request
   * @param res response
   */
  public async deleteVideo(req: Request, res: Response) {
    try {
      if (req.params) {
        await this.videoService.deleteVideo(req.params.id);
        res.status(204).send();
      } else {
        res.status(400).send({ error: true, message: 'Missing params' });
      }
    } catch {
      res.status(404).send({ error: 'bookmark not deleted!' });
    }
  }
}
