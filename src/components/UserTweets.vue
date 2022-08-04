<template>
  <div class="card-container">
    <div v-for="tweet in userTweets" :key="tweet.id" class="user-tweets">
      <div class="user-image-sm"></div>
      <div class="card-info">
        <div class="card-header">
          <div class="user-naming">
            <!-- 這邊資料 API 文件資料怪怪的 -->
            <p class="user-name">XXX</p>
            <p class="user-handle">
              @applepen<span>・</span
              >
              <span class="time-stamp">{{ tweet.createdAt| fromNow }}</span>
            </p>
          </div>
        </div>
        <div class="card-body">
          <p class="tweet-content">
            {{ tweet.description }}
          </p>
        </div>
        <div class="card-footer">
          <div class="icon-section">
            <div class="footer-icon reply-icon"></div>
            <span class="counter reply-count">{{
              tweet.replyCounts
            }}</span>
          </div>
          <div class="icon-section">
            <div class="footer-icon like-icon"></div>
            <span class="counter like-count">{{ tweet.likeCounts }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
const dummyData = {
  userTweets: [
    {
      id: 20,
      userId: 3,
      description:
        "Enim non distinctio culpa impedit eligendi sunt fugit dolor eaque. Omnis nam odio facilis quo. Quis corrupti ipsa sit veniam repellendus min",
      createdAt: "2022-08-02T02:49:05.000Z",
      updatedAt: "2022-08-02T02:49:05.000Z",
      UserId: 3,
      replyCounts: 6,
      likeCounts: 2,
    },
    {
      id: 11,
      userId: 3,
      description:
        "Temporibus explicabo vel minima. Alias quas fugit. Laudantium accusantium quia eos. Alias delectus ratione rerum voluptas tempore consequatu",
      createdAt: "2022-08-02T02:49:05.000Z",
      updatedAt: "2022-08-02T02:49:05.000Z",
      UserId: 3,
      replyCounts: 6,
      likeCounts: 2,
    },
    {
      id: 15,
      userId: 3,
      description:
        "Quos est ea hic. Autem in est. Voluptates minus et maxime. Quasi nulla quis inventore ea non est tenetur autem.",
      createdAt: "2022-08-02T02:49:05.000Z",
      updatedAt: "2022-08-02T02:49:05.000Z",
      UserId: 3,
      replyCounts: 6,
      likeCounts: 1,
    },
  ],
};
import { fromNowFilter } from "./../utils/mixins";

export default {
  name: "UserTweets",
  mixins: [fromNowFilter],
  props: {
    userId:{
      type: Number,
      required: true,
    }
  },
  data() {
    return {
      userTweets: [],
    };
  },
  created() {
    // 取得動態路由位置
    const { id: tweetId } = this.$route.params;
    this.fetchTweets(tweetId);

    this.currentUser = dummyData.userTweets;
  },
  methods: {
    fetchTweets(tweetId) {
      console.log("fetchUser id", tweetId);
      this.userTweets = dummyData.userTweets;
    },
  },
};
</script>

<style scoped>
.user-image-sm {
  padding: 1rem;
  margin-right: 0.5rem;
  background-image: url("./../assets/pictures/dummyUser.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.reply-icon {
  background-image: url("./../assets/pictures/reply.png");
}

.like-icon {
  background-image: url("./../assets/pictures/like.png");
}

</style>