import  { createApp } from 'vue'
<script setup>
import { createApp } from 'vue';

const app = createApp({
  data() {
    return {
      tasksArr: [1, 2, 3],
      enteredVal: ''
    }
  },
  methods: {
    addToArr() {
      this.tasksArr.push(this.enteredVal.trim())
    }
  }})

</script>

<template>
  <div class="header">
    <div class="header_weather_card">
        <div class="header_weather">
            <p>26 °C</p>
            <!-- <img src="Images/WeatherIcon - 2-52 (1).png" alt=""> -->
        </div>
        <div class="header_date">
            <p>1st May 23</p>
        </div>
        <div class="header_location">
            <!-- <img src="Images/Group 703 (2).png" alt=""> -->
            <p>Ghatkesar, India</p>
        </div>
    </div>
    <div class="header_title">
        <div class="header_top_item">
            <div>
                <div class="header_top_horizontal_stripe"></div>
                <h1>TO-DO NOW</h1>
                <div class="header_top_horizontal_stripe"></div>
            </div>
        </div>
        <div class="header_bottom_item">
            <div class="header_bottom_horizontal_stripe"></div>
            <!-- <div class="header_bottom_image"><img src="Images/NotePencil.png" alt=""></div> -->
            <div class="header_bottom_horizontal_stripe"></div>
        </div>
    </div>
</div>

  <div class="form_container">
    <form id="taskForm" @submit.prevent="addToArr">
      <input class="form_input" type="text" v-model="enteredVal">
      <button class="form_button" type="submit">Send-Task</button>
    </form>
  </div>
  <div id="arrContainer" class="array_container">
    <div v-for="task in tasksArr" class="array_item">
      <p class="array_text"> 
        {{ task }} 
      </p>
      <button class="array_delete_btn">

      </button>
    </div>
  </div>
</template>

<style scoped>

</style>