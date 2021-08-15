interface CoinInfoInTable {
  isBookmarked: boolean;
  name: string;
  currency: 'KRW' | 'USD';
  price: string;
  oneHourPercent: number;
  oneDayPercent: number;
  oneWeekPercent: number;
  oneDayVolume: string;
}

export default CoinInfoInTable;
