import {NewsListEntry} from "./types";
import {NewsListingAggregator} from "./NewsListingAggregator";

class IEListingAggregator extends NewsListingAggregator {
    baseUrl = 'https://indianexpress.com';

    async getListings(): Promise<NewsListEntry[]> {
        const HTMLParser = await this.getHTMLParser(this.baseUrl);
        const lists = HTMLParser('.other-article');
        const entries: NewsListEntry[] = [];
        lists.each((_, el) => {
            const element = HTMLParser(el);
            const headline = element.find('.content-txt').text();
            const pic = element.find('.story-image > a > img').attr('data-src');
            const link = element.find('a').attr('href')!;
            entries.push({headline, pic, link})
        });

        for await (let item of entries) {
            item.contents = await this.getContents(item.link);
        }

        return entries;
    }

    async getContents(link: string): Promise<{ image: string, text: string }> {
        const htmlContents = await this.getHTMLParser(link);
        const text = htmlContents('p').text();
        const image = htmlContents('.custom-caption').find('img').attr('src')!;
        return {image, text};
    }
}

export {IEListingAggregator}
