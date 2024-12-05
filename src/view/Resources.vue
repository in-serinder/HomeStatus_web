<template>
    <div class="resources_body">
        <!-- <iframe src="cus/index.htm" frameborder="0" class="fm_juess"></iframe> -->
        <Resources_Online></Resources_Online>
        <Resources_Services></Resources_Services>
        <ResourcesMirrorSite></ResourcesMirrorSite>
        <router-view></router-view>
    </div>
</template>
<script>
import Resources_Services from './resources_son/resources_services.vue';
import Resources_Online from './resources_son/resources_online.vue';
import ResourcesMirrorSite from './resources_son/resources_mirrorsite.vue';
import resources_IndependentPage from './resources_son/resources_IndependentPage.vue';


export default {
    components: {
        Resources_Online,
        Resources_Services,
        ResourcesMirrorSite,
        resources_IndependentPage
    }
}
</script>

<style>
@import './sheet/resources.css'
</style>