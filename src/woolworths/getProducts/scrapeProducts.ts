import * as scrapeIt from 'scrape-it';
import { ScrapedProduct } from './models';

export const scrapeProducts = async (
  url: string,
): Promise<ScrapedProduct[]> => {
  console.log(`Scraping ${url}...`);
  const { data }: scrapeIt.ScrapeResult<{ products: ScrapedProduct[] }> =
    await scrapeIt(url, {
      products: {
        listItem: 'article',
        data: {
          id: {
            selector: 'article div.prod_details',
            attr: 'id',
            convert: (id: string): string => id.replace('prod_details_', ''),
          },
          displayName: 'article a.range--title',
          altDisplayName: 'article h2', // sometimes they put the text in an h2 🤷‍♀️
          price: {
            selector: 'article strong',
            convert: (stringWithCurrency: string): number =>
              parseFloat(stringWithCurrency.replace('R ', '')),
          },
        },
      },
    });

  return data.products;
};
