<template>
  <div>
      <h1>Register form</h1>
      <FormulateForm v-model="formValues">
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
      </FormulateForm>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
    }
  }
}
</script>

<style scoped>

</style>>
