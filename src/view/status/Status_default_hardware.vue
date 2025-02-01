<template>
    <div class="status_def_hardware">
        <!-- cpu -->
        <div class="cpu_pane_body">
            <div class="cpu_pane_title">
                <img src="../../media/svg/cpu.svg" class="cpu_pane_title_img">
                <h3 class="cpu_pane_title_text">CPU </h3>
            </div>
            <div class="cpu_pane_core_info">
                    <div class="cpu_pane_core_info_usage_list">
                        <div class="cpu_pane_core_info_usage_list_status">
                            <div class="cpu_show_little_pane">
                                <label class="cpu_show_text">Usage</label>
                                <div class="cpu_show_little_proceress">
                                    <div class="cpu_show_little_proceress_currect"></div>
                                </div>
                                <label class="cpu_show_text" style=" margin-left: 15px;">usage</label>
                            </div>
                            <div class="cpu_show_little_pane">
                                <label class="cpu_show_text">tempture</label>
                                <div class="cpu_show_little_proceress">
                                    <div class="cpu_show_little_proceress_currect"></div>
                                </div>
                                <label class="cpu_show_text" style=" margin-left: 15px;">temp</label>
                            </div>
                            <div class="cpu_li_core">
                                <label class="cpu_li_core_text">Core</label>
                            </div>

                        </div>
                    </div>
                    <!-- cpu动态 -->
                    <div class="cpu_line_chart_pane" id="cpu_line">
                        
                    </div>
            </div>
            
            
        </div>
        <div class="mem_pane_body">
            <!-- 物理内存 -->
            <div class="memory_pane_body">
                <div class="memory_pane_title">
                    <img src="../../media/svg/memory.svg" class="memory_pane_title_img">
                    <Label class="memory_pane_title_text">Memory</Label>
                </div>

                <div class="memory_pane_list">
                    <div class="memory_pane_list_line">
                        
                    </div>
                    <div class="memory_pane_list_info_pane">
                        <label class="memory_pane_list_info_pane_text">usage</label>
                        <div class="memory_pane_list_info_pane_procress">
                            <div class="memory_pane_list_info_pane_procress_currect"></div>
                        </div>
                        <div class="memory_pane_list_info_pane_usage">
                            <h2>10%</h2>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 交换空间 -->
             <div class="memory_pane_body">
                <div class="memory_pane_title">
                    <div class="memory_pane_title">
                        <img src="../../media/svg/swap.svg" class="memory_pane_title_img">
                        <Label class="memory_pane_title_text">Swap</Label>
                    </div>
                    
                </div>
                <div class="memory_pane_list">
                    <div class="memory_pane_list_line">
                        
                    </div>
                    <div class="memory_pane_list_info_pane">
                        <label class="memory_pane_list_info_pane_text">usage</label>
                        <div class="memory_pane_list_info_pane_procress">
                            <div class="memory_pane_list_info_pane_procress_currect"></div>
                        </div>
                        <div class="memory_pane_list_info_pane_usage">
                            <h2>10%</h2>
                        </div>
                    </div>
                </div>
             </div>
        </div>
        <!-- 网络 -->
        <div class="network_pane_body">
            <div class="network_pane_body_title">
                <img src="../../media/svg/network.svg" class="network_pane_body_title_img">
                <label class="network_pane_body_title_text">Network</label>
            </div>
            <div class="network_pane_body_info_pane">
                <!-- 接口 -->
                <div class="network_pane_body_select_pane">
                    <div class="network_pane_body_select_pane_list">
                        <img src="../../media/svg/network_port.svg" class="network_pane_body_select_pane_list_img">
                        <label class="network_pane_body_select_pane_list_text">socket</label>
                    </div>
                </div>
                <!-- 信息 -->
                <div class="network_pane_body_text_pane">
                    <label class="network_pane_body_text_pane_text">Interface rate:</label>
                    <label class="network_pane_body_text_pane_text">Upload:</label>
                    <label class="network_pane_body_text_pane_text">Download:</label>
                    <label class="network_pane_body_text_pane_text">Total Upload:</label>
                    <label class="network_pane_body_text_pane_text">Total Download:</label>
                </div>
                <!-- 动态 -->

                <div class="network_pane_body_line_pane">

                </div>



        </div>
    </div>

    <div class="app_list_body">
        <div class="app_list_body_title">
            <img src="../../media/svg/app.svg" class="app_list_body_title_img">
            <label class="app_list_body_title_text">Process</label>
        </div>
        <div class="app_list_body_table_pane">
            <!-- 表单排列 -->

        </div>
    </div>
    </div>
</template>

<script>
import * as echarts from "echarts"
import config from "../../config";
import axios from "axios";


import { onMounted } from "vue"



export default{
data(){
    return{
        url:'http://'+config.api.baseURL+':'+config.api.port.api_master+'/api/baseinfo'
    }
},
mounted(){
    this.creat_cpu_line();
},
methods:{
    creat_cpu_line(){
        var cpu_info=document.getElementById("cpu_line");
    var cpu_line_chart = echarts.init(cpu_info, null, {
    renderer: "canvas",
    useDirtyRect: false,
  });
    var option;
    option={
        grid:{
            left:'3%',
            right:'2%',
            bottom:'3%',
            top:'25%',
            containLabel:true
        },
        title:{
            text:'CPU Usage',
            left:'2%'
        },
        xAxis:{
            type:"category",
            data:['1s','2s','3s','4s','5s','6s'],//横列
        },
        yAxis:{
            type:"value",
        },
        series:[
            {
                data:[12,8,4,6,17,88],
                type:"line",
                areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgba(5, 115, 233, 0.3)",
            },
            {
              offset: 1,
              color: "rgba(5,114,233,0)",
            },

                    ])
                }
            },
        ],
    };

    if(option&&typeof option==="object"){
        cpu_line_chart.setOption(option);
    }
    },
    // 随机数
  
}
}




onMounted(()=>{
   
})


</script>




<style>
@import '../sheet/status/status.css';
@import '../sheet/status/hardware_.css';
</style>