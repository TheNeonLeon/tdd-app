<template>
  <div>
    <header>
      <h1>The Meetup Hub</h1>
    </header>
      <ul>
          <li id="list" v-for="event in events" :key="event.id">
            {{event.name}}
          </li>
      </ul>
  </div>
</template>

<script>
import data from '../server/db.json'
export default {
  name: 'HomePage',
  data: () => {
    return {
      events: data.events
    }
  }
}
</script>

<style scoped>

</style>
