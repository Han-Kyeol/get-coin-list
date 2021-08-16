<template>
  <div class="price-list-view">
    <select
      name="currencies"
      id="currency-select"
      v-model="currency"
      @change="onChangeSelect($event)"
    >
      <option value="KRW">KRW 보기</option>
      <option value="USD">USD 보기</option>
    </select>
    <CoinListTable
      :coin-table-list="tableData"
    />
    <button class="show-more-btn" type="button" @click="onClickShowMore">
      더 보기
    </button>
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

  currency = 'KRW'

  page = 1

  async setTableData(): Promise<void> {
    this.tableData = await this.priceListPresentation.getCoinMarketsTable(
      {
        vs_currency: this.currency,
        page: this.page,
      },
    );
  }

  async created(): Promise<void> {
    await this.setTableData();
  }

  async onChangeSelect(event: Event): Promise<void> {
    this.currency = (event.target as HTMLInputElement).value;
    this.page = 1;

    await this.setTableData();
  }

  async onClickShowMore(): Promise<void> {
    this.page += 1;
    const loadedTableData
      : Array<CoinInfoInTable> = await this.priceListPresentation.getCoinMarketsTable(
        {
          vs_currency: this.currency,
          page: this.page,
        },
      );

    this.tableData.push(...loadedTableData);
  }
}
</script>
