<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <SideBar />
      </div>
      <div class="col-7">
        <UserProfileCard 
        @show-edit-modal="toggleEditModal(true)"/>
        <div>
          <ul class="nav-tab d-flex">
            <li v-for="tab in tabs" :key="tab.id" class="nav-item">
              <router-link :to="tab.path" class="nav-link">
                {{ tab.title }}
              </router-link>
            </li>
          </ul>
        </div>
        <router-view :current-user="currentUser"> </router-view>
      </div>
      <div class="col">
        <PopularUsers />
      </div>
    </div>
    <UserEditModal :show="showEditModal" @close="toggleEditModal(false)" />
  </div>
</template>

<style scoped>
</style>

<script>
import SideBar from "../components/Sidebar";
import UserProfileCard from "./../components/UserProfileCard";
import PopularUsers from "../components/PopularUsers";
import UserEditModal from "../components/UserEditModal";

const dummyData = {
  dummyUser: {
    id: 6,
    account: "user5",
    name: "user5",
    avatar: "https://i.imgur.com/mUMGidO.jpeg",
    introduction: null,
    banner: "https://i.imgur.com/zFLriLp.jpeg",
    role: "user",
    createdAt: "2022-07-31T11:44:03.000Z",
    updatedAt: "2022-07-31T11:57:31.000Z",
    tweetCounts: 10,
    replyCounts: 40,
    likeCounts: 0,
    followerCounts: 0,
    followingCounts: 0,
    currentUser: {
      id: 6,
      account: "user5",
      name: "user5",
      email: "user5@example.com",
      password: "$2a$10$XJnSp12vCKq1sJI5kf0Z7.66l35Dkke//bzkUC3kX3amI/pwrSntm",
      avatar: "https://i.imgur.com/mUMGidO.jpeg",
      introduction: null,
      banner: "https://i.imgur.com/zFLriLp.jpeg",
      role: "user",
      createdAt: "2022-07-31T11:44:03.000Z",
      updatedAt: "2022-07-31T11:57:31.000Z",
      Followers: [],
      Followings: [],
    },
  },
};

export default {
  name: "User",
  components: {
    SideBar,
    UserProfileCard,
    PopularUsers,
    UserEditModal
  },
  created() {
    const { userId } = this.$route.params;
    this.fetchUser(userId);
  },
  data() {
    return {
      tabs: [
        {
          title: "推文",
          path: "tweets",
        },
        {
          title: "推文與回覆",
          path: "replies",
        },
        {
          title: "喜歡的內容",
          path: "likes",
        },
      ],
      currentUser: {},
      showEditModal: false,
    };
  },
  methods: {
    fetchUser() {
      this.currentUser = dummyData.dummyUser.currentUser;
    },
    toggleEditModal(bool) {
      this.showEditModal = bool;
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 90%;
}
.container > div {
  flex-wrap: nowrap;
}
.nav-link.active {
  width: 80px;
  box-shadow: 0px 2px ;
  justify-content: center;
  padding: 10px 15px;
  /* todo: 線刪不掉 and 圓弧效果radius:100px  */
}
.navbar-nav {
  flex-direction: row;
}
.nav-item {
  margin: 2rem 2rem 1rem 2rem;
  font-size: 15px;
  font-weight: 700;
  line-height: 22px;
  color: #657786;
}
</style>