<template>
  <div>
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <!-- modal header: close button -->
        <div class="modal-header">
          <div class="modal-title-wrapper d-flex">
            <img
              src="./../assets/pictures/close.png"
              alt="close-btn"
              class="close-btn"
              @click.stop.prevent="$emit('close')"
            />
            <div class="modal-title">編輯個人資料</div>
          </div>
          <!-- todo: save button -->
          <button class="save-btn btn-bg btn-border">儲存</button>
        </div>

        <div class="profile-wrapper position-relative">
          <!-- icon -->
          <label for="banner-image" class="banner-icon change-photo"></label>

          <label for="banner-image" class="banner-icon cancel-change"></label>

          <img
            class="banner-img w-100"
            :src="require('../assets/pictures/banner.png')"
            style="height: 200px"
            alt=""
          />

          <div class="bg-mask banner-mask"></div>

          <div class="person-img">
            <label for="avatar-image" class="avatar-icon avatar-change-photo"></label>
            <img
              class="avatar-img rounded-circle position-absolute"
              src="./../assets/pictures/dummyUser2.png"
              alt="person-image"
            />

            <div class="avatar-mask"></div>
          </div>
        </div>
        <div class="modal-body">
          <!-- 表格 -->
          <form class="mx-auto w-100" action="">
            <div class="form-input d-flex flex-column">
              <label for="name" class="form-input-text">名稱</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Joe Doe"
                required
              />
            </div>
            <div class="form-input form-introduction d-flex flex-column">
              <label for="introduction" class="form-input-text">自我介紹</label>
              <input
                type="text"
                name="introduction"
                id="introduction"
                placeholder="Joe Doe"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { emptyImageFilter } from "./../utils/mixins";

export default {
  name: "UserEditModal",
  mixins: [emptyImageFilter],

  props: {
    // 從 Main.vue 傳來
    show: Boolean,
  },
};
</script>

<style scoped>

.modal-container {
  min-width: 634px;
  height: 610px;
}

.modal-body {
  width: 100%;
  position: absolute;
  top: 58%;
  padding: 1rem;
  background-color: var(--dark-10);
}

.modal-title {
  margin-left: 2.25rem;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
  text-align: left;
}

.form-input-text {
  color: var(--dark-80);
}

.form-introduction {
  height: 147px;
  border-radius: 2px;
}

.form-introduction input {
  line-height: 145px;
}

/* same as UserProfileCard */
.avatar-img {
  top: 124px;
  left: 10%;
  transform: translate(-10%);
  width: 140px;
  height: 140px;
  border: 4px #ffffff solid;
}

/* banner、avatar icon(change-photo、cancel) */
.banner-icon, .avatar-icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 1;
}

.banner-icon.change-photo {
  background-image: url("./../assets/pictures/change-photo.png");
}

.banner-icon.cancel-change {
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  background-image: url("./../assets/pictures/cancel-change.png");
}

.avatar-change-photo {
  top: 183px;
  left: 18%;
  transform: translate(-18%);
  background-image: url("./../assets/pictures/change-photo.png");
}

/* banner mask 、avatar mask */
.banner-mask {
  background-color: rgba(23, 23, 37, 0.5);
  opacity: 75%;
}

.bg-mask {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}

.avatar-mask {
  position: absolute;
  left: 10%;
  transform: translate(-10%);
  top: 124px;
  width: 140px;
  height: 140px;
  background-color: rgba(23, 23, 37, 0.5);
  border-radius: 50%;
}

</style>