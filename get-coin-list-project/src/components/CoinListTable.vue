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
        <th class="align-right">Total Volume</th>
      </tr>
      <tr
        :key="info.name"
        v-for="info in coinTableList"
      >
        <td>
          <font-awesome-icon v-if="info.isBookmarked" icon="star" />
          <font-awesome-icon v-else :icon="['far', 'star']" />
        </td>
        <td class="bold">{{ info.name }}</td>
        <td>{{ info.symbol }}</td>
        <td class="align-right bold">{{ info.price }}</td>
        <td :class="{
          'align-right': true,
          'bold': true,
          'ascending': isAscendingPercent(info.oneHourPercent),
          'descending': !isAscendingPercent(info.oneHourPercent)
          }">{{ info.oneHourPercent }}</td>
        <td :class="{
          'align-right': true,
          'bold': true,
          'ascending': isAscendingPercent(info.oneDayPercent),
          'descending': !isAscendingPercent(info.oneDayPercent)
          }">{{ info.oneDayPercent }}</td>
        <td class="align-right bold">{{ info.totalVolume }}</td>
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

  isAscendingPercent(value: string): boolean {
    return !value.includes('-');
  }
}
</script>
