<template>
    <div class="home_public_msg_body_">
        <div class="public_msg_logs_pane">
            <div class="public_msg_broad_pane_title">
                <img src="../../media/svg/log.svg" alt="img" class="public_msg_broad_pane_title_img">
                <label for="" class="public_msg_broad_pane_title_label">Logs</label>
            </div >
            <!-- 日志消息 -->
            <div class="public_msg_broad_pane_title_selsect_pane">
            <!-- 错误 -->
            <div
            @click="get_log('error_log')" 
            @mouseenter="change_style('err')"
            @mouseleave="reset_style('err')" class="public_msg_broad_pane_title_selsect_pane_img_pane"  :style="{ backgroundColor: divColor_err }">
                <img src="../../media/svg/error.svg" alt="" class="public_msg_broad_pane_title_selsect_pane_img_pane_img">
                <label for="" class="public_msg_broad_pane_title_selsect_pane_img_pane_label">Error</label>
            </div>
            <!-- API使用 -->
            <div @click="get_log('api_log')" 
                 @mouseenter="change_style('api')"
                 @mouseleave="reset_style('api')"   class="public_msg_broad_pane_title_selsect_pane_img_pane" :style="{ backgroundColor: divColor_api }">
                <img src="../../media/svg/api_log.svg" alt="" class="public_msg_broad_pane_title_selsect_pane_img_pane_img">
                <label for="" class="public_msg_broad_pane_title_selsect_pane_img_pane_label">API</label>
            </div>

            <!-- 访客 -->
            <div
            @click="get_log('visiter_log')" 
            @mouseenter="change_style('visiter')"
            @mouseleave="reset_style('visiter')"    class="public_msg_broad_pane_title_selsect_pane_img_pane"  :style="{ backgroundColor: divColor_visiter }">
                <img src="../../media/svg/visiter.svg" alt="" class="public_msg_broad_pane_title_selsect_pane_img_pane_img">
                <label for="" class="public_msg_broad_pane_title_selsect_pane_img_pane_label">Visiter</label>
            </div>
            <!-- 硬件 -->
            <div 
            @click="get_log('hardware_log')" 
            @mouseenter="change_style('hardware')"
            @mouseleave="reset_style('hardware')"  class="public_msg_broad_pane_title_selsect_pane_img_pane" style="border-right:none;"  :style="{ backgroundColor: divColor_hardware }">
                <img src="../../media/svg/hardware.svg" alt="" class="public_msg_broad_pane_title_selsect_pane_img_pane_img">
                <label for="" class="public_msg_broad_pane_title_selsect_pane_img_pane_label">Hardware</label>
            </div>
             </div>
             <!-- show -->
             <div class="public_msg_broad_pane_message_pane" v-if="!loading&&log_msg" >
                <label for="" class="public_msg_broad_pane_message_pane_label" v-for="(log,index) in log_msg" :key="index">{{log}}</label><br>
                <span v-if="loading" class="public_msg_broad_pane_message_pane_label">Loading..</span>
             </div>
             

        </div>

        <div class="public_msg_broad_pane">
            <!-- 广播消息 -->
            <div class="area_public_msg_broad_pane_title">
                <img src="../../media/svg/message.svg" alt="" class="area_public_msg_broad_pane_img">
                <label for="" class="public_msg_broad_pane_title_label">Public Message</label>
                <div class="area_public_msg_broad_pane_show" v-if="!loading&&public_msg">
                    <label for="" class="public_msg_broad_pane_message_pane_label" v-for="(msg,index) in public_msg" :key="index">{{msg}}</label>
                    <span v-if="loading" class="public_msg_broad_pane_message_pane_label">Loading..</span>
                </div>
            </div>
        </div>

    </div>    
</template>


<style>
@import "../sheet/public.msg.css"
</style>

<script>
import config from '../../config';
import axios from 'axios';


export default{
    data(){
        return{
            log_msg:[],
            public_msg:[],
            api_url:config.api.baseURL,
            api_port:config.api.port.api_master,
            loading:false,

            divColor_err: "transparent",
            divColor_api: "transparent",
            divColor_visiter:"transparent",
            divColor_hardware:"transparent"

        };
    },
    created(){
        this.get_log('visiter_log')
        this.get_public_msg()
    },
    methods:{
        get_log(type){
            axios.get("http://${api_url}:${api_port}/api/"+type)
            .then(response=>response.data)
            .then(data=>this.set_msg(data))
            .catch(error=>console.error(error));
        
        },
        set_msg(val){
            this.log_msg=val.contect
            
        },
        
        get_public_msg(){
            axios.get("http://${api_url}:${api_port}/api/public_msg")
            .then(response=>response.data)
            .then(data=>this.set_public_msg(data))
            .catch(error=>console.error(error));
        
        },
        set_public_msg(data){
            this.public_msg=data.contect
            console.log(this.public_msg)
        },

        change_style(ele){
            switch(ele){
               case 'err': this.divColor_err = '#6fb7cf';break;
               case 'api':this.divColor_api = '#6fb7cf';break;
               case 'visiter': this.divColor_visiter = '#6fb7cf';break;
               case 'hardware': this.divColor_hardware = '#6fb7cf';break;
            }
            
        },
        reset_style(ele){
            //this.divColor = 'transparent';

            switch(ele){
                case 'err': this.divColor_err = 'transparent';break;
                case 'api':this.divColor_api ='transparent';break;
                case 'visiter': this.divColor_visiter = 'transparent';break;
                case 'hardware':this.divColor_hardware ='transparent';break
             }
        }
    }   

}


</script>