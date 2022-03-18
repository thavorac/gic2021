<template>
  <div>
    <h1>This is home page</h1>
    <router-link :to="{ name: 'Page1', params: { test: 'hello' } }"
      >Page 1</router-link
    >
    <router-link to="/page2">Page 2</router-link>
    <router-link to="/page3">Page 3</router-link>
  </div>
</template>
