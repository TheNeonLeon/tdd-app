<template>
  <div>
    <main>
      <h1>Register form</h1>
      <h4>Please enter your information below</h4>
      <form>
    	  <label for="firstName">First Name</label>

    	  <input 
        type="text" 
        id="firstName"
        @input="updateForm('firstName', $event.target.value)" 
        v-model="form.firstName" />
    	    <br>
    	  <label for="lastName">Last Name</label>
    	  <input 
        type="text" 
        id="lastName"
        @input="updateForm('lastName', $event.target.value)"
        v-model="form.lastName" />
          <br>
    	  <label for="email">Email</label>
    	  <input 
        type="email" 
        id="email"
        @input="updateForm('email', $event.target.value)"
        v-model="form.email" />
    	    <br>

    	  <label for="event">Choose an event:</label>
    	  <select id="event" @change="updateForm('event', $event.target.value)">
          <option value="Choose">Events:</option>
          <option value="Front-end developer meetup">>Front-end developer meetup</option>
    	    <option value="Hackers night" :selected="form.event === 'Hackers night'">>Hackers night</option>
    	    <option value="Developers afterwork" :selected="form.event === 'Developers afterwork'">>Developers afterwork</option>
    	    <option value="Online tech news" :selected="form.event === 'Online tech news'">>Online tech news</option>
    	    <option value="Coffee n code" :selected="form.event === 'Coffee n code'">>Coffee n code</option>
    	  </select>
    	    <br>
    	  <button id="submit" @click="clickEvent()" type="submit">Submit</button>
        <br>
          <label for="review">Participated in one of our events in the past? Leave a review and tell us what you though</label>
          <br>
          <textarea
            id="review"
            rows="3"
             @input="updateForm('review', $event.target.value)"
            :value="form.review"
          >
          </textarea>
          <br>
          <button id="submit-review" @click="clickReview()" type="submit">Leave review</button>
    	</form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data: () => {
    return {
      form: {
            firstName: '',
            lastName: '',
            email: '',
            event: '',
            review: ''
          }
    }
  },
  methods: {
    openStorage () {
      return JSON.parse(localStorage.getItem('form'))
    },
    saveStorage (form) {
      localStorage.setItem('form', JSON.stringify(form))
    },
      updateForm (input, value) {
        this.form[input] = value

        let storedForm = this.openStorage()
          if (!storedForm) storedForm = {}
    
      storedForm[input] = value
      this.saveStorage(storedForm)
      },
    clickEvent () {
      this.$router.push({ path: `/submit` })

    },
    clickReview () {
      this.$router.push({ path: `/review` })
    }
  }
}
</script>

<style scoped>
main{
  text-align: center;
}
li{
  list-style: none;
}
input{
  margin: 0.2rem;
}
#email{
  margin-left: 2.6rem;
}
#event{
  margin-right: 1.05rem;
}
#submit{
  margin-top: 1rem;
  margin-bottom: 5rem;
  border-radius: 12%;
  background-color: white;
  border-color: black;
  padding: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
}
#submit-review{
    margin-top: 1rem;
  margin-bottom: 5rem;
  border-radius: 12%;
  background-color: white;
  border-color: black;
  padding: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
}
</style>>
