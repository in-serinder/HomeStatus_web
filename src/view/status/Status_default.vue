<template>
    <div class="status_deflaut_body">
        <!-- 基本硬件信息 -->
        <div class="base_hardware_info_pane_body">
            <Status_default_hardware></Status_default_hardware>
        </div>

        <!-- 磁盘信息 -->
        <div class="base_disk_infolist_body">
            <div class="disk_info_body">
                <!-- 顶部 -->
                <div class="disk_info_title">
                    <img src="../../media/immer/storage-dark.png" class="disk_info_title_img">
                    <label class="disk_info_title_img_lab">Disk Status</label>
                </div>
                <!-- 数据部 -->
                 <div class="disk_show_area">
                    <!-- 组件 -->
                    <div class="disk_pane" v-for="disk in disks" :key="disk.device">
                        <label   v-if="!loading&&disk" class="disk_device_label">{{disk.device}}</label>
                        <div class="disk_pane_gp">
                        <img src="../../media/immer/disk-box-dark.png" class="disk_pane_img">
                        <div class="disk_pane_process">
                            
                            <!-- 进度条 -->
                            <div class="disk_pane_process_currect" :style="{width:disk.usage_rate+'%',backgroundColor: disk.usage > 90 ? 'red' : '#27c9ff' }"></div>
                        </div>
                        <label class="disk_pane_img_usage"  v-if="!loading&&disk">{{disk.usage_rate}}</label>
                        </div>
                        <!-- 标签 -->
                         <div class="disk_pane_label">
                           
                            <label class="disk_pane_label_divces"  v-if="!loading&&disk">{{disk.total_space}}/{{disk.use_space}}</label>
                         </div>
                    </div>

                 </div>
            </div>
        </div>

    </div>
</template>


<script>
import config from '../../config';
import axios from 'axios';


import Status_default_hardware from './Status_default_hardware.vue';
export default{
    components:{
        Status_default_hardware
    },
    data(){
        return{
            url:'http://'+config.api.baseURL+':'+config.api.port.api_master+'/api/status/disk',
            disks:[],
            loading:true
        };
    },
    created(){
        this.get_disk()
    },
    methods:{
        get_disk(){
            axios.get(this.url)
            .then(response => response.data)
            .then(data=>this.updata_disk(data))
           .catch(error => console.error(error));
        },
        updata_disk(data){
            this.loading = false;
            // this.get_disk()
            this.disks = data.disk;
            console.log(this.disks.disk)
        }
    },
}
</script>


<style>
@import '../sheet/status/deflault.css';

</style>