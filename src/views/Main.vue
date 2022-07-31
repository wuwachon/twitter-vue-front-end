<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <SideBar @show-modal="toggleModal(true)" />
      </div>
      <div class="col-6 scrollable-part">
        <h4 class="main-title">首頁</h4>
        <CreateTweet />
        <div class="divider"></div>
        <TweetCard />
      </div>
      <div class="col">
        <PopularUsers />
      </div>
    </div>
    <TweetModal :show="showModal" @close="toggleModal(false)" />
  </div>
</template>

<script>
import SideBar from "../components/Sidebar";
import PopularUsers from "../components/PopularUsers";
import TweetModal from "../components/TweetModal";
import CreateTweet from "../components/CreateTweet";
import TweetCard from "../components/TweetCard";

export default {
  name: "Main",
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    SideBar,
    PopularUsers,
    TweetModal,
    CreateTweet,
    TweetCard,
  },
  methods: {
    toggleModal(bool) {
      this.showModal = bool;
    },
  },
};
</script>

<style scoped>
/* 首頁文字設定 */
.main-title {
  padding: 1.5rem;
  font-weight: 700;
  border-bottom: 1px solid var(--page-divider);
}

/* 取消中間區塊的 padding，讓網格線可以接起來 */
.row > * {
  padding-left: 0;
  padding-right: 0;
}

/* 區塊分隔線 */
.divider {
  width: 100%;
  height: 0.625rem;
  background-color: var(--page-divider);
}

/* Scroll bar */
.scrollable-part {
  height: 100vh;
  overflow-y: scroll;
}

.scrollable-part::-webkit-scrollbar {
  background-color: #FAFAFA;
  width: 15px;
}

.scrollable-part::-webkit-scrollbar-thumb {
  background-color: #C1C1C1;
  border-radius: 4px;
}
</style>