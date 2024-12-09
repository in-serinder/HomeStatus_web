<template>
    <div class="RSMP_body">
        <div class="RSMP_body_mirror_sites">
            <div class="RSMP_body_mirror_sites_title">
                <span>Local Mirror Sites</span>
            </div>
            <!-- content -->
            <div class="RSMP_body_mirror_sites_content"></div>
        </div>
        <div class="RSMP_body_mirror_sites">
            <div class="RSMP_body_mirror_sites_title">
                <span>Internet Mirror Sites</span>
            </div>
            <!-- content -->
            <div class="RSMP_body_mirror_sites_content">
                <div class="RSMP_body_mirror_sites_content_select">
                    <span>
                        <p>USTC</p>
                    </span>
                    <span>
                        <p>Tsinghua</p>
                    </span>
                    <span>
                        <p>Lzu</p>
                    </span>
                    <span>
                        <p>Aliyun</p>
                    </span>
                    <span>
                        <p>163</p>
                    </span>
                </div>
                <iframe src="https://mirrors.ustc.edu.cn/" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    }
}
</script>

<style>
@import url(../sheet/resources/mirrors_page.css);
@import url(../sheet/gobal.css);
</style>