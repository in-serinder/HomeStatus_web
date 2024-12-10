<template>
    <div class="NHD_body">
        <!-- host -->
        <div class="NHD_pane_left">
            <div class="NHD_host_info">
                <div class="NHD_host_info_icon">
                    <img src="../../media/svg/host.svg" alt="">
                </div>
                <!--  -->
                <div class="NHD_host_info_text">
                    <ul>
                        <li>
                            <p>主机名</p>
                            <p>hostname</p>
                        </li>
                        <li>
                            <p>IP地址</p>
                        </li>
                        <li>
                            <p>MAC地址</p>
                        </li>
                        <li>
                            <p>发现时间</p>
                        </li>
                        <li>
                            <p>操作系统</p>
                        </li>
                        <li>
                            <p>状态</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- detail -->
        <div class="NHD_pane_right">
            <div class="NHD_detail">
                <div class="NHD_detail_baseinfo">
                    <div class="NHD_detail_baseinfo_title">
                        <p>Basic information</p>
                        <span>Get</span>
                    </div>
                    <div class="NHD_detail_baseinfo_content">
                        <ul>
                            <li>
                                <p>主机名:</p>
                                <p>hostname:</p>
                            </li>
                            <li>
                                <p>IP地址:</p>
                            </li>
                            <li>
                                <p>MAC地址:</p>
                            </li>
                            <li>
                                <p>发现时间:</p>
                            </li>
                            <li>
                                <p>操作系统:</p>
                            </li>
                            <li>
                                <p>状态:</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="NHD_detail_openport">
                    <div class="NHD_detail_baseinfo_title">
                        <p>Safe information</p>
                        <span>Get</span>
                    </div>
                    <div class="NHD_detail_baseinfo_content">
                        <ul>
                            <li>
                                <p>开放端口数:</p>
                                <p>连通性:</p>
                            </li>
                            <li>
                                <p>开放端口:</p>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style>
@import url(../sheet/netinfo/netinfo_hostdetail.css);
</style>