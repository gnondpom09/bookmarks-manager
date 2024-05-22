import mongoose from 'mongoose';
import bookmarkSchema from '../bookmark.model';
import Video from './video.interface';

const { Schema } = mongoose;

const videoSchema = new Schema({
  ...bookmarkSchema.obj,
  width: Number,
  height: Number,
  duration: Number,
  source: String,
  description: String,
});

const VideoModel = mongoose.model<Video>('LinkVideo', videoSchema);
export default VideoModel;
