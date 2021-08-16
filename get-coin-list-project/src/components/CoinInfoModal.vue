<template>
  <div class="coin-info-modal-mask">
    <div class="coin-info-modal-wrapper">
      <div class="coin-info-modal-container">
        <div class="modal-header">
          <p>{{ coinName }}</p>
          <button type="button" @click="onClickClose">
            닫기
          </button>
        </div>
        <div class="modal-content">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import store from '@/store';

@Component
export default class CoinInfoModal extends Vue {
  @Prop() coinName!: string

  content = ''

  onClickClose(): void {
    this.$emit('close');
  }

  async created(): Promise<void> {
    store.commit('enableLoading');

    const response = await fetch(`https://en.wikipedia.org/w/api.php?origin=*&format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=${this.coinName}`);

    if (response.status !== 200) {
      store.commit('disableLoading');
      throw new Error(`${response.status}`);
    }

    const jsonResponse = await response.json();
    const queryPages = jsonResponse.query.pages;

    const pageId: string = Object.keys(queryPages)[0];

    this.content = queryPages[pageId].extract;

    store.commit('disableLoading');
  }
}
</script>
