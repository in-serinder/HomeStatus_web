<template>
    <div class="status_body" >
        <Status_top  ></Status_top>
        
        <div class="status_comp_pane">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>

import Status_top from './status/Status_top.vue';
import status_classic from './status/Status_classic.vue';
import Status_default from './status/Status_default.vue';
import Status_netdata from './status/Status_netdata.vue';

export default{
    components:{
        Status_top,
        status_classic,
        Status_default,
        Status_netdata
    },
    created(){

    },
    data(){
        return{
            default_show:"block",
            classics_show:"none"
        };
        
    },
    methods:{

    }
}


</script>

<style>
@import './sheet/status.css'
</style>