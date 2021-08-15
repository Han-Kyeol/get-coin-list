<template>
  <div class="price-list-view">
    <CoinListTable
      :coin-table-list="mockTableData"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CoinInfoInTable from '@/interfaces/CoinInfoInTable';
import CoinListTable from '@/components/CoinListTable.vue';

@Component({
  components: { CoinListTable },
})
export default class PriceList extends Vue {
  mockTableData: Array<CoinInfoInTable> = [
    {
      isBookmarked: true,
      name: 'Bitcoin',
      symbol: 'btc',
      price: '₩ 46,298,075',
      oneHourPercent: '0.75%',
      oneDayPercent: '0.12%',
      oneWeekPercent: '24.36%',
      oneDayVolume: '₩ 41,496,323,888,705',
    },
  ]
}
</script>
