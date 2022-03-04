<template>
  <div class="component-b-container">
    <h3>I'm component B</h3>
    <p>
      {{ number }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ComponentB',
  props: ['number'],
};
</script>

<style>
.component-b-container {
  border: 1px solid rgb(255, 77, 0);
  width: 500px;
}
</style>
