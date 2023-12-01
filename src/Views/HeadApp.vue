<template>
    <div id="app">
      <main>
          <div class="search-box p-5">
            <h1 class="mb-3">weather App</h1>
            <div class="d-flex justify-content-center">
              
                <input name="" id="" type="text" class="search-bar" v-model="city" placeholder="Enter a city">
                <button class="btn-search btn btn-primary" @click="searchWeather">Search</button>
            </div>
          </div>
          <div class="aside">
            <WeatherC :city="city" v-if="showWeather"/>
          </div>
      </main>
    </div>
</template>


<script>
import WeatherC from '../components/WeatherC.vue'
export default {
  name: 'HeadApp',
  components:{
    WeatherC
  },
  data(){
    return{
      city: '',
      showWeather: false,
    }
  },
  methods:{
    async searchWeather() {
      this.showWeather=false;
      await this.$nextTick();
      this.showWeather=true;
    }
  }
}

</script>


<style scoped>
#app{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-image: url("../assets/cold.jpg");
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main{
  min-height: 90vh;
  padding: 25px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25, rgba(0,0,0,0.75)));

}
.search-box .search-bar{
  display: block;
  width: 50%;
  margin-right: 10px;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);

  appearance: none;
  border: none;
  background: none;
  outline: none;

  background-color: rgba(255,255,255, 0.5);
  border-radius: 10px;
  transition: 0.4s;
  
}
.search-box .search-bar:focus{
  background-color: rgba(255,255,255, 0.75);
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  border-radius: 6px 0px 16px 0px;
  
}

.btn-search {
  background: linear-gradient(to right,cyan,magenta);
}
</style>