<template>
  <!-- Reply card -->
  <div class="card-tweet">
    <router-link :to="{ name: 'user', params: { id: reply.replyUser.id } }">
    <img
      class="user-image-sm"
      :src="reply.replyUser.avatar | emptyImage"
      alt="user-image"
    />
    </router-link>
    <div class="card-info">
      <div class="card-header">
        <div class="user-naming">
          <router-link :to="{ name: 'user', params: { id: reply.replyUser.id } }">
          <p class="user-name">{{ reply.replyUser.name }}</p>
          </router-link>
          <p class="user-handle">
            @{{ reply.replyUser.account }}<span>・</span><span class="time-stamp">{{ reply.createdAt | fromNow }}</span>
          </p>
        </div>
        <p class="user-handle">
          回覆 <span class="user-name-highlight">@{{ reply.tweetUser.account }}</span>
        </p>
      </div>
      <div class="card-body">
        <p class="tweet-content">
          {{ reply.comment }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "../utils/mixins";
import { fromNowFilter } from "../utils/mixins";

export default {
  name: "ReplyCard",
  mixins: [emptyImageFilter, fromNowFilter],
  props: {
    initialReply: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      reply: this.initialReply
    };
  },
};
</script>

<style scoped>
/* Reply card */
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
  flex-direction: column;
  row-gap: 0.5rem;
  width: 100%;
  padding-bottom: 1rem;
}

.user-naming {
  display: flex;
  column-gap: 0.5rem;
}

.user-name-highlight {
  color: var(--main-color);
}
</style>