import CoinInfoInTable from '@/models/feature/CoinInfoInTable';
import GetCoinMarketsParams from '@/models/feature/GetCoinMarketsParams';
import { IPriceListUseCase, PriceListUseCase } from '@/useCases/PriceListUseCase';

export interface IPriceListPresentation {
  getCoinMarketsTable (param: GetCoinMarketsParams): Promise<any>
}

export class PriceListPresentation implements IPriceListPresentation {
  priceListUseCase: IPriceListUseCase = new PriceListUseCase()

  getCoinMarketsTable = async (param: GetCoinMarketsParams): Promise<any> => {
    await this.priceListUseCase.getCoinMarkets(param);
  }
}
