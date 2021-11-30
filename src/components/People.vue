<template>
  <div v-if="people">
    <h2>{{people.name}}</h2>
    <p>Height, cm: {{people.height}}</p>
    <p>Mass, kg: {{people.mass}}</p>
    <p>Hair color: {{people.hair_color}}</p>
    <p>Eye color: {{people.eye_color}}</p>
    <p>Birth year: {{people.birth_year}}</p>
    <p>Gender: {{people.gender}}</p>
    <p class="links-list">
      Homeworld: <router-link v-if="planets.length >0 && planets[0].name" :to="'/'+planets[0].url.split('https://swapi.dev/api/')[1]">{{planets[0].name}}</router-link>
    </p>
    <h3>Starships</h3>
    <p class="links-list" v-for="(starship) in starships" :key="starship.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="starship && starship.name" :to="'/'+starship.url.split('https://swapi.dev/api/')[1]">{{starship.name}}</router-link>
    </p>
    <h3>Movies</h3>
    <p class="links-list" v-for="(film) in films" :key="film.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="film && film.title" :to="'/'+film.url.split('https://swapi.dev/api/')[1]">{{film.title}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "People",
  computed: {
    people: function() {
      return this.$store.state.people
    },
    films: function() {
      return this.$store.state.filmsList
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
        this.getPeopleInfo ()
      }
    }
  },
  created() {
    this.getPeopleInfo ()
  },
  methods: {
    async getPeopleInfo () {
      await this.$store.dispatch('getPeople', this.$route.params.id)
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