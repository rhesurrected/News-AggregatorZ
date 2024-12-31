import { NewsListEntry } from "./types";
import {NewsListingAggregator} from "./NewsListingAggregator";

class NDTVListingAggregator extends NewsListingAggregator {
    async getListings(): Promise<NewsListEntry[]> {
        const HTMLParser = await this.getHTMLParser('https://www.ndtv.com/');
        const lists = HTMLParser('div[data-tb-region="latest-stories"] ul').children();
        const entries: NewsListEntry[] = [];
        lists.each((_, el) => {
            const element = HTMLParser(el);
            const headline = element.find('h3').text();
            const pic = element.find('img').attr('src');
            const link = element.find('a').attr('href')!;
            entries.push({ headline, pic, link })
        });

        for await (let item of entries) {
          item.contents = await this.getContents(item.link);
        }

        return entries;
    }

    async getContents(link: string): Promise<{ image: string, text: string}>{
      const htmlContents = await this.getHTMLParser(link);
      const text = htmlContents('p').text();
      const image = htmlContents('img.caption').attr('src')!;
      return { image, text };
  }
}

export {NDTVListingAggregator}
