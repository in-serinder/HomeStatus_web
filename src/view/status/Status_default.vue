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
                    <div class="disk_pane">
                        <div class="disk_pane_gp">
                        <img src="../../media/immer/disk-box-dark.png" class="disk_pane_img">
                        <div class="disk_pane_process">
                            <!-- 进度条 -->
                            <div class="disk_pane_process_currect"></div>
                        </div>
                        <label class="disk_pane_img_usage">占有率</label>
                        </div>
                        <!-- 标签 -->
                         <div class="disk_pane_label">
                            <label >挂载点</label>
                            <label class="disk_pane_label_divces">容量</label>
                         </div>
                    </div>

                 </div>
            </div>
        </div>

    </div>
</template>


<script>

import Status_default_hardware from './Status_default_hardware.vue';
export default{
    components:{
        Status_default_hardware
    }
}
</script>


<style>
@import '../sheet/status/deflault.css';

</style>