<template>
  <div class="modal-container">
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
.modal-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 8.5rem;
  border-radius: 0.875rem;
  background-color: var(--dark-10);
  margin-bottom: 1rem;
}

/* modal 中間：使用者圖示、文字輸入區 */
.modal-body {
  flex-grow: 1;
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
  font-weight: 700;
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