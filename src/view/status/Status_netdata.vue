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
            netdata_ip: config.netdata.home_service_server.ip,
            netdata_port: config.netdata.home_service_server.port,
            url: 'http://'+netdata_ip+':'+netdata_port
        }
    },
    created() {

    }
}
</script>