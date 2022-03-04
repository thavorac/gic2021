<template>
  <div id="app">
    <h3>I'm the biggest one!</h3>
    <p>X = {{ x }}</p>
    <div style="display: flex; justify-content: space-between">
      <ComponentA
        @messageSent="recieveFromChild"
        @message1Sent="recieveFromChild"
        message1="Another message"
        message="Message from parent"
      ></ComponentA>
      <ComponentB number="10" :x="x" @xChanged="increaseX"></ComponentB>
    </div>
  </div>
</template>

<script>
import ComponentA from './components/ComponentA.vue';
import ComponentB from './components/ComponentB.vue';

export default {
  name: 'App',
  data() {
    return {
      x: 1,
    };
  },
  components: {
    ComponentA,
    ComponentB,
  },
  methods: {
    recieveFromChild(value) {
      console.log('value from child', value);
    },
    increaseX(value) {
      this.x = value;
    },
  },
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
  border: 1px solid green;
  padding: 20px;
}
</style>
