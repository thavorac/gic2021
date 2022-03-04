<template>
  <div class="component-c-container">
    <h3>I'm component C</h3>
    X = {{ x }}
    <button @click="increaseX">Increase X</button>
  </div>
</template>

<script>
export default {
  name: 'ComponentC',
  props: ['x'],
  methods: {
    increaseX() {
      this.$emit('xChanged', this.x + 1);
    },
  },
};
</script>

<style>
.component-c-container {
  border: 1px solid rgb(72, 255, 0);
  width: 300px;
}
</style>
