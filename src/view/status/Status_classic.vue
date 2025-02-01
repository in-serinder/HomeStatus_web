<template>
    <div class="container">
        <h1 class="header">服务器状态监控</h1>
        <div class="uptime" id="uptime_show"></div>
        <div class="status">
            <h2>CPU 使用率</h2>
            <div class="progress-bar">
                <div class="progress" id="cpu-progress"></div>
            </div>
            <div class="label" id="cpu-label"></div>
        </div>
        <div class="status">
            <h2>CPU 温度</h2>
            <div class="progress-bar">
                <div class="progress" id="cpu-temp-progress"></div>
            </div>
            <div class="label" id="cpu-temp-label"></div>
        </div>
        <div class="status">
            <h2>内存使用率</h2>
            <div class="progress-bar">
                <div class="progress" id="mem-progress"></div>
            </div>
            <div class="label" id="mem-label"></div>
        </div>
        <div class="status">
            <h2>Swap 使用率</h2>
            <div class="progress-bar">
                <div class="progress" id="swap-progress"></div>
            </div>
            <div class="label" id="swap-label"></div>
        </div>
        <div class="status">
            <h2>磁盘使用情况</h2>
            <ul id="disk-list"></ul>
        </div>
        <div class="status">
            <h2>网络状态</h2>
            <div style="border: 2px solid black; height: 200px;width: 90%;margin: 0 auto;">
                <li id="ip">IP:</li>
                <li id="mac">MAC:</li>
            </div>
            
            <div id="network-status"></div>
        </div>
    </div>
    <br>
</template>


<script>

import config from '../../config';

function formatTime(seconds) {
  let days = Math.floor(seconds / (24 * 3600));
  let hours = Math.floor((seconds % (24 * 3600)) / 3600);
  let minutes = Math.floor((seconds % 3600) / 60);
  let remainingSeconds = seconds % 60;

  let formattedTime = `${days} D, ${hours} h, ${minutes} m, ${Math.floor(remainingSeconds).toLocaleString()} s`;
  return formattedTime;
}

        function updateStatus(statusData) {
            
            var uptimeElement = document.getElementById('uptime_show');
            uptimeElement.innerHTML = '计算机已启动: ' + formatTime(statusData.uptime);

            
            var cpuProgress = document.getElementById('cpu-progress');
            var cpuLabel = document.getElementById('cpu-label');
            cpuProgress.style.width = statusData.cpu_usage + '%';
            cpuLabel.innerHTML = '使用率: ' + statusData.cpu_usage + '%';

            
            var cpuTempProgress = document.getElementById('cpu-temp-progress');
            var cpuTempLabel = document.getElementById('cpu-temp-label');
            cpuTempProgress.style.width = statusData.cpu_temp + '%';
            cpuTempLabel.innerHTML = '温度: ' + statusData.cpu_temp + '℃';

            
            var memProgress = document.getElementById('mem-progress');
            var memLabel = document.getElementById('mem-label');
            memProgress.style.width = statusData.mem_usage.percent + '%';
            memLabel.innerHTML = '使用率: ' + statusData.mem_usage.percent + '%'+'\t总大小:'+(statusData.mem_usage.total/(1024*1024)).toFixed(2)+"MB\t"+(statusData.mem_usage.used/(1024*1024)).toFixed(2)+'MB';

            
            var swapProgress = document.getElementById('swap-progress');
            var swapLabel = document.getElementById('swap-label');
            swapProgress.style.width = statusData.swap_usage.percent + '%';
            swapLabel.innerHTML = '使用率: ' + statusData.swap_usage.percent + '%'+'\t总大小'+(statusData.swap_usage.total/(1024*1024)).toFixed(2)+'\tMB'+(statusData.swap_usage.used/1024*1024)+'MB';

            
            var diskList = document.getElementById('disk-list');
            diskList.innerHTML = '';
            for (var i = 0; i < statusData.disk_usages.length; i++) {
                var disk = statusData.disk_usages[i];
                var diskItem = document.createElement('li');
                if(disk.total_space>1024*1024*1024){
                diskItem.innerHTML = disk.device + ': 总大小 ' +(disk.total_space/(1024*1024*1024)).toFixed(2) + 'GB , 已使用 ' + (disk.used_space/(1024*1024*1024)).toFixed(2)+'GB';
                }else{
                    diskItem.innerHTML = disk.device + ': 总大小 ' +(disk.total_space/(1024*1024)).toFixed(2) + 'MB , 已使用 ' + (disk.used_space/(1024*1024)).toFixed(2)+'MB';
                }
                diskList.appendChild(diskItem);
            }

           
            // var networkStatus = document.getElementById('network-status');
            var networkStatus_ip = document.getElementById('ip');
  var networkStatus_mac = document.getElementById('mac');

  const ipAddresses = Object.values(statusData.network_status).flatMap(status => {
    return status.map(data => {
      return data[1]; 
    });
  });

  const macAddresses = Object.values(statusData.network_status).flatMap(status => {
    return status.map(data => {
      return data[2]; 
    });
  });


  networkStatus_ip.innerHTML = 'IP: ' + ipAddresses.join(', ');
  networkStatus_mac.innerHTML = 'MAC: ' + macAddresses.join(', ');
        }

        function fetchData() {
            fetch('http://'+config.api.baseURL+':'+config.api.port.class_status)
                .then(response => response.json())
                .then(data => updateStatus(data))
                //.catch(error => console.error(error));

            setTimeout(fetchData, 1000); 
        }

        fetchData();

        
</script>



<style>
@import '../sheet/status/classic.css';


</style>