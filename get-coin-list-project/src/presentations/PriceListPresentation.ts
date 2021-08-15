import CoinInfoInTable from '@/models/feature/CoinInfoInTable';
import GetCoinMarketsParams from '@/models/feature/GetCoinMarketsParams';
import GetCoinMarketsResponse from '@/models/feature/GetCoinMarketsResponse';
import { IPriceListUseCase, PriceListUseCase } from '@/useCases/PriceListUseCase';

export interface IPriceListPresentation {
  getCoinMarketsTable (param: GetCoinMarketsParams): Promise<Array<CoinInfoInTable>>
  convertResponseToInfoTable (response: Array<GetCoinMarketsResponse>): Array<CoinInfoInTable>
}

export class PriceListPresentation implements IPriceListPresentation {
  priceListUseCase: IPriceListUseCase = new PriceListUseCase()

  getCoinMarketsTable = async (param: GetCoinMarketsParams): Promise<Array<CoinInfoInTable>> => {
    const response:
      Array<GetCoinMarketsResponse> = await this.priceListUseCase.getCoinMarkets(param);

    return this.convertResponseToInfoTable(response);
  }

  convertResponseToInfoTable
    = (response: Array<GetCoinMarketsResponse>)
    : Array<CoinInfoInTable> => response.map((info: GetCoinMarketsResponse): CoinInfoInTable => ({
      isBookmarked: false,
      name: info.name,
      symbol: info.symbol,
      price: `${info.current_price}`,
      oneHourPercent: `${info.price_change_percentage_1h_in_currency}`,
      oneDayPercent: `${info.price_change_percentage_24h}`,
      oneWeekPercent: '100',
      totalVolume: `${info.total_volume}`,
    }))
}
