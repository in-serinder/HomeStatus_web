<template>
    <div class="RDD_body">
        <!-- theme -->
        <div class="RDD_docker_pane1P">
            <div class="RDD_docker_pane1P_container">
                <div class="RDD_docker_pane1P_container_icon">
                    <img src="../../media/svg/dockerblk.svg" alt="">
                </div>
                <!-- 内容 -->
                <div class="RDD_docker_pane1P_container_info">
                    <p>container_name</p>
                    <p>Port:<a href="#">10086</a></p>
                    <hr>
                    <p>IP Host:</p>
                    <p>DockerHub: <a href="">contrainname</a></p>
                    <p>Introduce:</p>
                    <hr>
                    <span>Status</span>
                    <div>
                        <img src="../../media/svg/running_no.svg" alt="">
                    </div>
                </div>
                <div class="RDD_docker_pane1P_container_link">
                    <img src="../../media/svg/link.svg" alt="">
                    <p>link to Contrainer</p>

                </div>
            </div>
        </div>
        <!-- 内容 -->
        <div class="RDD_docker_pane2P">
            <div class="RDD_docker_pane2P_title">
                <p>contrainname</p>
            </div>
            <div class="RDD_docker_pane2P_info">
                <!-- 内容直接填充至此 -->
                info
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {

    },
    created() { }
}

</script>


<style>
@import url(../sheet/resources/docker_details.css);
</style>