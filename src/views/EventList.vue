<template>
  <div>
    <h1>Event for {{ m_user.user.name }}</h1>
    <EventCard
      v-for="event in m_event.events"
      :key="event.id"
      :event="event"
    />
    <!-- Pagination links -->
    <template v-if="page != 1">
      <router-link 
        :to="{ name: 'event-list', query: { page: page - 1 } }" 
        rel="prev"
      >
        Prev Page
      </router-link>
      <template v-if="hasNextPage"> | </template>
    </template>
    <router-link 
      v-if="hasNextPage"
      :to="{ name: 'event-list', query: { page: page + 1 } }" 
      rel="next"
    >
      Next Page
    </router-link>
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
import { mapState } from 'vuex'

export default {
  components: {
    EventCard
  },

  computed: {
    page() {
      return parseInt(this.$route.query.page) || 1
    },
    hasNextPage() {
      return this.m_event.eventsTotal > this.page * this.perPage
    },
    ...mapState(['m_event', 'm_user'])
  },

  created() {
    this.perPage = 3

    this.$store.dispatch('m_event/fetchEvents', {
      perPage: this.perPage,
      page: this.page
    })
  }
}
</script>
