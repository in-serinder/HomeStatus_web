<template>
    <div class="remote_body">
        <Remote_login class="remote_login"></Remote_login>
        <Remote_console></Remote_console>
    </div>
</template>

<script>
import Remote_login from './remote_son/Remote_login.vue';
import Remote_console from './remote_son/Remote_console.vue';


export default {
    components:{
        Remote_login,
        Remote_console
    },
    created(){

    }
}
</script>

<style>
@import './sheet/remote.css';
</style>