<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <Sidebar />
      </div>
      <div class="col-7">
        <h4 class="main-title">帳戶設定</h4>
        <AccountSettingForm />
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import AccountSettingForm from "../components/AccountSettingForm.vue";

export default {
  name: "AccountSetting",
  components: {
    Sidebar,
    AccountSettingForm,
  },
};
</script>

<style scoped>
/* 標題文字設定 */
.main-title {
  padding: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid var(--page-divider);
}

/* 取消中間區塊的 padding，讓網格線可以接起來 */
.row > * {
  padding-left: 0;
  padding-right: 0;
}

/* 區塊分隔線 */
.divider {
  width: 100%;
  height: 0.625rem;
  background-color: var(--page-divider);
}
</style>