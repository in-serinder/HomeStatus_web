<template>

    <!-- 主体版 -->
    <div class="home_body">
        <keep-alive>
        <Weather_pane></Weather_pane>
    </keep-alive>
        <Base_info></Base_info>
        <Public_msg></Public_msg>
      
    </div>

</template>

<script>


import Weather_pane from './HOME_son/Weather_pane.vue';
import Base_info from './HOME_son/Base_info.vue';
import Public_msg from './HOME_son/Public_msg.vue';


export default{
    components:{
    Weather_pane,
    Base_info,
    Public_msg
}
}




</script>








<style>
@import './sheet/home.css';
@import './sheet/home_right.css';


</style>