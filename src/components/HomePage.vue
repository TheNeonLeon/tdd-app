<template>
  <div id="wrapper">
    <header>
      <h1>The Meetup Hub</h1>
      <h3>Welcome to The Meetup Hub. 
        The Meetup Hub is a place where you can join different kinds of events. 
        Join us for our events and meetups!</h3>
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
            <br>
            <button id="btn" @click="clickEvent(event.id)">Register</button>
          </li>
      </ul>
    </main>
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
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
header{
  text-align: center;
  font-family: 'Roboto', sans-serif;
}
ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    list-style: none;
    margin-top: 4rem;
}
li{
    border-radius: 3%;
background: rgb(34,193,195);
background: linear-gradient(0deg, rgb(210, 244, 245) 0%, rgb(159, 190, 247) 100%);
    box-shadow: 5px 3px 3px rgb(93, 115, 163);
    font-family: 'Roboto', sans-serif;    
    width: 200px;
    height: 120px;
    padding-bottom: 10rem;
}
li:hover{
   -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    transition:all 0.5s ease;

}
img{
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 3%;

}
#btn{
  margin-left: 8rem;
  border-radius: 12%;
  background-color: white;
  border-color: black;
  cursor: pointer;
}

</style>
