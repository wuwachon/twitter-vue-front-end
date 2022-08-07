<template>
  <div class="card-group">
    <!-- User Followers/ following card list -->
    <div class="card-container">
      <div class="card-follow">
        <div class="user-image"></div>
        <div class="card-info">
          <div class="card-header">
            <p class="user-name">Apple</p>
            <button class="btn-border btn-clip btn-50 user-follow-btn">
              跟隨
            </button>
          </div>
          <div class="card-body">
            <p class="introduction">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque interdum rutrum sodales. Nullam mattis fermentum
              libero, non volutpat.
            </p>
          </div>
        </div>
      </div>

      <div class="card-follow">
        <div class="user-image"></div>
        <div class="card-info">
          <div class="card-header">
            <p class="user-name">Apple</p>
            <button class="btn-border btn-bg btn-50 user-follow-btn">
              正在跟隨
            </button>
          </div>
          <div class="card-body">
            <p class="introduction">
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserFollowsCard",
  data() {
    return {};
  },
  created() {
    switch (this.$route.name) {
      case "user-followers":
        // 顯示[追隨者]清單
        break;

      case "user-followings":
        // 顯示[正在追隨]清單
        break;
    }
  },
  methods: {},
};
</script>

<style scoped>
/* User page header */
.card-group {
  max-width: 640px;
  border-left: 1px solid var(--border-line-color);
  border-right: 1px solid var(--border-line-color);
  display: flex;
  flex-direction: column;
}
.card {
  border: initial;
}
.card-header {
  background-color: initial;
}
.card-text {
  color: var(--dark-100);
}
.prev-icon {
  width: 17px;
}
.user-name {
  font-weight: 700;
  line-height: 26px;
  color: var(--dark-100);
}

/* User Followers/ following card list */
.card-container {
  display: flex;
  flex-direction: column;
}

.card-follow {
  display: flex;
  border-bottom: 1px solid #e6ecf0;
  padding: 1rem;
}

.user-image {
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
}

.card-info {
  display: flex;
  flex-direction: column;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
}

.user-follow-btn {
  width: max-content;
  padding: 0.5rem 1rem;
  justify-self: end;
}
</style>