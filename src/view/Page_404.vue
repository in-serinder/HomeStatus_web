<template>
    <div class="page404">
        <h1 class="page404_title" style="font-size: 200px;text-align: center;">404</h1>
        <h3 class="page404_title">Pages Not Found</h3>
        <h4 class="page404_title">
            <span>Sorry, the page you are looking for does not exist.
                <br>
                <span style="color: brown;cursor: pointer;" @click="copy_router_path">URL:{{ $route.path }}</span>
            </span>
            <br>
            <router-link to="/">
                <span>Back to Home >></span>
            </router-link>
        </h4>

        <img :src="img_index" alt="404team">
    </div>
</template>

<script>
import ump45_img from '../media/p_img/124907858_p0.jpg';
import ump9_img from '../media/p_img/124907858_p1.jpg';
import hk416_img from '../media/p_img/124907858_p2.jpg';
import g11_img from '../media/p_img/124907858_p3.jpg';

export default {
    data() {
        return {
            imgs: [
                ump45_img,
                ump9_img,
                hk416_img,
                g11_img
            ],
            img_index: ump45_img,
        }
    },
    created() {

    },
    mounted() {
        this.random_img()
    },
    methods: {
        random_img() {
            const random_index = Math.floor(Math.random() * 4);
            this.img_index = this.imgs[random_index];
            console.log(this.img_index)
        },
        copy_router_path() {
            navigator.clipboard.writeText(this.$route.path)
            alert("copy success")
        }

    }
}



</script>

<style>
@import url(./sheet/404page.css);
</style>