<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <Sidebar />
      </div>
      <div class="col">
        <section>帳戶設定</section>
        <AccountForm/>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import AccountForm from "../components/AccountForm.vue";

export default {
  components: {
    Sidebar,
    AccountForm,
  },
};
</script>