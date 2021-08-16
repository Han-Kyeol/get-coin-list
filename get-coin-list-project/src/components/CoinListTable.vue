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
          <p class="book-mark-icon" @click="onClickBookMark(info)">
            <font-awesome-icon v-if="info.isBookmarked" icon="star" />
            <font-awesome-icon v-else :icon="['far', 'star']" />
          </p>
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

  saveBookMarkOnStorage(bookMarksList: Array<string>): void {
    localStorage.setItem('bookMarks', bookMarksList.join());
  }

  onClickBookMark(info: CoinInfoInTable): void {
    const bookMarks: string | null = localStorage.getItem('bookMarks');
    const bookMarksList: Array<string> = `${bookMarks}`.split(',');

    if (info.isBookmarked) {
      const indexOfBookMark: number = bookMarksList.indexOf(info.symbol);
      bookMarksList.splice(indexOfBookMark, 1);

      this.saveBookMarkOnStorage(bookMarksList);

      alert(`${info.name} 북마크가 해제되었습니다`);
    } else {
      bookMarksList.push(info.symbol);
      this.saveBookMarkOnStorage(bookMarksList);

      alert(`${info.name} 북마크가 추가되었습니다`);
    }

    this.$emit('bookMarkClicked');
  }
}
</script>
