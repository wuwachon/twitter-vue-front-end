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
// import { mapState } from 'vuex'
import { Toast } from "./../utils/helpers";
import authorizationAPI from "./../apis/authorization";

export default {
  name: "LoginForm",
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
    async handleSubmit() {
      try {
        if (!this.user.account || !this.user.password) {
          Toast.fire({
            icon: "warning",
            title: "請填寫帳戶、密碼",
          });
          return;
        }
        this.isProcessing = true;

        const response = await authorizationAPI.loginIn({
          account: this.user.account,
          password: this.user.password,
        });

        // 取得 API 請求後的資料
        const data = response.data;

        if (data.status !== "success") {
          throw new Error(data.message);
        }

        // ⚠️ TODO：等後端更新路由後修改為 data.token
        localStorage.setItem("token", data.data.token);

        // 成功登入後轉址
        Toast.fire({
          icon: "success",
          title: "登入成功",
        });
        this.$router.push("/main");
      } catch (error) {
        this.isProcessing = false;

        Toast.fire({
          icon: "warning",
          title: "請確認您輸入的帳號、密碼是否正確",
        });
        this.user.password = "";
      }
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
  opacity: 1;
  border-radius: 50px;
  margin-top: 40px;
  margin-bottom: 22px;
  padding: 8px 158px 8px 158px;
  background-color: var(--main-color);
  cursor: pointer;
}

button[disabled] {
  opacity: 0.5;
}

.form-input:nth-child(2) {
  margin-bottom: 0rem;
}
</style>
