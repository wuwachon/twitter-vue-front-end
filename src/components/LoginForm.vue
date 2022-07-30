<template>
  <div id="login" class="d-flex flex-column mx-auto">
    <div class="logo mx-auto mb-4">
      <img :src="require('./../assets/pictures/logo.png')" width="50px" />
    </div>
    <p class="menu-text mx-auto mb-4">登入 Alphitter</p>
    <form class="mx-auto w-100" action="" @submit.prevent.stop="handleSubmit">
      <div class="form-input d-flex flex-column">
        <label for="account" class="form-input-title">帳號</label>
        <input
          type="text"
          name="account"
          id="account"
          class="form-input-text"
          v-model="account"
          placeholder="請輸入帳號"
          required
        />
      </div>
      <div class="form-input d-flex flex-column">
        <label for="password" class="form-input-title">密碼</label>
        <input
          type="password"
          name="password"
          id="password"
          class="form-input-text"
          v-model="password"
          placeholder="請輸入密碼"
          required
        />
        <div class="d-flex justify-content-between"></div>
      </div>
      <button type="submit" class="btn btn-bg btn-356-50 w-100 mb-3">
        登入
      </button>

      <div class="text-end">
        <router-link to="/register" class="mx-auto text-blue"
          >註冊 Alphitter</router-link
        >
        <span class="space">．</span>
        <router-link to="/admin" class="mx-auto text-blue">後台登入 </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        account: this.account,
        password: this.password,
      });
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log("data", data);
    },
  },
};
</script>

<style scoped>
#login {
  width: 540px;
  padding-top: 60px;
}
.menu-text {
  font-size: 1.5rem;
}
.space {
  font-size: 16px;
  font-weight: 400;
  color: #0062ff;
}
.btn {
  margin-top: 40px;
  margin-bottom: 22px;
  background-color: var(--main-color);
}
</style>
