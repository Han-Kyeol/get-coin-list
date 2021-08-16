import CoinInfoInTable from '@/models/feature/CoinInfoInTable';
import GetCoinMarketsParams from '@/models/feature/GetCoinMarketsParams';
import GetCoinMarketsResponse from '@/models/feature/GetCoinMarketsResponse';
import { IPriceListUseCase, PriceListUseCase } from '@/useCases/PriceListUseCase';

export interface IPriceListPresentation {
  getCoinMarketsTable (param: GetCoinMarketsParams): Promise<Array<CoinInfoInTable>>
  parseDecimalPlace (num: number, place: number): string
  isIncludedInBookMark (bookMarks: string, id: string): boolean
  convertResponseToInfoTable
    (response: Array<GetCoinMarketsResponse>, currency: string): Array<CoinInfoInTable>
}

export class PriceListPresentation implements IPriceListPresentation {
  priceListUseCase: IPriceListUseCase = new PriceListUseCase()

  private CurrencySymbol: {[key: string]: string} = { KRW: '₩', USD: '$' }

  async getCoinMarketsTable(param: GetCoinMarketsParams): Promise<Array<CoinInfoInTable>> {
    const response:
      Array<GetCoinMarketsResponse> = await this.priceListUseCase.getCoinMarkets(param);

    return this.convertResponseToInfoTable(response, param.vs_currency);
  }

  parseDecimalPlace(num: number, place: number): string {
    if (!num) return '-';
    return parseFloat(num.toFixed(place)).toLocaleString();
  }

  isIncludedInBookMark(bookMarks: string, id: string): boolean {
    return bookMarks.includes(id.toLowerCase());
  }

  convertResponseToInfoTable(response: Array<GetCoinMarketsResponse>, currency: string)
    : Array<CoinInfoInTable> {
    const bookMarks: string | null = localStorage.getItem('bookMarks');

    return response.map((info: GetCoinMarketsResponse): CoinInfoInTable => ({
      id: info.id,
      isBookmarked: this.isIncludedInBookMark(`${bookMarks}`, info.id),
      name: info.name,
      symbol: info.symbol,
      price: `${this.CurrencySymbol[currency]} ${this.parseDecimalPlace(info.current_price, 2)}`,
      oneHourPercent: `${this.parseDecimalPlace(info.price_change_percentage_1h_in_currency, 2)}%`,
      oneDayPercent: `${this.parseDecimalPlace(info.price_change_percentage_24h, 2)}%`,
      totalVolume: `${this.CurrencySymbol[currency]} ${info.total_volume.toLocaleString()}`,
    }));
  }
}
