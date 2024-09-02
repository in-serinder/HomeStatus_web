<template>
    <div class="remote_console_body">
        <div class="remote_console_body_title">
            <img src="../../media/svg/contect_offline.svg" class="remote_console_body_title_img">
            <label class="remote_console_body_title_status_text">Offline-User</label>
        </div>
        <div class="output_console_body">
            <label class="output_console_text" >User@login:</label>
            <input  type="text" class="input_console_text">
            <a-drawer></a-drawer>
        </div>

    </div>
</template>

<script>
import { Terminal } from '@xterm/xterm';
import { FitAddon } from "xterm-addon-fit";




</script>