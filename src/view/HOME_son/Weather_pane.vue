<template>
    <!-- 天气面板 -->
    <div class="could_pane" :key="weather_pane">
        <div>
            <span>
                <label for="" class="center_text_div" style="margin-top: 5px;" id="could_title"><strong>Weather
                        Condition</strong></label>
                <hr style="width: 90%;">
                <span>
                    <label id="city" class="ostx_text" v-if="!loading && cityData">City:{{ cityData.province }}-{{
                        cityData.city }}({{ cityData.adcode
                        }})</label>
                    <span v-if="loading">Loading...</span>
                    <label id="update_time" class="ostx_text" v-if="!loading && cityData">Report
                        Time:{{ cityData.reporttime }}</label>
                    <span v-if="loading">Loading...</span>
                    <hr style="width: 90%;">
                    <div>
                        <div>
                            <label for="" class="title_text_could">Today's weather:</label>
                        </div>

                        <div>
                            <!-- 手动对齐 -->
                            <ul>
                                <li id="weather" style=" left:0;" class="li_item" v-if="!loading && cityData">Weather:{{
                                    cityData.weather }}</li>
                                    <span class="li_item" v-if="loading">Weather:Loading...</span>

                                <li id="temperature" style=" " class="li_item" v-if="!loading && cityData">
                                    Temperature:{{ cityData.temperature }}</li>
                                    <span class="li_item" v-if="loading">Temperature:Loading...</span>

                                <li id="winddirection" style=" " class="li_item" v-if="!loading && cityData">
                                    Winddirection:{{ cityData.winddirection }}</li>
                                    <span class="li_item" v-if="loading"> Winddirection:Loading...</span>

                                <li id="windpower" style=" " class="li_item" v-if="!loading && cityData">
                                    Windpower:{{ cityData.windpower }}</li>
                                    <span class="li_item" v-if="loading"> Windpower:Loading...</span>

                                <li id="humidity" style=" " class="li_item" v-if="!loading && cityData">
                                    Humidity:{{ cityData.humidity }}</li>
                                    <span class="li_item" v-if="loading">Humidity:Loading...</span>

                            </ul>
                            <a @click="getcity_name" href="#" class="common_text">Custom city address</a>
                            <textarea placeholder="City Name" name="" v-model="city_name" cols="10" rows="1"
                                class="text_area_input"></textarea>
                        </div>
                        <hr style="width: 90%;">
                        <span>
                            <div>
                                <label for="" class="title_text_could">Weather forecast:</label>
                            </div>
                            <!--  -->
                            <!-- <label >{{forecat_weather}}</label> -->
                            <div style="margin-left: 10px;">
                                <table id="weather_table" class="could_table">
                                    <thead>
                                        <tr class="table_td">
                                            <th class="table_td_th">Week</th>
                                            <th class="table_td_th">Weather</th>
                                            <th class="table_td_th">Temperature</th>
                                            <th class="table_td_th">Wind</th>
                                            <th class="table_td_th">WindPower</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table_td_th" id="weather_table">
                                        <tr v-for="item in forecat_weather" :key="item.date">
                                            <!-- vue后 逻辑判断转移三目-->
                                            <td>{{ item.week }}</td>
                                            <td>{{ item.dayweather === item.nightweather ? item.dayweather :
                                                item.dayweather + "->" + item.nightweather }}</td>
                                            <td>{{ item.daytemp === item.nighttemp ? item.daytemp : item.daytemp +
                                                "->" + item.nighttemp }}</td>
                                            <td>{{ item.daywind === item.nightwind ? item.daywind : item.daywind + "->"
                                                + item.nightwind }}</td>
                                            <td>{{ item.daypower === item.nightpower ? item.daypower :
                                                item.daypower + "->" + item.nightpower }}</td>
                                            <!-- data -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div style="position: relativfix;" class="could_status_img_pane">
                                <img ref="cloud_img" class="could_img" :src="weather_icon" alt="Image failed to load">
                                <!-- <img src="../media/lsf-chan.png" alt=""> -->
                            </div>
                        </span>
                    </div>
                </span>
            </span>
        </div>
        <!-- 天气面板结束 -->
    </div>
</template>


<script>

import axios from 'axios';

