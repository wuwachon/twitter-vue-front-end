<template>
  <nav class="nav">
    <div class="nav-top">
      <div class="nav-logo"></div>
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/main" class="nav-link active">
            <div class="nav-icon home-icon"></div>
            <span class="nav-title">首頁</span>
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <div class="nav-icon person-icon"></div>
            <span class="nav-title">個人資料</span>
          </a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
            <div class="nav-icon setting-icon"></div>
            <span class="nav-title">設定</span>
          </a>
        </li>
      </ul>
      <button
        class="btn-bg btn-border btn-112-50 w-100"
        @click.stop.prevent="showModal(true)"
      >
        推文
      </button>
    </div>
    <div class="nav-bottom">
      <ul class="nav-list">
        <li class="nav-item">
          <router-link to="/login" class="nav-link">
            <div class="nav-icon quit-icon"></div>
            <span class="nav-title">登出</span>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  methods: {
    showModal(bool) {
      // 通知 Main.vue 要開啟 modal
      this.$emit("show-modal", bool);
    },
  },
};
</script>

<style scoped>
.nav-logo {
  margin: 0.8125rem 0 0 0.8125rem;
  width: 40px;
  height: 40px;
  background-image: url("./../assets/pictures/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
}

.home-icon {
  background-image: url("./../assets/pictures/home.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.nav-link:hover .home-icon,
.nav-link.active .home-icon {
  background-image: url("./../assets/pictures/home-dark.png");
}

.person-icon {
  background-image: url("./../assets/pictures/person.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.nav-link:hover .person-icon,
.nav-link.active .person-icon {
  background-image: url("./../assets/pictures/person-dark.png");
}

.setting-icon {
  background-image: url("./../assets/pictures/setting.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.nav-link:hover .setting-icon,
.nav-link.active .setting-icon {
  background-image: url("./../assets/pictures/setting-dark.png");
}

.nav-bottom .nav-item {
  margin-bottom: 0;
}

.quit-icon {
  background-image: url("./../assets/pictures/quit.png");
  background-size: contain;
  background-repeat: no-repeat;
}
</style>