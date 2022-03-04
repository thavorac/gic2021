<template>
  <div class="component-b-container">
    <h3>I'm component B</h3>
    <p>X = {{ x }}</p>
    <ComponentC :x="x" @xChanged="increaseX"></ComponentC>
  </div>
</template>

<script>
import ComponentC from './ComponentC.vue';
export default {
  name: 'ComponentB',
  props: ['number', 'x'],
  components: {
    ComponentC,
  },
  methods: {
    increaseX(value) {
      this.$emit('xChanged', value);
    },
  },
};
</script>

<style>
.component-b-container {
  border: 1px solid rgb(255, 77, 0);
  width: 500px;
}
</style>
