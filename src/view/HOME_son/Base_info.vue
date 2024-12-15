<template>
    <div class="body_">
        <div>
            <div class="hard_info">
                <div class="art_pac">
                    <img src="../../media/pac.png" alt="">
                </div>
                <transition name="hare_ware_mov">
                <div class="hard_info_area">
                    <!-- 硬件区 -->
                    <svg t="1716680114884" class="icon" viewBox="0 0 1024 1024" version="1.1"
                        xmlns="http://www.w3.org/2000/svg" p-id="2707" width="200" height="200">
                        <path
                            d="M512 625.777778c-159.288889 0-284.444444-125.155556-284.444444-284.444445s125.155556-284.444444 284.444444-284.444444 284.444444 125.155556 284.444444 284.444444-125.155556 284.444444-284.444444 284.444445z m0-56.888889c125.155556 0 227.555556-102.4 227.555556-227.555556s-102.4-227.555556-227.555556-227.555555-227.555556 102.4-227.555556 227.555555 102.4 227.555556 227.555556 227.555556z"
                            fill="#333333" p-id="2708"></path>
                        <path
                            d="M56.888889 1024c0-250.311111 204.8-455.111111 455.111111-455.111111s455.111111 204.8 455.111111 455.111111h-56.888889c0-221.866667-176.355556-398.222222-398.222222-398.222222s-398.222222 176.355556-398.222222 398.222222H56.888889z"
                            fill="#333333" p-id="2709"></path>
                    </svg>
                    <label for="" class="hard_info_label" v-if="!loading && baseinfo">Current user:{{baseinfo.user}}</label>
                    <span v-if="loading" class="hard_info_label">Current user:Loading...</span>
                    <div class="HAD">
                        <!-- 列表 -->
                        <ul class="baseinfo_front">
                            <img src="../../media/svg/archlinux.svg" alt="" class="baseinf_img">
                            <tr class="baseinfo_tr"  v-if="!loading && baseinfo">OS:{{baseinfo.os}}</tr>
                            <span v-if="loading" class="baseinfo_tr">OS:Loading...</span>
                            <br>
                            <img src="../../media/svg/绿洲_cpu.svg" alt="" class="baseinf_img">
                            <tr class="baseinfo_tr" style=" font-size: 0.025em;"  v-if="!loading && baseinfo">CPU:{{baseinfo.cpu}}</tr>
                            <span v-if="loading" class="baseinfo_tr">CPU:Loading...</span>
                            <br>
                            <img src="../../media/svg/gpu.svg" alt="" class="baseinf_img">
                            <tr class="baseinfo_tr"  v-if="!loading && baseinfo">GPU:{{baseinfo.gpu}}</tr>
                            <span v-if="loading" class="baseinfo_tr">GPU:Loading...</span>
                            <br>
                            <img src="../../media/svg/mem.svg" alt="" class="baseinf_img">
                            <tr class="baseinfo_tr"  v-if="!loading && baseinfo">Memory:{{baseinfo.mem}}</tr>
                            <span v-if="loading" class="baseinfo_tr">Memory:Loading...</span>
                            <br>
                            <img src="../../media/svg/swap.svg" alt="" class="baseinf_img">
                            <tr class="baseinfo_tr"  v-if="!loading && baseinfo">Swap:{{baseinfo.swap}}</tr>
                            <span v-if="loading" class="baseinfo_tr">Swap:Loading...</span>
                            <br>
                            <img src="../../media/svg/ip.svg" alt="" class="baseinf_img">
                            <tr class="baseinfo_tr"  v-if="!loading && baseinfo">IP:{{baseinfo.ip}}</tr>
                            <span v-if="loading" class="baseinfo_tr">IP:Loading...</span>
                            <hr >
                            <img src="../../media/svg/prog.svg" alt="" class="baseinf_img">
                            <tr class="baseinfo_tr" v-if="!loading && baseinfo">Process:{{baseinfo.process}}</tr>
                            <span v-if="loading" class="baseinfo_tr">Process:Loading...</span>
                            <br>
                            <img src="../../media/svg/log.svg" alt="" class="baseinf_img">
                            <tr class="baseinfo_tr" v-if="!loading && baseinfo">Logs:{{baseinfo.log}}</tr>
                            <span v-if="loading" class="baseinfo_tr">Logs:Loading...</span>
                        </ul>
                        

                    </div>

                </div>
            </transition>
            </div>
            
            <div class="other_show">
                <!-- 磁盘信息 -->
                <img src="../../media/svg/solid-state-disk.svg" alt="" class="base_info_title_img">
                <label for="" class="base_info_other_show_title">Storage situation</label>
                <!-- 磁盘列表 -->
                <div class="baseinfo_disk_pane">
                    <!-- 进度条面板组件 -->
                    <div class="baseinfo_disk_comp" v-for="disk in disks" :key="disk.devices">    
                        <img src="../../media/svg/storge.svg" alt="" class="baseinf_progress_icon">
                        <!-- 路径名 -->
                        <label for="" class="baseinf_progress_label" v-if="!loading&&disk">{{disk.device}}</label>
                        <!-- 状态信息 -->
                        <label for="" class="baseinf_progress_status" v-if="!loading&&disk">{{disk.total_space}}/{{disk.use_space}}-{{disk.usage_rate}}%</label>
                        <!-- 进度条 -->
                        <div class="baseinfo_diskprogress-bar" >
                            <!-- 进度 -->
                            <div class="base_info_porgress_bar_ben" :style="{width:disk.usage_rate+'%',backgroundColor: disk.usage_rate > 90 ? 'red' : '#27c9ff'}" ></div>
                        </div>
                </div>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
// import { clone } from 'echarts/types/src/export/api/util.js';
import config from '../../config';
import axios from 'axios';


export default{
    data(){
        return{
            baseinfo:null,
            loading:true,
            api_url:config.api.baseURL,
            api_port:config.api.port.api_master,
            disks:[],
            ststaus:{},
            url:'http://'+config.api.baseURL+':'+config.api.port.api_master+'/api/baseinfo'

        };
    },
    created(){  //页面周期
        this.get_baseinfo();
        this.get_router();
        
        // console.log('baseinfo${api_url}:${api_port}')
    },
    methods:{
       get_router(){
        console.log(this.$router.path)
        },
        get_baseinfo() {
            console.log(this.url,config.api.baseURL)
            axios.get(this.url)
                .then(response=>response.data)
                .then(data=>this.update_basedata(data))
                .catch(error=>console.error(error));
        },
        update_basedata(data){
            this.baseinfo=data;
            this.update_disk_status(data.disk)
            this.loading=false;
            console.log(data)
        },
        update_disk_status(disk){
           this.disks=disk
           console.log(this.disk)
        }
    }
}

</script>


<style>
@import '../sheet/base_info.css';
</style>