<template>
  <div id="nav">
      <router-link to="/" :class="{ active: isPriceList }">가상자산 시세목록</router-link>
      <router-link to="/bookMarkList" :class="{ active: !isPriceList }">북마크 목록</router-link>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  routePath = ''

  get isPriceList(): boolean {
    return this.routePath === '/';
  }

  @Watch('$route', { immediate: true })
  onRouteChanged(route: { path: string }): void {
    this.routePath = route.path;
  }
}
</script>
