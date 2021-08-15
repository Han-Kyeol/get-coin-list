import GetCoinMarketsParams from '@/models/feature/GetCoinMarketsParams';
import GetCoinMarketsResponse from '@/models/feature/GetCoinMarketsResponse';

export interface IGetCoinMarkets {
  request (param: GetCoinMarketsParams): Promise<Array<GetCoinMarketsResponse>>
}

export class GetCoinMarkets implements IGetCoinMarkets {
  PER_PAGE = 50

  async request(param: GetCoinMarketsParams): Promise<Array<GetCoinMarketsResponse>> {
    const url = new URL('https://api.coingecko.com/api/v3/coins/markets');
    url.search = new URLSearchParams({
      vs_currency: param.vs_currency,
      order: 'market_cap_desc',
      per_page: `${this.PER_PAGE}`,
      price_change_percentage: '1h, 24h, 7d',
    }).toString();
    const response = await fetch(url.toString());

    if (response.status !== 200) {
      throw new Error(`${response.status}`);
    }

    const getCoinMarketsResponse = await response.json();

    return getCoinMarketsResponse;
  }
}
