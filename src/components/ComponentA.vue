<template>
  <div style="border: 1px solid black; width: 300px">
    Count: {{ getCount }}
    <br />
    <button @click="increaseCount">Increase</button>
  </div>
</template>
<script>
export default {
  name: 'ComponentA',
  methods: {
    increaseCount() {
      this.$store.dispatch('increaseCount');
    },
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
  },
};
</script>
