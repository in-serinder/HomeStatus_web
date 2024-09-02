<template>
    <div class="database_body">
        <Database_login class="database_login"></Database_login >
        <Database_status></Database_status>
    </div>
</template>


<script>
import Database_status from './database_son/Database_ststus.vue';
import Database_login from './database_son/Database_login.vue';

export default{
    components:{
        Database_status,
        Database_login
    }
}
</script>


<style>
@import "./sheet/database/database.css"
</style>