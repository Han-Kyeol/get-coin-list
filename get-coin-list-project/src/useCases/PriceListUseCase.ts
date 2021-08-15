import { GetCoinMarkets, IGetCoinMarkets } from '@/gateways/GetCoinMarkets';
import GetCoinMarketsParams from '@/models/feature/GetCoinMarketsParams';
import ApiResponse from '@/models/shared/ApiResponse';

export interface IPriceListUseCase {
  getCoinMarkets (param: GetCoinMarketsParams): Promise<any>
}

export class PriceListUseCase implements IPriceListUseCase {
  getCoinMarketsGateway: IGetCoinMarkets = new GetCoinMarkets()

  getCoinMarkets = async (param: GetCoinMarketsParams): Promise<any> => {
    await this.getCoinMarketsGateway.request(param);
  }
}
