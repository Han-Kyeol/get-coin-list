<template>
  <div class="loader" v-show="isLoading">
    <p>...Loading</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import store from '@/store';

@Component
export default class Loader extends Vue {
  get isLoading(): boolean {
    return store.state.isLoading;
  }
}
</script>
