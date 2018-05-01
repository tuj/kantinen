<template>
  <div class="Tabs--container">
    <ul>
      <li v-for="tab in tabs">{{tab.text}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'tabs',
        data() {
            return {
                tabs: [
                    {
                        text: 'Spis nu'
                    },
                    {
                        text: 'Menu'
                    },
                    {
                        text: 'Favoritter'
                    },
                    {
                        text: 'Indstillinger'
                    },
                ]
            };
        }
    };
</script>

<style>
  .Tabs--container {
    background-color: grey;
  }
</style>
