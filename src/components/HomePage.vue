<template>
  <div>
    <header>
      <h1>The Meetup Hub</h1>
    </header>
    <main id="wrapper">
      <ul>
          <li id="list" v-for="event in events" :key="event.id">
            {{event.name}}
          </li>
      </ul>
    </main>
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
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
}

</style>
