<template>
  <div>
    <header></header>
    <h1>{{ message }}</h1>
    <tabs></tabs>
  </div>
</template>

<script>
    import Tabs from './Tabs.vue';
    import Header from './Header.vue';

    export default {
        name: 'home',
        data() {
            return {
                message: 'Hello, Vue!'
            };
        },
        components: {
            Tabs,
            Header
        }
    };
</script>

<style>
</style>
