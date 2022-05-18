import Bookmark from '../bookmark.interface';

export default interface Photo extends Bookmark {
  width: number;
  height: number;
}
