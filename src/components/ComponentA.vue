<template>
  <div class="component-a-container">
    <h3>I'm component A</h3>
    <p>{{ message }}</p>
    <div style="display: flex; flex-direction: column; justify-content: center">
      <ComponentC></ComponentC>
      <ComponentC></ComponentC>
      <ComponentC></ComponentC>
      <ComponentC></ComponentC>
      <ComponentC></ComponentC>
    </div>
    <button @click="sendMessage">Send Data To Parent</button>
  </div>
</template>

<script>
import ComponentC from './ComponentC.vue';

export default {
  name: 'ComponentA',
  props: ['message', 'message2', 'message3'],
  components: {
    ComponentC,
  },
  methods: {
    sendMessage() {
      this.$emit('messageSent', 'message from component A');
      this.$emit('message1Sent', 'message 1 from component A');
    },
  },
};
</script>

<style>
.component-a-container {
  border: 1px solid blue;
  width: 500px;
}
</style>
