<template>
  <div class="card-group">
    <div class="card">
      <div class="card-header mt-3">
        <div class="d-flex align-items-center">
          <div class="me-2">
            <img
              :src="require('../assets/pictures/prev.png')"
              class="prev-icon"
              alt="..."
            />
          </div>
          <div>
            <h5 class="user-name m-0">
              {{ user.name }}
            </h5>
            <span class="card-text">{{ user.tweetCount }} 推文</span>
          </div>
        </div>
      </div>
      <!-- profile -->
      <div class="profile-wrapper position-relative">
        <img
          class="banner-img w-100"
          :src="require('../assets/pictures/banner.png')"
          style="height: 200px"
          alt=""
        />
        <!-- person-img -->
        <div class="person-img">
          <img
            class="avatar-img rounded-circle position-absolute"
            :src="user.image | emptyImage"
          />
        </div>
        <!-- button -->
        <div class="d-flex justify-content-end">
          <button type="button" 
          @click.stop.prevent="showEditModal(true)"
          class="btn btn-edit btn-border btn-50">
            編輯個人資料
          </button>
        </div>
      </div>

      <div class="card-body text-start">
        <h5 class="user-name">{{ user.name }}</h5>
        <span class="card-text">@ {{ user.account }}</span>
        <p class="introduction">{{ user.introduction }}</p>
        <span class="card-text me-4">
          <span class="num">{{ user.followingCount }}個</span>跟隨中
        </span>
        <span class="card-text">
          <span class="num">{{ user.followerCount }}位</span>追隨者
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";
// import UserEditModal from "../components/TweetCard";

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
  mixins: [emptyImageFilter],
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
      showProfileEditModal: false,
    };
  },
  // computed: {
  //   UserEditModal
  // },
  created() {
    this.fetchUser();
  },
  methods: {
    showEditModal(bool) {
      // 通知 User.vue edit modal
      this.$emit("show-edit-modal", bool);
    },
    fetchUser() {
      this.currentUser = dummyData.data.currentUser;
      this.user = dummyData.data.user;
    },
  },
};
</script>

<style scope>
.card-group {
  max-width: 640px;
  border-left: 1px solid var(--border-line-color);
  border-right: 1px solid var(--border-line-color);
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
.introduction {
  font-size: 0.875rem;
  line-height: 1.375rem;
  text-align: left;
  color: var(--dark-100);
}
/* text-setting */
span.card-text {
  color: var(--secondary-color);
}
span.num {
  color: initial;
}
.btn-edit {
  margin-top: 1rem;
  margin-right: 1rem;
  color: var(--main-color);
}
.btn-edit:hover {
  color: var(--secondary-orange-color);
}
.avatar-img {
  top: 50%;
  left: 10%;
  transform: translate(-10%);
  width: 140px;
  height: 140px;
  border: 4px #ffffff solid;
}
</style>