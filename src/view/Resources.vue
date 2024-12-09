<template>
    <div class="resources_body">
        <!-- <iframe src="cus/index.htm" frameborder="0" class="fm_juess"></iframe> -->
        <!-- <Resources_all></Resources_all> -->
        <router-view></router-view>

    </div>

</template>
<script>

import Resources_all from './resources_son/resources_all.vue';
import resources_IndependentPage from './resources_son/resources_IndependentPage.vue';


export default {
    components: {

        Resources_all,
        resources_IndependentPage
    }
}
</script>

<style>
@import './sheet/resources.css'
</style>