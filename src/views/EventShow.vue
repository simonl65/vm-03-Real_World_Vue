<template>
  <h1>Showing Event #{{ id }}</h1>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
</style>
