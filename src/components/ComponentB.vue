<template>
  <div style="border: 1px solid black; width: 300px">
    Count: {{ getCount }}
    <br />
    <button @click="decreaseCount">Decrease</button>
  </div>
</template>
<script>
export default {
  name: 'ComponentB',
  methods: {
    decreaseCount() {
      this.$store.dispatch('decreaseCount');
    },
  },
  computed: {
    getCount() {
      return this.$store.getters.getCount;
    },
  },
};
</script>
