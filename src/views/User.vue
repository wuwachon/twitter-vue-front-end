<template>
  <div class="container text-center">
    <div class="row nowrap">
      <div class="col">
          <SideBar />
      </div>
      <div class="col-7">
        <UserProfileCard />
      </div>
      <div class="col">
        <PopularUsers />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>

<script>
import SideBar from '../components/Sidebar'
import UserProfileCard from "./../components/UserProfileCard";
import PopularUsers from '../components/PopularUsers'

// const dummyData = {
//     "data": {
// 			"user": {
//         "id": 270,
//         "name": "user3",
//         "introduction": null,
//         "avatar": null,
//         "banner": null
//       },
//       "currentUser": {
//         "id": 272,
//         "account": "user5",
//         "name": "user5",
//         "email": "user5@example.com",
//         "avatar": null,
//         "introduction": null,
//         "banner": null,
//         "role": "user",
//         "createdAt": "2022-07-27T05:06:05.000Z",
//         "updatedAt": "2022-07-28T15:18:16.000Z",
//         "Followers": [],
//         "Followings": []
//       }
// 		}
// }

export default {
  name: "User",
  components: {
    SideBar,
    UserProfileCard,
    PopularUsers
  },  
//   data() {
//     return {
//       currentUser: {},
//       user: {},
//     };
//   },
//   created () {
//     this.fetchUser()
//   },
//   methods: {
//     fetchUser () {
//       this.currentUser = dummyData.data.currentUser
//       this.user = dummyData.data.user
//     },
//   }
}
</script>