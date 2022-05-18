import Photo from '../models/bookmark/photo/photo.interface';
import PhotoModel from '../models/bookmark/photo/photo.model';

export default class PhotoService {
  /**
   * Save bookmark type photo
   * @param bookmark bookmark to save
   */
  async savePhoto(bookmark: Photo) {
    const newBookmark = await PhotoModel.create(bookmark);
    return newBookmark.save();
  }

  /**
   * Get all photos
   * @returns all bookmarks type photo
   */
  getPhotos() {
    return PhotoModel.find();
  }

  /**
   * Get photo by Id
   * @param params id of bookmark
   * @returns bookmark selected
   */
  getPhotoByParams(params: string) {
    return PhotoModel.findOne({ _id: params });
  }

  /**
   * Update bookmark type photo
   * @param bookmark bookmark
   * @returns bookmark updated
   */
  updatePhoto(bookmark: Photo) {
    const query = { _id: bookmark._id };
    return PhotoModel.findOneAndUpdate(query, bookmark);
  }

  /**
   * Delete bookmark
   * @param id id of bookmark
   */
  deletePhoto(id: string) {
    const query = { _id: id };
    return PhotoModel.deleteOne(query);
  }
}
