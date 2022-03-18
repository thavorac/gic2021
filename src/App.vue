<template>
  <div>
    <h1>This is the Home Page</h1>
    <router-link to="/page1">Page 1</router-link>
    <router-link to="/page2">Page 2</router-link>
    <router-link to="/page3">Page 3</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  margin: 5px;
}
</style>
