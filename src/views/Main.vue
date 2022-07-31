<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <SideBar />
      </div>
      <div class="col-6">
        <h4>首頁</h4>
      </div>
      <div class="col">
        <PopularUsers />
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../components/Sidebar";
import PopularUsers from "../components/PopularUsers";

export default {
  name: "Main",
  components: {
    SideBar,
    PopularUsers,
  },
};
</script>
