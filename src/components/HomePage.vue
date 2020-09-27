<template>
  <div>
    <header>
      <h1>The Meetup Hub</h1>
    </header>
    <main id="wrapper">
      <ul>
          <li id="list" v-for="event in events" :key="event.id">
            <img class="meeting" @click="clickEvent(event.id)" v-bind:src="require(`@/assets/meeting.jpg`)">
            <b><u>{{event.name}}</u></b>
            <br><b> Location:</b> {{event.location}}
            <br><b>Date:</b> {{event.date}}
            <br><b>Time:</b> {{event.time}}
            <br><b>{{event.info}}</b>
            <br><font-awesome-icon @click="clickRating" :icon="['fas', 'star']"/>
            <b>{{ratings}}</b>
          </li>
      </ul>
    </main>
    <VueFormulate />
  </div>
</template>

<script>
import VueFormulate from '@braid/vue-formulate'
import data from '../server/db.json'
export default {
  name: 'HomePage',
  components: {
    VueFormulate
  },
  data: () => {
    return {
      events: data.events,
      ratings: 0
    }
  },
  methods: {
    clickEvent (eventId) {
      this.$router.push({ path: `/register/${eventId}` })
    },
    clickRating () {
      this.ratings++
    }
  }
}
</script>

<style scoped>
header{
  text-align: center;
}
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
    padding-bottom: 10rem;
}
img{
    width: 101%;
    height: 100%;
    cursor: pointer;
}

</style>