//图片资源
import weather_default from '../../media/weather/could.png'
import clear_day from '../../media/weather/clear_sun.png'
import clear_to_cloud from '../../media/weather/clear_to_cloud.png'
import fgo from '../../media/weather/fgo.png'
import couldy from '../../media/weather/cloudy.png';
import hail from '../../media/weather/hail.png'
import cool from '../../media/weather/cool.png'
import wind from '../../media/weather/wind.png'
import typhn from '../../media/weather/typhn.png'
import snow from '../../media/weather/snow.png'
import rain_and_snow from '../../media/weather/rain_and_snow.png'
import thunderstorm from '../../media/weather/thunderstorm.png'
import heavy_rain from '../../media/weather/heavy_rain.png'
import light_rain from '../../media/weather/light_rain.png'

import unkonw from '../../media/weather/unknow.png'



export default {


    data() {
        return {
            weather_pane:'Home_weather',

            loading:true,
            API_KEY: "0e4beb61ae3aa262060538e57e5c84db",
            cityData: null,
            today_weather: null,
            forecat_weather: null,
            // 其他          
            city_name: '',
            weather_icon: weather_default,

        };
    },
    created() {  //页面载入
        this.getcity_fromip();

    },


    // f方法
    methods: {

        fadeImg() {
            const cloudImg = this.$refs.cloud_img;
  
  function animate() {
      cloudImg.style.opacity = 1;
      setTimeout(() => {
          cloudImg.style.opacity = 0;
          setTimeout(() => {
              cloudImg.style.opacity = 1;
              animate(); // 递归调用以实现循环
          }, 2000);
      }, 2000);
  }

  animate(); // 第一次调用开始动画
        },



        // 



        getcity_fromip() {   //获取位置ip
            axios.get("https://restapi.amap.com/v3/ip?key=" + this.API_KEY)
                .then(response => response.data)
                .then(data => this.get_weather(data.adcode))
                .catch(error => console.error(error));

        },
        getcity_name() { //获取城市名
            const name = this.city_name;
            axios.get("https://restapi.amap.com/v3/config/district?keywords=" + name + "&subdistrict=2&key=" + this.API_KEY)
                .then(response => response.data)
                .then(data => this.get_weather(data.districts[0].adcode))
                .catch(error => console.error(error));

        },
        get_weather(city_code) { //双获取
            axios.all([
                axios.get("https://restapi.amap.com/v3/weather/weatherInfo?city=" + city_code + "&key=" + this.API_KEY),
                axios.get("https://restapi.amap.com/v3/weather/weatherInfo?city=" + city_code + "&extensions=all&key=" + this.API_KEY)
            ])
                .then(axios.spread((today, forecast) => {
                    //数据集

                    const today_data = today.data;
                    const forecast_data = forecast.data;
                    this.Update_weather(today_data);
                    this.Set_table(forecast_data);

                    console.log("USE API")
                }))

        },//更新
        Update_weather(data) {
            this.cityData = data.lives[0];
            //console.log(data.lives[0])
            this.loading=false;
            //启用天气图样式
            this.fadeImg()
            this.fuzzyKey(data.lives[0].weather)

        },
        Set_table(data) {
            const forecast_list = data.forecasts[0].casts;
            //  console.log(forecast_list)
            this.forecat_weather = forecast_list;



        },
        fuzzyKey(str) { ///天气图标

            var key = ["晴", "多云", "大雨", "雷阵雨", "雨", "雨夹雪", "雪", "台风", "雾", "风", "冻", "冰", "阴"];

            console.log(str)
            if (key.includes(str)) {
                this.changeCouldIcon(str);
            } else {
                for (var i = 0; i < key.length; i++) {
                    if (str.includes(key[i])) {
                        this.changeCouldIcon(key[i]);
                        // console.log(key[i])
                        break;
                    }

                }
            }
        }, changeCouldIcon(key) {

            switch (key) {
                case "晴": this.weather_icon = clear_day; break;
                case "多云": this.weather_icon = clear_to_cloud; break;
                case "大雨": this.weather_icon = heavy_rain; break;
                case "雷阵雨": this.weather_icon = thunderstorm; break;
                case "雨": this.weather_icon = light_rain; break;
                case "雨夹雪": this.weather_icon = rain_and_snow; break;
                case "雪": this.weather_icon = snow; break;
                case "台风": this.weather_icon = typhn; break;
                case "雾": this.weather_icon = fgo; break;
                case "风": this.weather_icon = wind; break;
                case "冻": this.weather_icon = cool; break;
                case "冰": this.weather_icon = hail; break;
                case "阴": this.weather_icon = couldy; break;
                default: this.weather_icon = unkonw; break;
            }

        }


    }
}
</script>


<style>
@import "../sheet/home_right.css";
</style>
