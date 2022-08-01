<template>
  <form class="mx-auto w-100" action=""
  @submit.prevent.stop="handleSubmit" >
    <div class="form-input d-flex flex-column">
      <label for="account" class="form-input-text">帳號</label>
      <input
        type="text"
        name="account"
        id="account"
        v-model="user.account"
        placeholder="請輸入帳號"
        required
      />
    </div>
    <div class="form-input d-flex flex-column">
      <label for="name" class="form-input-text">名稱</label>
      <input
        type="text"
        name="name"
        id="name"
        v-model="user.name"
        placeholder="請輸入使用者名稱"
        required
      />
    </div>
    <div class="form-input d-flex flex-column">
      <label for="email" class="form-input-text">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        v-model="user.email"
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
        placeholder="請設定密碼"
        required
      />
      <div class="d-flex justify-content-between"></div>
    </div>
    <div class="form-input d-flex flex-column">
      <label for="checkPassword" class="form-input-text">密碼確認</label>
      <input
        type="password"
        name="checkPassword"
        id="checkPassword"
        v-model="user.checkPassword"
        placeholder="請設定密碼"
        required
      />
      <div class="d-flex justify-content-between"></div>
    </div>
    <div>
      <button
        type="submit"
        class="btn-bg btn-border w-100"
        :disabled="isProcessing"
      >
        註冊
      </button>
      <div class="text-center mb-5">
        <router-link
          to="/login"
          class="mx-auto text-blue"
          >取消
        </router-link>
      </div>
    </div>
  </form>
</template>

<script>
// import { Toast } from "./../utils/helpers";
// import authorizationAPI from "./../apis/authorization";

export default {
  data() {
    return {
      user: {
        account: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
      },
      isProcessing: false,
    };
  },
  methods: {
    // todo: 未處理驗證部分
    // todo: 註冊尚未成功
    checkPassword () {
      console.log('check password')
      return this.user.password === this.user.passwordCheck
    },
    // async handleSubmit() {
    //   try {
    //     if (
    //       !this.user.account ||
    //       !this.user.name ||
    //       !this.user.email ||
    //       !this.user.password ||
    //       !this.user.checkPassword
    //     ) {
    //       Toast.fire({
    //         icon: "warning",
    //         title: "請填寫所有欄位",
    //       });
    //       return;
    //     }
    //     this.isProcessing = true;

    //     const response = await authorizationAPI.register({
          
    //       account: this.user.account,
    //       name: this.user.name,
    //       email: this.user.email,
    //       password: this.user.password,
    //       checkPassword: this.user.checkPassword,
    //     });
    //     const data = response.data.data;


    //     if (data.status !== "success") {
    //       throw new Error(data.message);
    //   }
    //       console.log("data", data);

    //     //註冊成功，跳回登入頁
    //     this.$router.push("/login");

    //   } catch (error) {
    //     Toast.fire({
    //       icon: "warning",
    //       title: "註冊失敗，請稍候再試",
    //     });
    //   }
    // },
  },
};
</script>

<style scoped>
button {
  margin-top: 40px;
  margin-bottom: 22px;
  padding: 8px 158px 8px 158px;
  background-color: var(--main-color);
}
.form-input:nth-child(5) {
  margin-bottom: 0rem;
}
</style>
