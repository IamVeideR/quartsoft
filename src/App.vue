<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c8c8c8;
  background-color: #272b30;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h2 {
  color: #FFE300;
}
a {
  color: #ffffff;
  text-decoration: none;
&:hover {
   text-decoration: underline;
 }
}
a.router-link-exact-active {
  text-decoration: underline;
}
</style>
