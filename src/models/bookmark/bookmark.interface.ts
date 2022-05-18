export default interface Bookmark {
  _id?: string;
  url: string;
  title: string;
  author: string;
  creationDate: Date;
  publishDate: Date;
  thumbnail: string;
  type: string;
}
