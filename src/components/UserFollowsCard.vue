<template>
  <div class="card-group">
    <!-- Followers / Following tabs -->
    <ul class="tab">
      <li class="tab-item">
        <a class="tab-link active" aria-current="page" href="#">追隨者</a>
      </li>
      <li class="tab-item">
        <a class="tab-link" href="#">正在追隨</a>
      </li>
    </ul>
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
const dummyData = {
  data: {
    user: {
      id: 270,
      name: "user3",
      introduction: "hello,Nice to meet you",
      avatar: null,
      banner: null,
    },
    currentUser: {
      id: 272,
      account: "user5",
      name: "user5",
      email: "user5@example.com",
      avatar: null,
      introduction: null,
      banner: null,
      role: "user",
      createdAt: "2022-07-27T05:06:05.000Z",
      updatedAt: "2022-07-28T15:18:16.000Z",
      Followers: [],
      Followings: [],
    },
  },
};

export default {
  data() {
    return {
      currentUser: {},
      user: {
        id: 0,
        account: "",
        name: "",
        introduction: "",
        avatar: "",
        banner: "",
        tweetCount: 0,
        followingCount: 0,
        followerCount: 0,
        likeCount: 0,
        isFollowed: false,
      },
    };
  },
  created() {
    this.fetchUser();
  },
  methods: {
    fetchUser() {
      this.currentUser = dummyData.data.currentUser;
      this.user = dummyData.data.user;
    },
  },
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

/* Followers / Following tabs */
.tab {
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid #e6ecf0;
}
.tab-link {
  padding: 1rem;
  color: #657786;
  font-weight: 700;
}
.tab-link.active {
  color: var(--main-color);
  border-bottom: 2px solid var(--main-color);
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
  padding: 1rem;
  margin-right: 0.5rem;
  width: 50px;
  height: 50px;
  background-image: url("./../assets/pictures/dummyUser.png");
  background-size: contain;
  background-repeat: no-repeat;
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