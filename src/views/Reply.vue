<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <SideBar @show-tweet-modal="toggleTweetModal(true)" />
      </div>
      <div class="col-7 scrollable-part">
        <div class="main-title">
          <router-link to="/main">
          <img
            :src="require('../assets/pictures/prev.png')"
            class="prev-icon"
            alt="..."
          />
          </router-link>
          <h4>推文</h4>
        </div>
        <TweetDetail />
        <ReplyCard />
      </div>
      <div class="col">
        <PopularUsers />
      </div>
    </div>
    <TweetModal :show="showTweetModal" @close="toggleTweetModal(false)" />
    <ReplyModal :show="showReplyModal" @close="toggleReplyModal(false)" />
  </div>
</template>

<script>
import SideBar from "../components/Sidebar";
import PopularUsers from "../components/PopularUsers";
import TweetModal from "../components/TweetModal";
import ReplyModal from "../components/ReplyModal";
import TweetDetail from "../components/TweetDetail";
import ReplyCard from "../components/ReplyCard";

export default {
  name: "Reply",
  data() {
    return {
      showTweetModal: false,
      showReplyModal: false,
    };
  },
  components: {
    SideBar,
    PopularUsers,
    TweetModal,
    ReplyModal,
    TweetDetail,
    ReplyCard,
  },
  methods: {
    toggleTweetModal(bool) {
      this.showTweetModal = bool;
    },
    toggleReplyModal(bool) {
      this.showReplyModal = bool;
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
