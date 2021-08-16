<template>
  <div class="coin-list-table">
    <table>
      <tr>
        <th></th>
        <th>자산</th>
        <th></th>
        <th class="align-right">Price</th>
        <th class="align-right">1H</th>
        <th class="align-right">24H</th>
        <th class="align-right">24H Volume</th>
      </tr>
      <tr
        :key="info.name"
        v-for="info in coinTableList"
      >
        <td>{{ info.isBookmarked }}</td>
        <td class="bold">{{ info.name }}</td>
        <td>{{ info.symbol }}</td>
        <td class="align-right bold">{{ info.price }}</td>
        <td class="align-right bold">{{ info.oneHourPercent }}</td>
        <td class="align-right bold">{{ info.oneDayPercent }}</td>
        <td class="align-right bold">{{ info.oneWeekPercent }}</td>
        <td class="align-right bold">{{ info.oneDayVolume }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import CoinInfoInTable from '@/models/feature/CoinInfoInTable';

@Component
export default class CoinListTable extends Vue {
  @Prop() coinTableList!: Array<CoinInfoInTable>
}
</script>
