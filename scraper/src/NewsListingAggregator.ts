import * as cheerio from 'cheerio';
import {CheerioAPI} from 'cheerio';

class NewsListingAggregator {
    async getHTMLParser(link: string): Promise<CheerioAPI> {
        const response = await fetch(link, {
            method: 'GET',
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8'
            }
        }).then(res => res.text());

        return cheerio.load(response);
    }
}

export {NewsListingAggregator}
