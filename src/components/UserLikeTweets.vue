<template>
  <div class="card-container">
    <div
      v-for="tweet in userLikeTweets"
      :key="tweet.id"
      class="user-like-tweets"
    >
      <div class="user-image-sm"></div>
      <div class="card-info">
        <div class="card-header">
          <div class="user-naming">
            <p class="user-name">XXX</p>
            <p class="user-handle">
              @applepen<span>・</span>
              <span class="time-stamp">{{ tweet.createdAt | fromNow }}</span>
            </p>
          </div>
        </div>
        <div class="card-body">
          <p class="tweet-content">
            {{ tweet.Tweet.description }}
          </p>
        </div>
        <div class="card-footer">
          <div class="icon-section">
            <div class="footer-icon reply-icon"></div>
            <span class="counter reply-count">{{
              tweet.Tweet.replyCounts
            }}</span>
          </div>
          <div class="icon-section">
            <div
              v-if="!tweet.isLike"
              @click.stop.prevent="addLike(tweet.id)"
              class="footer-icon like-icon"
            ></div>
            <div
              v-else
              @click.stop.prevent="deleteLike(tweet.id)"
              class="footer-icon like-icon-add"
            ></div>
            <span class="counter like-count">{{ tweet.Tweet.likeCounts }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

const dummyData = {
  dummyLikeTweets: [
    {
      id: 25,
      UserId: 5,
      TweetId: 79,
      createdAt: "2022-08-02T02:49:05.000Z",
      updatedAt: "2022-08-02T02:49:05.000Z",
      Tweet: {
        id: 79,
        userId: 9,
        description:
          "Provident est repudiandae ratione ut. Occaecati est voluptas ducimus non. Quis animi dolores aut dolorem consequatur. Qui officiis cumque ut",
        createdAt: "2022-08-02T02:49:05.000Z",
        updatedAt: "2022-08-02T02:49:05.000Z",
        UserId: 9,
        replyUserAccount: "user8",
        replyCounts: 6,
        likeCounts: 1,
      },
    },
    {
      id: 26,
      UserId: 5,
      TweetId: 63,
      createdAt: "2022-08-02T02:49:05.000Z",
      updatedAt: "2022-08-02T02:49:05.000Z",
      Tweet: {
        id: 63,
        userId: 8,
        description:
          "Explicabo in aut. Maxime dolorum eum. Tempora explicabo tempore quod perspiciatis. Culpa enim et non illum rem consequatur ut accusamus sunt",
        createdAt: "2022-08-02T02:49:05.000Z",
        updatedAt: "2022-08-02T02:49:05.000Z",
        UserId: 8,
        replyUserAccount: "user7",
        replyCounts: 6,
        likeCounts: 1,
      },
    },
  ],
};
export default {
  name: "UserLikeTweets",
  mixins: [fromNowFilter],

  //   // 取得的資料和預想的不一樣
  // props: {
  //   currentUser: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  data() {
    return {
      userLikeTweets: [],
    };
  },
  created() {
    // 取得動態路由位置
    const { id: tweetId } = this.$route.params;
    this.fetchLikeTweets(tweetId);

    this.currentUser = dummyData.dummyLikeTweets;
  },
  methods: {
    fetchLikeTweets() {
      this.userLikeTweets = dummyData.dummyLikeTweets;
    },
    // todo: API
    // addLike(id) {

    // }
    // deleteLike(id) {

    // }  
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
.like-icon-add {
  background-image: url("./../assets/pictures/icon_like.png");
}
</style>