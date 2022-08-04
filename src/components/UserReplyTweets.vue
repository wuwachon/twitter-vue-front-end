<template>
  <div class="card-container">
    <div v-for="reply in replyTweets" :key="reply.id" class="user-reply-tweets">
      <div class="user-image-sm"></div>
      <div class="card-info">
        <div class="card-header">
          <div class="user-naming">
            <p class="user-name">{{ currentUser.name }}</p>
            <p class="user-handle">
              @{{ currentUser.account }}<span>・</span>
              <span class="time-stamp">{{ currentUser.createdAt | fromNow}}</span>
            </p>
          </div>
        </div>
        <div class="card-header">
          <div class="user-naming">
            <p class="user-handle">
              回覆 <span> @{{ reply.replyUserAccount }}</span>
            </p>
          </div>
        </div>
        <div class="card-body">
          <p class="tweet-content">
            {{ reply.comment }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from "./../utils/mixins";

const dummyData = {
  dummyReplyTweets: [
    {
      id: 3,
      userId: 3,
      tweetId: 1,
      comment:
        "Voluptatem nihil nihil qui ratione ad et qui modi quam. Sunt eius enim. Commodi ipsa praesentium sequi eum voluptatem.",
      createdAt: "2022-08-02T02:49:05.000Z",
      updatedAt: "2022-08-02T02:49:05.000Z",
      UserId: 3,
      TweetId: 1,
      replyUserAccount: "user1",
    },
    {
      id: 5,
      userId: 3,
      tweetId: 2,
      comment:
        "Hic repellat omnis voluptas ut magnam non eum rerum. Deserunt omnis et ut tempore necessitatibus facilis rem. Beatae eveniet quidem libero e",
      createdAt: "2022-08-02T02:49:05.000Z",
      updatedAt: "2022-08-02T02:49:05.000Z",
      UserId: 3,
      TweetId: 2,
      replyUserAccount: "user1",
    },
  ],
};
export default {
  name: "UserReplyTweets",
  mixins: [fromNowFilter],

  props: {
    currentUser: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      replyTweets: [],
    };
  },
  created() {
    this.fetchReplyTweets()
  },
  methods: {
    fetchReplyTweets() {
      this.replyTweets = dummyData.dummyReplyTweets;
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
.user-reply:hover {
  color: var(--main-color);
}
</style>
