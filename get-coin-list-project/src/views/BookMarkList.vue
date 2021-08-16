<template>
  <div class="book-mark-list-view">
    <CoinListTable
      :coin-table-list="tableData"
      @bookMarkClicked="bookMarkClicked"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CoinListTable from '@/components/CoinListTable.vue';
import CoinInfoInTable from '@/models/feature/CoinInfoInTable';
import { IPriceListPresentation, PriceListPresentation } from '@/presentations/PriceListPresentation';

@Component({
  components: { CoinListTable },
})
export default class BookMarkList extends Vue {
  priceListPresentation: IPriceListPresentation = new PriceListPresentation()

  tableData: Array<CoinInfoInTable> = []

  async setTableData(): Promise<void> {
    const bookMarks: string | null = localStorage.getItem('bookMarks');
    const nullRemovedBookMarks = `${bookMarks?.replace('null,', '')}`;

    this.tableData = await this.priceListPresentation.getCoinMarketsTable({
      vs_currency: 'KRW',
      ids: nullRemovedBookMarks,
      per_page: 250,
    });
  }

  async created(): Promise<void> {
    await this.setTableData();
  }

  async bookMarkClicked(): Promise<void> {
    await this.setTableData();
  }
}
</script>
