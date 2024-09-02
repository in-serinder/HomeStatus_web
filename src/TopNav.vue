<template>
    <div class="top_">
      <nav class="ul">
        <router-link id="home_logo" to="/">
          <img src="./media/archlinux-logo.png" alt="Home" class="img">
        </router-link>
        <keep-alive>
        <li id="home" class="ul_li"><router-link to="/" class="title_text">Home</router-link></li>
      </keep-alive>
        <li id="status" class="ul_li"><router-link to="/Status" class="title_text">Status</router-link></li>
        <li id="database" class="ul_li"><router-link to="/Database" class="title_text">Database</router-link></li>
        <li id="resources" class="ul_li"><router-link to="/Resources" class="title_text">Resources</router-link></li>
        <li id="netinfo" class="ul_li"><router-link to="/Netinfo" class="title_text">Internet information</router-link></li>
        <li id="remote" class="ul_li"><router-link to="/Remote" class="title_text">Remote</router-link></li>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TopNav',
  };
  </script>
  
  <style>
  @import './view/sheet/test.css';
  @import './view/sheet/top_title.css';
  
  
  
  
  </style>