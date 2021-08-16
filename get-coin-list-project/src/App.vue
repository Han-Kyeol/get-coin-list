<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';

@Component({
  components: { Nav },
})
export default class App extends Vue {

}
</script>
