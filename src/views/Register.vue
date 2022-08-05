<template>
  <div id="register" class="d-flex flex-column mx-auto">
    <div class="logo mx-auto mb-4">
      <img :src="require('./../assets/pictures/logo.png')" width="50px" />
    </div>
    <p class="title mx-auto mb-4">建立你的帳號</p>
  <RegisterAccountForm/>  
  </div>
</template>

<script>
import RegisterAccountForm from "./../components/RegisterAccountForm";

export default {
  name: "Register",
  components: {
    RegisterAccountForm,
  },
}
</script>

<style scoped>
  #register {
    width: 540px;
    padding-top: 60px;
  }
  .title {
    font-size: 1.5rem;
  }
</style>