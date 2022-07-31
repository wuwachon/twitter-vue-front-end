<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <SideBar @show-modal="toggleModal(true)" />
      </div>
      <div class="col-6">
        <h4>首頁</h4>
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
  },
  methods: {
    toggleModal(bool) {
      this.showModal = bool;
    },
  },
};
</script>

<style scoped>
.col {
  margin-left: calc(1.5rem - (var(--bs-gutter-x) * 0.5));
  margin-right: calc(1.5rem - (var(--bs-gutter-x) * 0.5));
}

.col,
.col-6 {
  height: 100vh;
}

.col-6 {
  border-left: 1px solid var(--page-divider);
  border-right: 1px solid var(--page-divider);
}
</style>