<template>
    <div class="netdata_body">
        <iframe :src=url frameborder="0" class="netdata_iframe"></iframe>
    </div>
</template>


<style>

@import "../sheet/status/netdata.css";
</style>

<script>
import config from '../../config';
export default {
    data() {
        return {
            url: 'http://'+config.netdata.home_service_server.ip+':'+config.netdata.home_service_server.port
        }
    },
    created() {

    }
}
</script>