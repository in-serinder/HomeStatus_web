<template>
    <div class="resources_body">
        <!-- <iframe src="cus/index.htm" frameborder="0" class="fm_juess"></iframe> -->

        <Resources_Online></Resources_Online>
        <Resources_Services></Resources_Services>
        <ResourcesMirrorSite></ResourcesMirrorSite>

    </div>
</template>


<script>
import Resources_Services from './resources_services.vue';
import Resources_Online from './resources_online.vue';
import ResourcesMirrorSite from './resources_mirrorsite.vue';


export default {
    components: {
        Resources_Services,
        Resources_Online,
        ResourcesMirrorSite
    }
}
</script>

<!-- 套用 -->

<style>
@import '../sheet/resources.css'
</style>