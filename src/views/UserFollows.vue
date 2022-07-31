<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <SideBar />
      </div>
      <div class="col-6">
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
import UserFollowsCard from "../components/UserFollowsCard"

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
    UserFollowsCard
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