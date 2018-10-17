<template>
  <div>
    <h1>Create an event, {{ userName }}</h1>
    <p>This event was created by {{ userName }}</p>
    <p>User ID = {{ userID }}</p>
  </div>
</template>

<script>
export default {
  computed: {
    userName() {
      return this.$store.state.user.name
    },

    userID() {
      return this.$store.state.user.id
    }
  }
}
</script>

<style scoped>
</style>
