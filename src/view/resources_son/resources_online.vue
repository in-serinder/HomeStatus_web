<template>
    <div class="rescources_online_body">
        <div class="RO_server_list_panel">
            <div class="RO_server_list_panel_block" style="border-bottom: 1px solid gray">
                <img src="../../media/svg/server.svg" alt="">
                <span> Server1</span>
            </div>
            <div class="RO_server_list_panel_block">
                <img src="../../media/svg/offline_nep.svg" alt="">
                <span>Offline</span>
                <!-- 显示位置解析 -->
                <div class="RO_server_list_panel_block_rightshow">
                    <div>Server.com</div>
                    <div>192.168.1.0</div>
                </div>
            </div>

            <div class="RO_server_list_panel_block">
                <p>used</p>
            </div>
            <div class="RO_server_list_panel_block">
                <img src="../../media/svg/Open.svg" class="" :class="{ 'around_180': isrotaded }"
                    @click="toggleRotation">
            </div>
        </div>
    </div>
    <!-- <h1>sdsd</h1> -->
</template>


<script>
import config from '../../config';

export default {
    data() {
        return {
            // 主机列表
            host_list: [],

            //  动画效果
            isrotaded: false,
        };
    },
    watch: {
        isRotated() {
            this.$forceUpdate();
        }
    },
    methods: {
        // 旋转图标
        toggleRotation() {
            console.log("enter", this.isrotaded)
            this.isrotaded = !this.isrotaded;

        },


        enter_link() {


        }
    }
}

</script>


<style>
@import url('../sheet/resources/service_list.css');
@import url(../sheet/anim/effect.css);
</style>