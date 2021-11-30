<template>
  <div class="navigation">
    <h2>Movies</h2>
    <ul>
      <li v-for="(film,index) in films" :key="index">
        <router-link v-if="film && film.title" :to="'/films/'+parseInt(index+1)">{{film.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Navigation",
data () {
  return {
  }
},
computed: {
  films: function() {
    return this.$store.state.films
  }
},
created() {
  this.$store.dispatch('getFilmsList')
},
}
</script>

<style lang="scss" scoped>
.navigation {
  height: 100vh;
  width: 260px;
  min-width: 260px;
  padding: 0 30px;
  background-color: #1c1e22;

  ul {
    list-style-type: none;
    text-align: left;
    li {
      margin: 0;
      padding: 10px 0px;
    }
  }
}
</style>