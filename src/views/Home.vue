<template>
  <div class="home">
    <Navigation/>
    <div class="main-block">
      <SearchField/>
      <div class="content-block">
        <router-view></router-view>
        <Entities v-if="$store.state.entities.length > 0 && $route.name =='Home'"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import SearchField from '@/components/SearchField.vue'
import Entities from '@/components/Entities.vue'

export default {
  name: 'Home',
  components: {
    Navigation, SearchField, Entities
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: flex-start;
}
.main-block {
  padding: 20px 0 0 30px;
  height: 100vh;
  box-sizing: border-box;
  overflow-y: scroll;
  width: 100%;
}
.content-block {
  padding: 20px 30px 40px 0;

}
</style>
