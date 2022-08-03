<template>
  <form class="mx-auto w-100" action="" @submit.prevent.stop="handleSubmit">
    <div class="form-input d-flex flex-column">
      <label for="account" class="form-input-text">帳號</label>
      <input
        type="text"
        name="account"
        id="account"
        :class="{ error: isAccountTooLong }"
        @input="isAccountTooLong = false"
        v-model="user.account"
        placeholder="請輸入帳號"
        required
      />
      <span v-if="isAccountTooLong" class="error-message mx-3"
        >帳號不可超過 20 字！</span
      >
    </div>
    <div class="form-input d-flex flex-column">
      <label for="name" class="form-input-text">名稱</label>
      <input
        type="text"
        name="name"
        id="name"
        :class="{ error: isNameTooLong }"
        @input="isNameTooLong = false"
        v-model="user.name"
        placeholder="請輸入使用者名稱"
        required
      />
      <span v-if="isNameTooLong" class="error-message mx-3"
        >名稱不可超過 50 字！</span
      >
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
        class="btn-bg btn-border btn-50 w-100"
        :disabled="isProcessing"
      >
        {{ isProcessing ? "處理中..." : "註冊" }}
      </button>
      <div class="text-center mb-5">
        <router-link to="/login" class="mx-auto text-blue">取消 </router-link>
      </div>
    </div>
  </form>
</template>

<script>
import { Toast } from "./../utils/helpers";
import authorizationAPI from "./../apis/authorization";

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
      isNameTooLong: false,
      isAccountTooLong: false,
      isProcessing: false,
    };
  },
  methods: {
    async handleSubmit() {
      try {
        // 若任一欄位沒填，防止請求送出
        if (
          !this.user.account ||
          !this.user.name ||
          !this.user.email ||
          !this.user.password ||
          !this.user.checkPassword
        ) {
          Toast.fire({
            icon: "warning",
            title: "請填寫所有欄位",
          });
          return;
        }

        // 若兩次密碼不同，清空密碼欄並防止請求送出
        if (this.user.password !== this.user.checkPassword) {
          Toast.fire({
            icon: "warning",
            title: "兩次輸入密碼不同，請重新輸入",
          });
          this.user.password = "";
          this.user.checkPassword = "";
          return;
        }

        // 帳號超過 20 字，防止請求送出
        if(this.user.account.length > 20) {
          this.isAccountTooLong = true;
          return;
        }

        // 名稱超過 50 字，防止請求送出
        if (this.user.name.length > 50) {
          this.isNameTooLong = true;
          return;
        }

        // 暫時關閉按鈕
        this.isProcessing = true;

        const response = await authorizationAPI.register({
          account: this.user.account,
          name: this.user.name,
          email: this.user.email,
          password: this.user.password,
          checkPassword: this.user.checkPassword,
        });

        if (response.data.status === "error") {
          throw new Error(response.data.message);
        }

        Toast.fire({
          icon: "success",
          title: "註冊成功！請登入帳戶",
        });

        // 註冊成功，跳回登入頁
        this.$router.push("/login");
      } catch (error) {
        this.isProcessing = false;
        console.error(error.response);
        Toast.fire({
          icon: "warning",
          title: "註冊失敗，請稍候再試",
        });
      }
    },
  },
};
</script>

<style scoped>
button {
  opacity: 1;
  margin-top: 40px;
  margin-bottom: 22px;
  padding: 8px 158px 8px 158px;
  background-color: var(--main-color);
  cursor: pointer;
}

.form-input:nth-child(5) {
  margin-bottom: 0rem;
}

.error-message {
  color: var(--danger-color);
}

.error {
  border-bottom: 2px solid var(--danger-color);
}
</style>
