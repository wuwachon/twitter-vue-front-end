<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <img
            src="./../assets/pictures/close.png"
            alt="close-btn"
            class="close-btn"
            @click.stop.prevent="$emit('close')"
          />
        </div>
        <div class="modal-body">
          <img
            src="./../assets/pictures/dummyUser2.png"
            alt="user-image"
            class="user-image-sm"
          />
          <textarea
            class="tweet-textarea"
            placeholder="有什麼新鮮事？"
            v-model="tweetContent"
            @input="clearErrorMessage"
            maxlength="140"
          ></textarea>
        </div>
        <div class="modal-footer">
          <span class="tweet-warning mx-3">{{ this.errorMessage }}</span>
          <button
            class="tweet-btn btn-bg btn-border"
            :class="{ disabled: isProcessing }"
            @click.prevent.stop="handleTweetSubmit(tweetContent)"
          >
            推文
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "TweetModal",
  props: {
    // 從 Main.vue 傳來
    show: Boolean,
  },
  data() {
    return {
      tweetContent: "",
      errorMessage: "",
      isProcessing: false,
    };
  },
  methods: {
    handleTweetSubmit(content) {
      if (!content || content.trim().length === 0) {
        this.errorMessage = "內容不可空白";
        return;
      } else if (content.trim().length > 140) {
        this.errorMessage = "字數不可超過 140 字";
        return;
      }
      console.log(content);
      // TODO：發送 POST api/tweets
      // TODO：傳送過程 isProcessing = true 以暫時 disable 按鈕，防止重複發推文
    },
    clearErrorMessage() {
      this.errorMessage = "";
    },
  },
};
</script>

<style scoped>
/* 外層遮罩 */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-container {
  position: fixed;
  top: 3.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 300px;
  border-radius: 0.875rem;
  background-color: var(--dark-10);
}

/* modal 上半部： 關閉按鈕 */
.modal-header {
  width: 100%;
  padding: 1.22rem;
  border-bottom: 1px solid var(--page-divider);
}

.close-btn {
  width: 1.5rem;
  height: auto;
  cursor: pointer;
}

/* modal 中間：使用者圖示、文字輸入區 */
.modal-body {
  width: 100%;
  background-color: var(--dark-10);
  padding: 1rem;
  position: relative;
  display: flex;
  column-gap: 10px;
}

.tweet-placeholder {
  position: absolute;
  left: 80px;
  top: 1.5rem;
  font-size: 1.125rem;
  color: #9197a3;
}

.tweet-textarea {
  background-color: inherit;
  border: none;
  resize: none;
  font-size: 1.125rem;
  width: 100%;
  padding-top: 0.5rem;
}

.tweet-textarea:focus {
  outline: none;
}

/* modal 底部：警告訊息、發送推文按鈕 */
.modal-footer {
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.tweet-warning {
  color: var(--danger-color);
}

.tweet-btn {
  width: 4rem;
  height: 2.5rem;
  border-radius: 50px;
}

.tweet-btn.disabled {
  opacity: 0.5;
}

.tweet-btn:focus,
.tweet-btn:active {
  outline: none;
}
</style>