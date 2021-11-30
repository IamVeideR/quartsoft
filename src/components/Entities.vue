<template>
  <div>
    <div v-for="(entity,index) in entities" :key="index" class="entity">
      <p>Type: {{entity.entity}}</p>
      <router-link v-if="entity && entity.url" :to="'/'+entity.url.split('https://swapi.dev/api/')[1]">
        <p v-if="entity.title">{{entity.title}}</p>
        <p v-else>{{entity.name}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Entities",
  computed: {
    entities: function() {
      return this.$store.state.entities
    }
  }
}
</script>

<style scoped>
.entity {
  box-sizing: border-box;
  display: block;
  padding: 0px 12px;
  border: 1px solid white;
  margin-bottom: 20px;
}
</style>