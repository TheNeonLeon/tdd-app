<template>
  <div>
      <h1>Register form</h1>
      <FormulateForm class="form" v-model="formValues">
        <FormulateInput
        class="name"
        name="name"
        label="What is your name?"
        validation="required"
        />
        <FormulateInput
        class="age"
        name="age"
        label="How old are you?"
        validation="required|number|max:120"
        />
        <FormulateInput
        class="email"
        type="email"
        name="email"
        label="Please enter your email adress"
        validation="required|email"
        />
        <FormulateInput
        class="sign-up"
        type="submit"
        label="Sign up"
        />
      </FormulateForm>
      <VueFormulate />
  </div>
</template>

<script>
import VueFormulate from '@braid/vue-formulate'

export default {
  name: 'Register',
  components: {
    VueFormulate
  },
  data: () => {
    return {
    }
  }
}
</script>

<style scoped>

</style>>
