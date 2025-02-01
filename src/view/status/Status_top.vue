<template>
    <div class="status_top_body">
        <div class="status_top_select_pane">
            <router-link href="javascript:void(0)"   class="status_top_select_pane_link" to="/Status/" :style="{color:$route.name=='Status_default'? '#f6f6f6':'#0b0b0b'}">Deflaut</router-link>
            /
            <router-link href="javascript:void(0)"   class="status_top_select_pane_link" to="/Status/netdata" :style="{color:$route.name=='Status_default'? '#0b0b0b':($route.name=='Status_netdata'?'#f6f6f6':'#0b0b0b')}">Netdata</router-link>
            /
            <router-link href="javascript:void(0)"   class="status_top_select_pane_link" to="/Status/Classics" :style="{color:$route.name=='Status_default'? '#0b0b0b':($route.name=='Status_classics'?'#f6f6f6':'#0b0b0b')}">Classics</router-link>
        </div>
        <div class="status_top_time_pane">
            <div class="status_top_time"> 
                <label for="">Time:{{date.local_time}}       Unix:{{date.unixtime}}</label>
            </div>
           
           
        </div>
    </div>
</template>



<script>

import { onBeforeUnmount } from 'vue';
import config from '../../config';
import axios from 'axios';

export default {
  data() {
    return {
      url: 'http://' + config.api.baseURL + ':' + config.api.port.api_master + '/api/date/localtime',
      date: [],
      loading: true,
      dateUpdaterInterval: null
    };
  },
  created() {
    this.startDateUpdater();
    // this.checkRouteAndExecute();
  },



  beforeDestroy() {
    this.stopDateUpdater();
  },
      // router___f__x
      onBeforeUnmount(){
      this.stopDateUpdater();
      console.log(level)
    },


  methods: {
    startDateUpdater() {
      this.dateUpdaterInterval = setInterval(() => {
        this.get_date();
      }, 1000);
      
    },
    stopDateUpdater() {
      clearInterval(this.dateUpdaterInterval);
    },

// router
checkRouteAndExecute() {
      const currentPath = this.$route.path;
      if (!currentPath.startsWith('/Status')) {
        this.stopDateUpdater()
        // console.log("noway")
      }
      // console.log("way")
    },

    get_date() {
      axios.get(this.url)
        .then(response => response.data)
        .then(data => this.update_date(data));
    },
    update_date(data) {
      this.date = data;
      this.loading = false;
      this.checkRouteAndExecute();
    }
  }
}

</script>


<style>
@import '../sheet/status/status_top.css'
</style>