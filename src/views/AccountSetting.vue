<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-3">
        <Sidebar />
      </div>
      <div class="col-6">
        <h4>帳戶設定</h4>
        <hr />
        <form
          class="mx-auto w-100"
          action=""
          @submit.prevent.stop="handleSubmit"
        >
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
            <label for="passwordCheck" class="form-input-text">密碼確認</label>
            <input
              type="passwordCheck"
              name="passwordCheck"
              id="passwordCheck"
              v-model="user.passwordCheck"
              placeholder="請再次輸入密碼"
              required
            />
            <div class="d-flex justify-content-between"></div>
          </div>
          <div class="d-flex justify-content-end">
            <button
              type="submit"
              class="btn-bg btn-border"
              :disabled="isProcessing"
            >
              儲存
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

const dummyData = {
  user: {
    id: 272,
    account: "user5",
    name: "user5",
    email: "user5@example.com",
    avatar: null,
    introduction: null,
    banner: null,
    role: "user",
    createdAt: "2022-07-27T05:06:05.000Z",
    updatedAt: "2022-07-27T05:06:05.000Z",
  },
};
export default {
  name: "AccountSetting",
  components: {
    Sidebar,
  },
  data() {
    return {
      user: {
        id: -1,
        account: "",
        name: "",
        email: "",
        password: "",
        checkPassword: "",
        // 判斷是否有沒填寫的欄位
        isNull: false,
        isProcessing: false,
      },
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      const { id, account, name, email } = dummyData.user;

      this.user.id = id;
      this.user.account = account;
      this.user.name = name;
      this.user.email = email;
    },
    handleSubmit() {
      const data = JSON.stringify({
        id: this.user.id,
        account: this.user.account,
        name: this.user.name,
        email: this.user.email,
        password: this.user.password,
        checkPassword: this.user.checkPassword,
      });
      console.log("data", data);
    },
  },
};
</script>

<style scoped>
h4 {
  font-weight: 700;
  line-height: 26px;
  margin: 24px;
}
hr {
  border: 1px solid #e6ecf0;
}
button {
  border-radius: 50px;
  margin-top: 40px;
  padding: 8px 24px 8px 24px;
}
.form-input:nth-child(5) {
  margin-bottom: 0rem;
}
</style>