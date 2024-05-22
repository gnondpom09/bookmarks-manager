import Bookmark from '../bookmark.interface';

export default interface Video extends Bookmark {
  width: number;
  height: number;
  duration: number;
  source: string;
  description;
}
