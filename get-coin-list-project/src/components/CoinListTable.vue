<template>
  <div class="coin-list-table">
    <table>
      <tr>
        <th></th>
        <th>자산</th>
        <th></th>
        <th>Price</th>
        <th>1H</th>
        <th>24H</th>
        <th>7D</th>
        <th>24H Volume</th>
      </tr>
      <tr
        :key="info.name"
        v-for="info in coinTableList"
      >
        <td>{{ info.isBookmarked }}</td>
        <td>{{ info.name }}</td>
        <td>{{ info.symbol }}</td>
        <td>{{ info.price }}</td>
        <td>{{ info.oneHourPercent }}</td>
        <td>{{ info.oneDayPercent }}</td>
        <td>{{ info.oneWeekPercent }}</td>
        <td>{{ info.oneDayVolume }}</td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import CoinInfoInTable from '@/interfaces/CoinInfoInTable';

@Component
export default class CoinListTable extends Vue {
  @Prop() coinTableList!: Array<CoinInfoInTable>
}
</script>
