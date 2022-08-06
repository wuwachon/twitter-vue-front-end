<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-2">
      <AdminSidebar />
    </div>
    <div class="col">
      <AdminTweetList />
    </div>
  </div>
</div>
</template>

<script>
import AdminSidebar from "../components/AdminSidebar.vue";
import AdminTweetList from "../components/AdminTweetList.vue";

export default {
  name: "AdminTweet",
  components: {
    AdminSidebar,
    AdminTweetList
  },
};
</script>

<style scoped>
.container {
  max-width: 90%;
}
</style>