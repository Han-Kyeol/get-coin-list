interface GetCoinMarketsParams {
  // eslint-disable-next-line camelcase
  vs_currency: 'USD' | 'KRW';
  ids?: string;
  page?: number;
}

export default GetCoinMarketsParams;
