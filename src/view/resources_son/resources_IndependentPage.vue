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
                    <!-- 迭代元素 -->
                    <span v-for="(item, index) in Mirror_site_names" :key="index" :ref="'site' + 'index'"
                        @mouseenter="enter_site_style(index)" @mouseleave="leave_site_style(index)"
                        @click="this.internet_site_select2(index)">
                        {{ item.text }}
                    </span>

                    <!-- <span @click="internet_site_select('USTC')"
                        :class="{ 'RSMP_body_mirror_sites_content_select_iselected': style_isselect }"
                        @mouseenter="style_isselect = true" @mouseleave="style_isselect = false">
                        <p>USTC</p>
                    </span>
                    <span @click="internet_site_select('Tsinghua')">
                        <p>Tsinghua</p>
                    </span>
                    <span @click="internet_site_select('Lzu')">
                        <p>Lzu</p>
                    </span>
                    <span @click="internet_site_select('SJTU')">
                        <p>SJTU</p>
                    </span>
                    <span @click="internet_site_select('163')">
                        <p>163</p>
                    </span> -->
                </div>
                <iframe :src="iframe_url" frameborder="0"></iframe>
            </div>
        </div>
    </div>
</template>

<script>

import config from '../../config';
export default {
    data() {
        return {
            iframe_url: '',
            style_isselect: false,
            Mirror_site_names: [{ text: 'USTC' }, { text: 'Tsinghua' }, { text: 'Lzu' }, { text: 'SJTU' }, { text: '163' }]
        }
    },
    created() { },
    mounted() {
        this.internet_site_select('USTC')
    },
    methods: {
        // 预留 
        internet_site_select(sitename) {
            switch (sitename) {
                case 'USTC': this.iframe_url = config.Mirror_site.USTC; break;
                case 'Tsinghua': this.iframe_url = config.Mirror_site.Tsinghua; break;
                case 'Lzu': this.iframe_url = config.Mirror_site.Lzu; break;
                case 'SJTU': this.iframe_url = config.Mirror_site.SJTU; break;
                case '163': this.iframe_url = config.Mirror_site.Site163; break;
            }
            // console.log(this.iframe_url)


        },
        internet_site_select2(arr_number) {
            let site_list = [config.Mirror_site.USTC, config.Mirror_site.Tsinghua, config.Mirror_site.Lzu, config.Mirror_site.SJTU, config.Mirror_site.Site163]
            this.iframe_url = site_list[arr_number]
            // console.log(this.iframe_url,)
        },
        enter_site_style(index) {
            this.hoveredIndex = index;
            // 获取所有的 span 元素,使用 querySelectorAll 方法
            const selectElements = document.querySelectorAll('.RSMP_body_mirror_sites_content_select span');
            selectElements[index].classList.add('RSMP_body_mirror_sites_content_select_iselected');
            // 添加选择
            // this.internet_site_select2(index)

        },
        leave_site_style(index) {
            // 移除 hover 样式
            // console.log(index)
            this.hoveredIndex = -1;
            const selectElements = document.querySelectorAll('.RSMP_body_mirror_sites_content_select span');
            selectElements[index].classList.remove('RSMP_body_mirror_sites_content_select_iselected');
        }
    }
}
</script>

<style>
@import url(../sheet/resources/mirrors_page.css);
@import url(../sheet/gobal.css);
</style>