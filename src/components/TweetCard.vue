<template>
  <div class="card-tweet">
    <img
      class="user-image-sm"
      :src="tweet.user.avatar | emptyImage"
      alt="user-image"
    />
    <div class="card-info">
      <div class="card-header">
        <div class="user-naming">
          <p class="user-name">{{ tweet.user.name }}</p>
          <p class="user-handle">
            @{{ tweet.user.account }}<span>・</span
            ><span class="time-stamp">{{ tweet.createdAt | fromNow }}</span>
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
          <div
          class="footer-icon reply-icon"
          @click.stop.prevent="showReplyModal(true)"
          ></div>
          <span class="counter reply-count">{{ tweet.replyCounts }}</span>
        </div>
        <div class="icon-section">
          <div class="footer-icon like-icon"></div>
          <span class="counter like-count">{{ tweet.likeCounts }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import { fromNowFilter } from "../utils/mixins"

export default {
  name: "TweetCard",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    initialTweet: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      tweet: this.initialTweet,
    };
  },
  methods: {
    showReplyModal(bool) {
      // 通知 Main.vue or Reply.vue 要開啟 reply modal
      this.$emit("show-reply-modal", bool);
    },
  },
};
</script>

<style scoped>
/* Tweet card */
.card-tweet {
  display: flex;
  border-bottom: 1px solid var(--page-divider);
  padding: 1rem;
}

.user-image-sm {
  margin-right: 0.5rem;
}

.card-info {
  display: flex;
  flex-direction: column;
}

/* card header: user name, handle and creating tweet time */
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
}

.user-naming {
  display: flex;
  column-gap: 0.5rem;
}

/* card footer: reply & like icons  */
.reply-icon {
  background-image: url("./../assets/pictures/reply.png");
}

.like-icon {
  background-image: url("./../assets/pictures/like.png");
}
</style>