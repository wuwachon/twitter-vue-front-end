(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76529d17"],{1511:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t._self._c;return s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col"},[s("SideBar")],1),s("div",{staticClass:"col-7"},[s("UserProfileCard",{on:{"show-edit-modal":function(s){return t.toggleEditModal(!0)}}}),s("div",[s("ul",{staticClass:"nav-tab d-flex"},t._l(t.tabs,(function(a){return s("li",{key:a.id,staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:a.path}},[t._v(" "+t._s(a.title)+" ")])],1)})),0)]),s("router-view",{attrs:{"current-user":t.currentUser}})],1),s("div",{staticClass:"col"},[s("PopularUsers")],1)]),s("UserEditModal",{attrs:{show:t.showEditModal},on:{close:function(s){return t.toggleEditModal(!1)}}})],1)},r=[],i=a("5ea5"),n=function(){var t=this,s=t._self._c;return s("div",{staticClass:"card-group"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header mt-3"},[s("div",{staticClass:"d-flex align-items-center"},[s("div",{staticClass:"me-2"},[s("img",{staticClass:"prev-icon",attrs:{src:a("8bcd"),alt:"..."}})]),s("div",[s("h5",{staticClass:"user-name m-0"},[t._v(" "+t._s(t.user.name)+" ")]),s("span",{staticClass:"card-text"},[t._v(t._s(t.user.tweetCount)+" 推文")])])])]),s("div",{staticClass:"profile-wrapper position-relative"},[s("img",{staticClass:"banner-img w-100",staticStyle:{height:"200px"},attrs:{src:a("d3a6"),alt:""}}),s("div",{staticClass:"person-img"},[s("img",{staticClass:"avatar-img rounded-circle position-absolute",attrs:{src:t._f("emptyImage")(t.user.image)}})]),s("div",{staticClass:"d-flex justify-content-end"},[s("button",{staticClass:"btn btn-edit btn-border btn-50",attrs:{type:"button"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.showEditModal(!0)}}},[t._v(" 編輯個人資料 ")])])]),s("div",{staticClass:"card-body text-start"},[s("h5",{staticClass:"user-name"},[t._v(t._s(t.user.name))]),s("span",{staticClass:"card-text"},[t._v("@ "+t._s(t.user.account))]),s("p",{staticClass:"introduction"},[t._v(t._s(t.user.introduction))]),s("span",{staticClass:"card-text me-4"},[s("span",{staticClass:"num"},[t._v(t._s(t.user.followingCount)+"個")]),t._v("跟隨中 ")]),s("span",{staticClass:"card-text"},[s("span",{staticClass:"num"},[t._v(t._s(t.user.followerCount)+"位")]),t._v("追隨者 ")])])])])},o=[],l=a("2708");const c={data:{user:{id:270,name:"user3",introduction:"hello,Nice to meet you",avatar:null,banner:null},currentUser:{id:272,account:"user5",name:"user5",email:"user5@example.com",avatar:null,introduction:null,banner:null,role:"user",createdAt:"2022-07-27T05:06:05.000Z",updatedAt:"2022-07-28T15:18:16.000Z",Followers:[],Followings:[]}}};var u={mixins:[l["b"]],data(){return{currentUser:{},user:{id:0,account:"",name:"",introduction:"",avatar:"",banner:"",tweetCount:0,followingCount:0,followerCount:0,likeCount:0,isFollowed:!1},showProfileEditModal:!1}},created(){this.fetchUser()},methods:{showEditModal(t){this.$emit("show-edit-modal",t)},fetchUser(){this.currentUser=c.data.currentUser,this.user=c.data.user}}},d=u,m=(a("ca75"),a("2877")),p=Object(m["a"])(d,n,o,!1,null,null,null),C=p.exports,v=a("f963"),f=function(){var t=this,s=t._self._c;return s("div",[t.show?s("div",{staticClass:"modal-mask"},[s("div",{staticClass:"modal-container"},[s("div",{staticClass:"modal-header"},[s("div",{staticClass:"modal-title-wrapper d-flex"},[s("img",{staticClass:"close-btn",attrs:{src:a("ca79"),alt:"close-btn"},on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.$emit("close")}}}),s("div",{staticClass:"modal-title"},[t._v("編輯個人資料")])]),s("button",{staticClass:"save-btn btn-bg btn-border"},[t._v("儲存")])]),s("div",{staticClass:"profile-wrapper position-relative"},[s("label",{staticClass:"banner-icon change-photo",attrs:{for:"banner-image"}}),s("label",{staticClass:"banner-icon cancel-change",attrs:{for:"banner-image"}}),s("img",{staticClass:"banner-img w-100",staticStyle:{height:"200px"},attrs:{src:a("d3a6"),alt:""}}),s("div",{staticClass:"bg-mask banner-mask"}),t._m(0)]),t._m(1)])]):t._e()])},h=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"person-img"},[s("label",{staticClass:"avatar-icon avatar-change-photo",attrs:{for:"avatar-image"}}),s("img",{staticClass:"avatar-img rounded-circle position-absolute",attrs:{src:a("b7db"),alt:"person-image"}}),s("div",{staticClass:"avatar-mask"})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"modal-body"},[s("form",{staticClass:"mx-auto w-100",attrs:{action:""}},[s("div",{staticClass:"form-input d-flex flex-column"},[s("label",{staticClass:"form-input-text",attrs:{for:"name"}},[t._v("名稱")]),s("input",{attrs:{type:"text",name:"name",id:"name",placeholder:"Joe Doe",required:""}})]),s("div",{staticClass:"form-input form-introduction d-flex flex-column"},[s("label",{staticClass:"form-input-text",attrs:{for:"introduction"}},[t._v("自我介紹")]),s("input",{attrs:{type:"text",name:"introduction",id:"introduction",placeholder:"Joe Doe",required:""}})])])])}],b={name:"UserEditModal",mixins:[l["b"]],props:{show:Boolean}},g=b,A=(a("2089"),Object(m["a"])(g,f,h,!1,null,"03188e24",null)),w=A.exports;const _={dummyUser:{id:6,account:"user5",name:"user5",avatar:"https://i.imgur.com/mUMGidO.jpeg",introduction:null,banner:"https://i.imgur.com/zFLriLp.jpeg",role:"user",createdAt:"2022-07-31T11:44:03.000Z",updatedAt:"2022-07-31T11:57:31.000Z",tweetCounts:10,replyCounts:40,likeCounts:0,followerCounts:0,followingCounts:0,currentUser:{id:6,account:"user5",name:"user5",email:"user5@example.com",password:"$2a$10$XJnSp12vCKq1sJI5kf0Z7.66l35Dkke//bzkUC3kX3amI/pwrSntm",avatar:"https://i.imgur.com/mUMGidO.jpeg",introduction:null,banner:"https://i.imgur.com/zFLriLp.jpeg",role:"user",createdAt:"2022-07-31T11:44:03.000Z",updatedAt:"2022-07-31T11:57:31.000Z",Followers:[],Followings:[]}}};var U={name:"User",components:{SideBar:i["a"],UserProfileCard:C,PopularUsers:v["a"],UserEditModal:w},created(){const{userId:t}=this.$route.params;this.fetchUser(t)},data(){return{tabs:[{title:"推文",path:"tweets"},{title:"推文與回覆",path:"replies"},{title:"喜歡的內容",path:"likes"}],currentUser:{},showEditModal:!1}},methods:{fetchUser(){this.currentUser=_.dummyUser.currentUser},toggleEditModal(t){this.showEditModal=t}}},x=U,k=(a("3742"),Object(m["a"])(x,e,r,!1,null,"4a069295",null));s["default"]=k.exports},2089:function(t,s,a){"use strict";a("cf95")},3742:function(t,s,a){"use strict";a("4bbc")},"4bbc":function(t,s,a){},"55a0":function(t,s,a){},"8bcd":function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAcCAYAAAAEN20fAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAB5SURBVHgB7dfBCYAwEETR0Qoswc6SzreEpAPNQg5R4kGFnct8GMnNBwoi8L7UVtqsnyn5jY9hBYTuCJ8huBnClxGYEEIIIcRXRNTMDUs/7OBW13bZwK/6JYP7aAqGd/EJk0AoQxhhhBEmHkP5r5lhDMRyB1y+EX87AdxCwzt7prpuAAAAAElFTkSuQmCC"},b7db:function(t,s,a){t.exports=a.p+"img/dummyUser2.a6b1a9e8.png"},ca75:function(t,s,a){"use strict";a("55a0")},cf95:function(t,s,a){}}]);
//# sourceMappingURL=chunk-76529d17.68df068c.js.map