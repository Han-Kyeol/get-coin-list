/* eslint-disable camelcase */
interface GetCoinMarketsResponse {
  ath: number
  ath_change_percentage: number
  ath_date: Date
  atl: number
  atl_change_percentage: number
  atl_date: Date
  circulating_supply: number
  current_price: number
  fully_diluted_valuation: number
  high_24h: number
  id: string
  image: string
  last_updated: Date
  low_24h: number
  market_cap: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  market_cap_rank: number
  max_supply: number
  name: string
  price_change_24h: number
  price_change_percentage_24h: number
  roi: {
    times: number
    currency: string
    percentage: number
  }
  symbol: string
  total_supply: number
  total_volume: number
  price_change_percentage_1h_in_currency: number
}

export default GetCoinMarketsResponse;
