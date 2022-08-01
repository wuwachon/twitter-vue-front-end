<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <SideBar />
      </div>
      <div class="col-6 scrollable-part">
        <div class="main-title">
          <img
            :src="require('../assets/pictures/prev.png')"
            class="prev-icon"
            alt="..."
          />
          <div>
            <h5 class="user-name m-0">
              {{ user.name }}
            </h5>
            <span class="card-text">{{ user.tweetCount }} 推文</span>
          </div>
        </div>
        <UserFollowsCard />
      </div>
      <div class="col">
        <PopularUsers />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Sidebar";
import PopularUsers from "../components/PopularUsers";
import UserFollowsCard from "../components/UserFollowsCard";

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
  name: "Main",
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
  components: {
    SideBar,
    PopularUsers,
    UserFollowsCard,
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
.prev-icon {
  width: 17px;
  height: 14px;
}

/* 標題文字設定 */
.main-title {
  padding: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid var(--page-divider);
  display: flex;
  align-items: center;
  column-gap: 1.1875rem;
}

/* 取消中間區塊的 padding，讓網格線可以接起來 */
.row > * {
  padding-left: 0;
  padding-right: 0;
}

/* Scroll bar */
.scrollable-part {
  height: 100vh;
  overflow-y: scroll;
}

.scrollable-part::-webkit-scrollbar {
  background-color: #fafafa;
  width: 15px;
}

.scrollable-part::-webkit-scrollbar-thumb {
  background-color: #c1c1c1;
  border-radius: 4px;
}
</style>