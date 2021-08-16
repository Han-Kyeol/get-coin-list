<template>
  <div id="app">
    <Loader />
    <Nav />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import Loader from '@/components/Loader.vue';

@Component({
  components: { Nav, Loader },
})
export default class App extends Vue {

}
</script>
