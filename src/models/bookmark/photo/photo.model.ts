import mongoose from 'mongoose';
import bookmarkSchema from '../bookmark.model';
import Photo from './photo.interface';

const { Schema } = mongoose;

const photoSchema = new Schema({
  ...bookmarkSchema.obj,
  width: Number,
  height: Number,
});

const PhotoModel = mongoose.model<Photo>('LinkPhoto', photoSchema);
export default PhotoModel;
