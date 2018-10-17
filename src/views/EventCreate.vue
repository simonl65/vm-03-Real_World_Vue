<template>
  <div>
    <h1>Create an event, {{ user.name }}</h1>
    <p>This event was created by {{ user.id }}</p>

    <p>Event data: {{ getEventById(3) || 'No event data' }}</p>

    <p>There are {{ categoriesLength }} categories:</p>
    <ul>
      <li
        v-for="category in categories"
        :key="category"
      >
        {{ category }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    categoriesLength() {
      return this.$store.getters.catLength
    },
    ...mapGetters(['getEventById']),
    ...mapState(['user', 'categories'])
  }
}
</script>

<style scoped>
</style>
