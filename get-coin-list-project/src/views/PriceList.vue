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

  tableData: Array<CoinInfoInTable> = []

  async created(): Promise<void> {
    this.tableData = await this.priceListPresentation.getCoinMarketsTable({ vs_currency: 'USD', page: 1 });
  }
}
</script>
