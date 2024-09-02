<template>
    <div class="database_login_body">
        <transition>
        <div class="database_login_background_full">
                <img src="../../media/archlinux-logo-dark-90dpi.png" alt="" class="database_login_top_icon">
                <!-- 登录面板 -->
                <div class="database_login_pane">
                    <!-- input -->
                    <div class="database_login_pane_input">
                        <!-- user -->
                        <div class="database_login_pane_input_user">
                            <img src="../../media/svg/user.svg" alt="" class="database_login_pane_input_img">
                            <label for="" class="database_login_pane_input_input_label" >UserName:</label>
                            <input class="database_login_pane_input_input_area" placeholder="User Name">
                        </div>
                        <!-- password -->
                        <div class="database_login_pane_input_password">
                            <img src="../../media/svg/password.svg" alt="" class="database_login_pane_input_img">
                            <label for="" class="database_login_pane_input_input_label">PassWord:</label>
                            <input type="password" class="database_login_pane_input_input_area" placeholder="PassWord">
                        </div>
                        <!-- 功能区 -->
                        <div class="database_login_pane_input_input_set">
                            <div class="database_login_pane_input_input_rember_pwd"></div>
                            <label for="" class="database_login_pane_input_input_rember_pwd_lab">Remember password</label>
                            <img src="../../media/svg/ok.svg" alt="" class="database_login_pane_input_input_rember_pwd_img">

                            <!-- start -->
                            <div
                            @mouseenter="change_style"
                            @mouseleave="reset_style"
                            class="database_login_pane_input_button" :style="{backgroundColor:button_color}">
                                <Label class="database_login_pane_input_button_text">Login</Label>
                            </div>

                            <!-- status -->
                            <img src="../../media/svg/offline.svg" alt="" class="database_login_pane_status">
                        </div>

                    </div>

                </div>
        </div>
    </transition>
    </div>
</template>


<script>

export default{
    data(){
        return{
            button_color:"#15bff7"
        }
    },
    methods:{
        change_style(){
            this.button_color="#14b0e4";
        },
        reset_style(){
            this.button_color="#15bff7"
        }
    }


}
</script>



<style>
@import "../sheet/database/database_login.css"
</style>