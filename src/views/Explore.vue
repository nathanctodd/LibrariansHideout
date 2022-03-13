<template>
  <div>
    <div class="intro"><strong>Explore Page</strong> </div>
    <div class="outro">Come check out our comprehensive list of the best-selling books in our database that all of our friends love!</div>
      <ListOfBooks :explore="books" />
  </div>
</template>


<script>

  import ListOfBooks from '../components/ListOfBooks.vue'
  export default {
    name: 'ExploreView',
    components: {
      ListOfBooks
    },
    computed: {
      books() {
        return this.$root.$data.explore;
      }
    }
  }
</script>

<style scoped>

.intro {
  display: flex;
  font-size: 80px;
  font-family: "Lucida Console", "Courier New", monospace;
}

.outro {
  display: flex;
  margin: 10px;
  padding: 10px;
  font-family: "Lucida Console", "Courier New", monospace;
}

</style>