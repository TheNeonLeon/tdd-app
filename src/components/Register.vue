<template>
  <div>
    <main>
      <h1>Register form</h1>
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

    	  <label for="event">Choose an event</label>
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
</style>>
