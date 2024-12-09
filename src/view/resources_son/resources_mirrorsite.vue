<template>

    <div class="RSM_body">
        <!-- title -->
        <div class="RSM_body_title">
            <img src="../../media/svg/mirrors_repo.svg" alt="">
            <div>Mirrors Stie</div>
            <!-- <a href="#">>>Page</a> -->
            <!-- 路由无法跳转 -->
            <router-link href="javascript:void(0)" to="/Resources/IndependentMirrorPage">
                >> Page
            </router-link>
        </div>
        <!-- body -->
        <div class="RSM_body_content">
            <!-- dir comp -->
            <div>
                <img src="../../media/svg/mirror_Files.svg" alt="">
                <a href="">file_name</a>

                <span> sync_status--sync_time</span>

            </div>
        </div>
    </div>
</template>

<style>
@import url(../sheet/resources/mirrors_comp.css);
</style>