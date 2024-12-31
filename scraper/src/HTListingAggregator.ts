import {NewsListEntry} from "./types";
import {NewsListingAggregator} from "./NewsListingAggregator";

class HTListingAggregator extends NewsListingAggregator {
    baseUrl = 'https://www.hindustantimes.com';

    async getListings(): Promise<NewsListEntry[]> {
        const HTMLParser = await this.getHTMLParser(this.baseUrl);
        const lists = HTMLParser('.cartHolder');
        const entries: NewsListEntry[] = [];
        lists.each((i, el) => {
            const element = HTMLParser(el);
            let headline = element.find('h3').text().trim();
            let summary = element.find('h2').text().trim();

            if (headline === '') {
                headline = summary;
                summary = '';
            }

            const link = element.find('a').attr('href')!;
            const pic = element.find('figure').find('img').attr('data-src');
            if (link !== undefined) {
                entries.push({headline, pic, summary, link});
            }
        });

        for await (let item of entries) {
            item.contents = await this.getContents(item.link);
        }

        return entries;
    }

    async getContents(link: string): Promise<{ image: string, text: string }> {
        const htmlContents = await this.getHTMLParser(this.baseUrl + link);
        const text = htmlContents('p').text();
        const image = htmlContents('#dataHolder picture').find('img').attr('src')!;
        return {image, text};
    }
}

export {HTListingAggregator}
