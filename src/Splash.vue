<template>
  <div>
    <div class="Splash--background">
    </div>
    <div class="Splash--container">
      <h1>Hold styr på kantinen  og på hvornår du skal huske madpakken!</h1>

      <v-select v-model="selected" class="select-style" label="name"
                :options="cantinas" :on-change="fisk()">
      </v-select>
    </div>
  </div>
</template>

<script>
    const axios = require('axios');

    export default {
        name: 'splash',
        methods: {
            fisk() {
                if (this.selected) {
                    location.href = 'Home'
                }
            }
        },
        mounted () {
            let self = this;

            axios.get('https://skaljeghavemadpakkemedidag.mikkelricky.dk/.json')
                .then(function (response) {
                    self.cantinas = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        data () {
            return {
                selected: null,
                cantinas: []
            };
        }
    };
</script>

<style>
  .Splash--container {
    width: 100%;
    height: 100%;
    color: white;
    position: absolute;

    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .Splash--background {
    width: 100%;
    height: 100%;
    background: url('./splash.jpg');
    background-size: cover;
    position: absolute;
  }

  .Splash--background::after {
    content: '';
    width: 100%;
    height: 100%;
    background: rgba(40, 51, 63, 0.8);
    position: absolute;
  }

</style>
