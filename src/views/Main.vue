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
import SideBar from '../components/Sidebar'
import PopularUsers from '../components/PopularUsers'

export default {
  name: 'Main',
  components: {
    SideBar,
    PopularUsers
  }
}
</script>

<style scoped>
.col {
  margin-left: calc(1.5rem - (var(--bs-gutter-x) * .5));
  margin-right: calc(1.5rem - (var(--bs-gutter-x) * .5));
}

.col,
.col-6 {
  height: 100vh;
}

.col-6 {
  border-left: 1px solid #E6ECF0;
  border-right: 1px solid #E6ECF0;
}
</style>