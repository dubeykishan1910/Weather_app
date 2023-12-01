<template>

<div class="container ">
    <div class="d-flex justify-content-between">
        

        <div class="card main-div w-100 ">
            <div class="p-3">
                <h2 class="mb-1 day">Today</h2>
                <p class="text-light date mb-0">{{ date }}</p>
                <small>{{time}}</small>
                <h2 class="place">{{ name }} <small>{{country}}</small></h2>
                <div class="temp">
                    <h1 class="weather-temp">{{ temperature }} &deg;</h1>
                    <h2 class="text-light">{{ description }} <img :src="iconUrl"></h2>
                </div>
            </div>
        </div>

        <div class="card card-2 w-100">
            <table class="m-4">
                <tbody>
                <tr>
                    <th>Sea Level</th>
                    <td v-if="sea_level > 0">{{ sea_level }}</td>
                    <td v-else>Null</td>
                </tr>
                <tr>
                    <th>Humidity</th>
                    <td>{{ humidity }}</td>
                </tr>
                <tr>
                    <th>Wind</th>
                    <td>{{ wind }}</td>
                </tr>
                </tbody>
            </table>

            <DaysWeather :cityname="cityname" />

            <div id="div_Form" class="d-flex m-3 justify-content-center">
                <form action="">
                    <input type="button" value="Change Location" @click="changeLocation" class="btn btn-primary btn-search">
                </form>
            </div>
        </div>
    </div>

    
</div>
</template>

<script>
import axios from 'axios';
import DaysWeather from '@/Views/DaysWeather.vue';
export default {
  name: 'WeatherC',
  components:{
    DaysWeather
  },
  props:{
    city: String,
  },
  data(){
    return{
        cityname : this.city,
        temperature : null,
        description:  null,
        iconUrl : null,
        data: null,
        time: null,
        name: null,
        country: null,
        sea_level: null,
        humidity: null,
        wind: null,
        monthNames: ["January","February","March","April","May","June",
                     "July","August","September","October","November","December"],

    }
  },
  methods:{
        changeLocation(){
            window.location.reload();
        }
  },
  async created(){
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=68b5081bbe110361350627e05f68d023`)
    
    const weatherData = response.data;
    this.temperature = Math.round(weatherData.main.temp);
    this.description = weatherData.weather[0].description;
    this.name = weatherData.name;
    this.country = weatherData.sys.country;
    this.wind = weatherData.wind.speed;
    this.sea_level = weatherData.main.sea_level;
    this.humidity = weatherData.main.humidity;


    this.iconUrl = `https://api.openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const d= new Date();
    this.date = d.getDate() + '-' + this.monthNames[d.getMonth()] + '-' + d.getFullYear();
    this.time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    
  }
}
</script>

<style scoped>

.weather-temp{
    margin: 0;
    font-weight: 700;
    font-size: 4em;
}
h2.mb-1.day{
    font-size: 3rem;
    font-weight: 400;
}
.main-div{
    color: #000;
    border-radius: 20px;
    background-image: url("https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_640.jpg");
    background-size: cover;
    background-position: center;
    /* background-blend-mode: overlay; */
    background-color: rgba(0, 0, 0, .5);
    background-repeat: no-repeat;
    height: 50vh;
}
.p-3{
    color: aliceblue;
}

.temp{
    position: absolute;
    bottom: 0;
}
.main-div:hover{
    transform: scale(1.1);
    transition: transform 0.5s ease;
    z-index: 1;
}

.card-2{
    background-color: #212730;
    border-radius: 20px;
}



.card-details{
    margin-left:19px;
}

.btn-search{
  background: linear-gradient(to right,cyan,magenta);
}


</style>