import { extract } from 'oembed-parser';

export default class UtilsService {
  /**
   * Extract data from external link
   * @param url url link from Vimeo or Flirk
   * @returns data from external link
   */
  public async getOembed(url: string) {
    try {
      const oembed = await extract(url);
      return oembed;
    } catch {
      return null;
    }
  }
}
