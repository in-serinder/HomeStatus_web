<template>
    <div class="Netinfo_body">
        <Netinfo_selectlist></Netinfo_selectlist>
        <div>
            <Netinfo_content></Netinfo_content>
            <Netinfo_baseinfo></Netinfo_baseinfo>
        </div>
    </div>
</template>



<script>
import Netinfo_selectlist from '../Netinfo/Netinfo_selectlist.vue';
import Netinfo_content from '../Netinfo/Netinfo_content.vue';
import Netinfo_baseinfo from '../Netinfo/Netinfo_baseinfo.vue';


export default {
    components: {
        Netinfo_selectlist,
        Netinfo_content,
        Netinfo_baseinfo,
    },
    data() {
        return {
            selectlist: [
                {
                    name: 'selectlist',
                    label: '选择列表',
                    component: Netinfo_selectlist,
                },
            ],
        };
    },
    methods: {
    }
}
</script>

<style>
@import url(../sheet/netinfo.css);
</style>