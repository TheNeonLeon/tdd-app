<template>
  <div>
      <main class="review">
      <h1>Thank you for telling us about your experience!</h1>
      <button id="back-home" @click="clickEvent">Back to home</button>
      </main>
  </div>
</template>

<script>
export default {
    name: 'Review',
    data: () => {
        return {}
    },
    methods: {
      clickEvent () {
        this.$router.push({ path: `/` })
    }
  }
}
</script>

<style scoped>
.review{
    text-align: center;
}
button{
    border-radius: 12%;
  background-color: white;
  border-color: black;
  padding: 0.2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
}
</style>