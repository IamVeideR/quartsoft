<template>
  <div v-if="planet">
    <h2>{{planet.name}}</h2>
    <p>Rotation period, hours: {{planet.rotation_period}}</p>
    <p>Orbital period, days: {{planet.orbital_period}}</p>
    <p>Diameter, km: {{planet.diameter}}</p>
    <p>Climate: {{planet.climate}}</p>
    <p>Gravity: {{planet.gravity}}</p>
    <p>Terrain: {{planet.terrain}}</p>
    <p>Surface Water, %: {{planet.surface_water}}</p>
    <p>Population: {{planet.population}}</p>
    <h3>Residents</h3>
    <p class="links-list" v-for="(character) in characters" :key="character.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="character && character.name" :to="'/'+character.url.split('https://swapi.dev/api/')[1]">{{character.name}}</router-link>
    </p>
    <h3>Movies</h3>
    <p class="links-list" v-for="(film) in films" :key="film.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="film && film.title" :to="'/'+film.url.split('https://swapi.dev/api/')[1]">{{film.title}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Planet",
  computed: {
    planet: function() {
      return this.$store.state.planet
    },
    characters: function() {
      return this.$store.state.charactersList
    },
    films: function() {
      return this.$store.state.filmsList
    },
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.getPlanetInfo ()
      }
    }
  },
  created() {
    this.getPlanetInfo ()
  },
  methods: {
    async getPlanetInfo () {
      await this.$store.dispatch('getPlanet', this.$route.params.id)
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