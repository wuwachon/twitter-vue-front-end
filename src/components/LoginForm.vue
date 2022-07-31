<template>
  <form class="mx-auto w-100" action="" @submit.prevent.stop="handleSubmit">
    <div class="form-input d-flex flex-column">
      <label for="account" class="form-input-text">帳號</label>
      <input
        type="text"
        name="account"
        id="account"
        v-model.trim="user.account"
        placeholder="請輸入帳號"
        required
      />
    </div>
    <div class="form-input d-flex flex-column">
      <label for="password" class="form-input-text">密碼</label>
      <input
        type="password"
        name="password"
        id="password"
        v-model="user.password"
        placeholder="請輸入密碼"
        required
      />
      <div class="d-flex justify-content-between"></div>
    </div>
    <button
      type="submit"
      class="btn-bg btn-border w-100"
      :disabled="isProcessing"
    >
      登入
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      user: {
        account: "",
        password: "",
        isAdmin: false,
      },
      isProcessing: false,
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.user.account,
        password: this.user.password,
      });
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>

<style scoped>
.space {
  font-size: 16px;
  font-weight: 400;
  color: #0062ff;
}
button {
  border-radius: 50px;
  margin-top: 40px;
  margin-bottom: 22px;
  background-color: var(--main-color);
  padding: 8px 158px 8px 158px;
}
</style>
