<template>
  <div>
    <header>
      <h1>The Meetup Hub</h1>
    </header>
    <main id="wrapper">
      <ul>
          <li id="list" v-for="event in events" :key="event.id">
            <img class="meeting" @click="clickEvent(event.id)" v-bind:src="require(`@/assets/meeting.jpg`)">
            {{event.name}}
            <br> {{event.date}}
            <br> {{event.time}}
            <br> {{event.info}}
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
  },
  methods: {
    clickEvent (eventId) {
      this.$router.push({ path: `/register/${eventId}` })
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
li{
    border-style: solid;
    border-color: hsl(0, 0%, 98%);
    box-shadow: 5px 3px 3px rgb(116, 116, 116);
    width: 200px;
    height: 120px;
    cursor: pointer;
    padding-bottom: 8rem;
}
img{
    width: 101%;
    height: 100%;
}

</style>
