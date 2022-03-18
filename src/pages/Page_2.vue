<template>
  <div>
    <router-link :to="{ name: 'Page1', params: { test: 'hello' } }"
      >Page 1</router-link
    >
    <router-link to="/page3">Page 3</router-link>
    <h1>Page 2</h1>
    <router-view></router-view>
  </div>
</template>
