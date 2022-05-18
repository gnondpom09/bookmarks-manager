import Video from '../models/bookmark/video/video.interface';
import VideoModel from '../models/bookmark/video/video.model';

export default class VideoService {
  /**
   * Save bookmark type video
   * @param bookmark bookmark to save
   */
  async saveVideo(bookmark: Video) {
    const newBookmark = await VideoModel.create(bookmark);
    return newBookmark.save();
  }

  /**
   * Get all videos links
   * @returns all bookmarks type video
   */
  getVideos() {
    return VideoModel.find();
  }

  /**
   * Get video by Id
   * @param params id of bookmark
   * @returns bookmark selected
   */
  getVideoByParams(params: string) {
    return VideoModel.findOne({ _id: params });
  }

  /**
   * Update bookmark type video
   * @param bookmark bookmark
   * @returns bookmark updated
   */
  updateVideo(bookmark: Video) {
    const query = { _id: bookmark._id };
    return VideoModel.findOneAndUpdate(query, bookmark);
  }

  /**
   * Delete bookmark
   * @param id id of bookmark
   */
  deleteVideo(id: string) {
    const query = { _id: id };
    return VideoModel.deleteOne(query);
  }
}
