<template>
  <div class="price-list-view">
    <CoinListTable
      :coin-table-list="tableData"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CoinInfoInTable from '@/models/feature/CoinInfoInTable';
import CoinListTable from '@/components/CoinListTable.vue';
import { IPriceListPresentation, PriceListPresentation } from '@/presentations/PriceListPresentation';

@Component({
  components: { CoinListTable },
})
export default class PriceList extends Vue {
  priceListPresentation: IPriceListPresentation = new PriceListPresentation()

  // mockTableData: Array<CoinInfoInTable> = [
  //   {
  //     isBookmarked: true,
  //     name: 'Bitcoin',
  //     symbol: 'btc',
  //     price: '₩ 46,298,075',
  //     oneHourPercent: '0.75%',
  //     oneDayPercent: '0.12%',
  //     oneWeekPercent: '24.36%',
  //     oneDayVolume: '₩ 41,496,323,888,705',
  //   },
  // ]

  tableData: Array<CoinInfoInTable> = []

  async created(): Promise<void> {
    this.tableData = await this.priceListPresentation.getCoinMarketsTable({ vs_currency: 'USD', page: 1 });
    console.log(this.tableData);
  }
}
</script>
