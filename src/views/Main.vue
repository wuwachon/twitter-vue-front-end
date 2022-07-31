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
