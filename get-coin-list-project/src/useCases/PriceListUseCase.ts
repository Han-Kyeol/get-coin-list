import { GetCoinMarkets, IGetCoinMarkets } from '@/gateways/GetCoinMarkets';
import GetCoinMarketsParams from '@/models/feature/GetCoinMarketsParams';
import GetCoinMarketsResponse from '@/models/feature/GetCoinMarketsResponse';

export interface IPriceListUseCase {
  getCoinMarkets (param: GetCoinMarketsParams): Promise<Array<GetCoinMarketsResponse>>
}

export class PriceListUseCase implements IPriceListUseCase {
  getCoinMarketsGateway: IGetCoinMarkets = new GetCoinMarkets()

  async getCoinMarkets(param: GetCoinMarketsParams): Promise<Array<GetCoinMarketsResponse>> {
    const response: Array<GetCoinMarketsResponse> = await this.getCoinMarketsGateway.request(param);

    return response;
  }
}
