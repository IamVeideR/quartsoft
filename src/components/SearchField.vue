<template>
  <div>
    <input
        type="text"
        class="input"
        v-model="search"
        @keyup.enter="searchEntity"
        placeholder="Search..."
    >
  </div>
</template>

<script>
export default {
name: "SearchField",
data () {
  return {
    search:''
  }
},
methods: {
  searchEntity () {
    if (this.$route.name != 'Home') this.$router.push('/')
    this.$store.dispatch('getEntities', this.search)
  }
}
}
</script>

<style scoped>
 input {
   width: 240px;
   height: 26px;
   font-size: 16px;
 }
</style>