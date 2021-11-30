<template>
  <div v-if="film">
    <h2>{{film.title}}</h2>
    <p>{{film.opening_crawl}}</p>
    <p>Director: {{film.director}}</p>
    <p>Producer: {{film.producer}}</p>
    <p>Release Date: {{film.release_date}}</p>
    <h3>Characters</h3>
    <p class="links-list" v-for="(character) in characters" :key="character.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="character && character.name" :to="'/'+character.url.split('https://swapi.dev/api/')[1]">{{character.name}}</router-link>
    </p>
    <h3>Starships</h3>
    <p class="links-list" v-for="(starship) in starships" :key="starship.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="starship && starship.name" :to="'/'+starship.url.split('https://swapi.dev/api/')[1]">{{starship.name}}</router-link>
    </p>
    <h3>Planets</h3>
    <p class="links-list" v-for="(planet) in planets" :key="planet.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="planet && planet.name" :to="'/'+planet.url.split('https://swapi.dev/api/')[1]">{{planet.name}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
name: "Film",
  computed: {
    film: function() {
      return this.$store.state.film
    },
    characters: function() {
      return this.$store.state.charactersList
    },
    starships: function() {
      return this.$store.state.starshipsList
    },
    planets: function() {
      return this.$store.state.planetsList
    }
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.getFilmInfo ()
      }
    }
  },
  created() {
    this.getFilmInfo ()
  },
  methods: {
  async getFilmInfo () {
    await this.$store.dispatch('getFilm', this.$route.params.id)
  }
  }
}
</script>

<style scoped>
 .links-list {
   display: inline;
   padding-right: 20px;
 }
</style>