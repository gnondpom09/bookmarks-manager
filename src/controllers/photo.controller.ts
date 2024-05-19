import { Request, Response, Router } from 'express';

import Photo from '../models/bookmark/photo/photo.interface';

import PhotoService from '../services/photo.service';
import UtilsService from '../services/utils.service';

export default class PhotoController {
  public router = Router();

  private photoService: PhotoService = new PhotoService();

  private utilsService: UtilsService = new UtilsService();

  /**
   * Test get data from external link for photo
   * @param req request
   * @param res response
   */
  public async getLinkData(req: Request, res: Response) {
    const data: any = await this.utilsService.getOembed(
      'https://www.flickr.com/photos/feuilllu/45771361701/'
    );
    res.status(200).send(data);
  }

  /**
   * Add new bookmark type photo
   * @param req request
   * @param res response
   */
  public async addBookmarkPhoto(req: Request, res: Response) {
    const link: string = req.body?.url || '';
    const data: any = await this.utilsService.getOembed(link);

    if (!data)
      res
        .status(404)
        .send({ error: 'Error to extract data from external link!' });

    try {
      const linkPhoto: Photo = {
        type: data.type,
        title: data.title,
        author: data.author_name,
        url: data.url,
        creationDate: new Date(),
        publishDate: new Date(),
        thumbnail: data.thumbnail_url,
        width: data.width,
        height: data.height,
      };
      const bookmark: Photo = await this.photoService.savePhoto(linkPhoto);
      res.status(201).send({ bookmark });
    } catch {
      res.status(404).send({ error: 'bookmark not saved!' });
    }
  }

  /**
   * Get all bookmarks type photo
   * @param req request
   * @param res response
   */
  public async getPhotos(req: Request, res: Response): Promise<Photo[]> {
    try {
      const bookmarks: Photo[] = await this.photoService.getPhotos();
      res.status(200).send(bookmarks);
      return bookmarks;
    } catch {
      res.status(404).send({ error: "bookmarks doesn't exist!" });
      return [];
    }
  }

  /**
   * Get bookmark type photo by Id
   * @param req request
   * @param res response
   */
  public async getPhotoById(req: Request, res: Response) {
    try {
      if (req.params) {
        const { id } = req.params;
        const bookmark: Photo | null = await this.photoService.getPhotoByParams(
          id
        );
        res
          .status(200)
          .send({ data: bookmark, message: 'Get request successfull' });
      } else {
        res.status(400).send({ error: true, message: 'Missing params' });
      }
    } catch {
      res.status(404).send({ error: "bookmark doesn't exist!" });
    }
  }

  /**
   * Update bookmark type photo by Id
   * @param req request
   * @param res response
   */
  public async updatePhoto(req: Request, res: Response) {
    try {
      if (req.body) {
        const newBookmark: Photo | null = await this.photoService.updatePhoto(
          req.body
        );
        res.send(newBookmark);
      } else {
        res.status(400).send({ error: true, message: 'Missing body' });
      }
    } catch {
      res.status(404).send({ error: 'bookmark not updated!' });
    }
  }

  /**
   * Delete bookmark type photo by Id
   * @param req request
   * @param res response
   */
  public async deletePhoto(req: Request, res: Response) {
    try {
      if (req.params) {
        await this.photoService.deletePhoto(req.params.id);
        res.status(204).send();
      } else {
        res.status(400).send({ error: true, message: 'Missing params' });
      }
    } catch {
      res.status(404).send({ error: 'bookmark not deleted!' });
    }
  }
}
