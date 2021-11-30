<template>
  <div v-if="starship">
    <h2>{{starship.name}}</h2>
    <p>Model: {{starship.model}}</p>
    <p>Manufacturer: {{starship.manufacturer}}</p>
    <p>Cost on credits: {{starship.cost_in_credits}}</p>
    <p>Length: {{starship.length}}</p>
    <p>Max atmosphering speed: {{starship.max_atmosphering_speed}}</p>
    <p>Crew: {{starship.crew}}</p>
    <p>Passengers: {{starship.passengers}}</p>
    <p>Cargo capacity: {{starship.cargo_capacity}}</p>
    <p>Consumables: {{starship.consumables}}</p>
    <p>Hyperdrive rating: {{starship.hyperdrive_rating}}</p>
    <p>MGLT: {{starship.MGLT}}</p>
    <p>Starship class: {{starship.starship_class}}</p>
    <h3>Pilots</h3>
    <p class="links-list" v-for="(pilot) in pilots" :key="pilot.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="pilot && pilot.name" :to="'/'+pilot.url.split('https://swapi.dev/api/')[1]">{{pilot.name}}</router-link>
    </p>
    <h3>Movies</h3>
    <p class="links-list" v-for="(film) in films" :key="film.url.split('https://swapi.dev/api/')[1]">
      <router-link v-if="film && film.title" :to="'/'+film.url.split('https://swapi.dev/api/')[1]">{{film.title}}</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "Starship",
  computed: {
    starship: function() {
      return this.$store.state.starship
    },
    pilots: function() {
      return this.$store.state.charactersList
    },
    films: function() {
      return this.$store.state.filmsList
    },
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.getStarshipInfo ()
      }
    }
  },
  created() {
    this.getStarshipInfo ()
  },
  methods: {
    async getStarshipInfo () {
      await this.$store.dispatch('getStarship', this.$route.params.id)
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