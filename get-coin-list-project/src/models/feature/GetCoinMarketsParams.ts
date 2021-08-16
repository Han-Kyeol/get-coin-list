interface GetCoinMarketsParams {
  // eslint-disable-next-line camelcase
  vs_currency: string;
  ids?: string;
  page?: number;
  // eslint-disable-next-line camelcase
  per_page?:number;
}

export default GetCoinMarketsParams;
