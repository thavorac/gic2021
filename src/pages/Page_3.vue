<template>
  <div>
    <router-link :to="{ name: 'Page1', params: { test: 'hello' } }"
      >Page 1</router-link
    >
    <router-link to="/page2">Page 2</router-link>
    <h1>Page 3</h1>
  </div>
</template>
