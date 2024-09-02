<template>
  <div id="app" class="web_body">
    <TopNav></TopNav>
    <keep-alive :include=includedComponents>
    <router-view ></router-view>
  </keep-alive>
  </div>
</template>


<style>
@import './style.css'
</style>

<script>
import TopNav from './TopNav.vue';

export default {
  name: 'App',
  components: {
    TopNav,
  },
};
</script>
