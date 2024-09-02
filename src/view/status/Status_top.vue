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
            <label for="">Time:</label>
        </div>
    </div>
</template>



<script>
export default{
    data(){
        return{

        };
    
    },   
    created(){
        // this.select_comp()
    },
    
    methods:{

    }
}

</script>


<style>
@import '../sheet/status/status_top.css'
</style>