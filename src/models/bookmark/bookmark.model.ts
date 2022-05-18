import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookmarkSchema = new Schema({
  url: String,
  title: String,
  author: String,
  creationDate: { type: Date, default: Date.now },
  publishDate: { type: Date, default: Date.now },
  thumbnail: String,
  type: String,
});

export default bookmarkSchema;
