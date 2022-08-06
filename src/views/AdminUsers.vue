<template>
<div class="container">
  <div class="row justify-content-center">
    <div class="col-2">
      <AdminSidebar />
    </div>
    <div class="col">
      <AdminUserList />
    </div>
  </div>
</div>
</template>

<script>
import AdminSidebar from "../components/AdminSidebar.vue";
import AdminUserList from "../components/AdminUserList.vue";

export default {
  name: "AdminTweet",
  components: {
    AdminSidebar,
    AdminUserList
  },
};
</script>

<style scoped>
.container {
  max-width: 90%;
}
</style>