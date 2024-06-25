<template>
  <div id="app" :class="weatherClass">
    <div class="weather-container">
      <h2>Weather Widget</h2>
      <div class="weather-card">
        <h3>Live Weather</h3>
        <input type="text" v-model="location" placeholder="Enter city name" />
        <button @click="getWeather">Search</button>
        <div v-if="weather">
          <p><strong>Location:</strong> {{ weather.name }}</p>
          <p><strong>Temperature:</strong> {{ weather.main.temp }}°C</p>
          <p><strong>Description:</strong> {{ weather.weather[0].description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

const apiKey = '397a3f509e20de3d055f4321ba97cbea'; 

export default {
  data() {
    return {
      location: 'jakarta',
      weather: null,
    };
  },
  computed: {
    weatherClass() {
      if (!this.weather) return '';
      const description = this.weather.weather[0].description.toLowerCase();
      if (description.includes('rain')) return 'rainy';
      if (description.includes('cloud')) return 'cloudy';
      if (description.includes('clear')) return 'clear';
      if (description.includes('snow')) return 'snowy';
      return 'default';
    }
  },
  methods: {
    async getWeather() {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}&units=metric`;
      try {
        const response = await axios.get(apiUrl);
        this.weather = response.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #000000;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-position: center;
}

.weather-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.weather-card {
  background-color: rgba(104, 104, 104, 0.8);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center; /* Center align text */
} 

input[type="text"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #5e0300;
  color: rgb(255, 255, 255);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #250100;
}

.rainy {
  background-image: url('https://publish.purewow.net/wp-content/uploads/sites/2/2024/01/Things-to-Do-in-NYC-On-a-Rainy-Day-UNI.jpg?fit=2050%2C1100'); /* Replace with your image URL */
}

.cloudy {
  background-image: url('https://img.freepik.com/free-photo/beautiful-sky-with-clouds_58702-1456.jpg?size=626&ext=jpg&ga=GA1.2.1177057745.1716824523&semt=sph');
}

.clear {
  background-image: url('https://s7d2.scene7.com/is/image/TWCNews/1031_nc_sunny_weather_2-1'); 
}

.snowy {
  background-image: url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fsnowy-background.html&psig=AOvVaw3SXQXVe2mW6D6sbMFz6RiM&ust=1719407377044000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiA593g6faGAxXa1jgGHUHlD7kQjRx6BAgAEBU');
}

.default {
  background-image: grey
  ;
}
</style>
