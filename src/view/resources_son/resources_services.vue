<template>
    <div class="resources_services_body">
        <div class="Rs_content_top_pane">
            <div>Server-Offline-IP</div>
        </div>
        <!-- 内容 -->
        <div class="Rs_content_pane">
            <!-- 选框 -->
            <div class="Rs_content_pane_select_pane">
                <div class="Rs_content_pane_select">
                    <img src="../../media/svg/39-Services.svg" alt="">
                    <span>Services</span>
                </div>
                <div class="Rs_content_pane_select">
                    <img src="../../media/svg/docker.svg" alt="">
                    <span>Docker</span>
                </div>
                <div class="Rs_content_pane_select">
                    <img src="../../media/svg/file.svg" alt="">
                    <span>File</span>
                </div>
                <div class="Rs_content_pane_select">
                    <img src="../../media/svg/Logs.svg" alt="">
                    <span>Log</span>
                </div>
            </div>

            <!-- 选中内容  -->
            <!-- 暂时注释 -->
            <div class="Rs_content_pane_content_pane">
                <!-- 服务 -->
                <!-- <div class="Rs_content_pane_content_pane_services">service</div> -->
                <!-- 容器 -->
                <div class="Rs_content_pane_content_pane_docker">
                    <!-- 浏览窗口 c向类型，r向应用-->
                    <div class="Rs_content_pane_content_pane_docker_type">
                        <div class="Rs_content_pane_content_pane_docker_type_title">
                            <div>type</div>
                        </div>
                        <!-- list area -->
                        <div class="Rs_content_pane_content_pane_docker_container_pane">
                            <div class="Rs_content_pane_content_pane_docker_container_block">
                                <div class="Rs_content_pane_content_pane_docker_container_block_half1">
                                    <img src="../../media/svg/docker.svg" alt="">
                                </div>
                                <div class="Rs_content_pane_content_pane_docker_container_block_half">
                                    <span>
                                        <p>container_name port:</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 文件 -->
                <div>
                    <div></div>
                </div>
                <!-- 日志 -->
                <div></div>
            </div>
        </div>
    </div>
</template>


<style>
@import url('../sheet/resources/service_contect.css');
</style>