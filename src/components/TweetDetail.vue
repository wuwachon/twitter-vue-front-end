<template>
  <div class="tweet-container">
    <div class="tweet-header">
      <div class="user-image-sm"></div>
      <div class="user-naming">
        <p class="user-name">Apple</p>
        <span class="user-handle">@apple</span>
      </div>
    </div>
    <div class="tweet-body">
      Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco
      cillum dolor. Voluptate exercitation incididunt aliquip deserunt.
    </div>
    <div class="tweet-footer">
      <span class="time-stamp">上午 10:05・2021年11月10日</span>
    </div>
    <div class="counter-section">
      <span class="reply-count">34 回覆</span>
      <span class="like-count">808 喜歡次數</span>
    </div>
    <div class="icon-section">
      <div class="footer-icon reply-icon"></div>
      <div class="footer-icon like-icon"></div>
    </div>
  </div>
</template>

<style scoped>
.tweet-container {
  padding: 1rem;
  border-bottom: 1px solid var(--page-divider);
}

/* tweet header: user name & handle */
.tweet-header {
  display: flex;
  align-items: center;
  width: 100%;
  padding-bottom: 1rem;
}

.user-image-sm {
  padding: 1rem;
  margin-right: 0.5rem;
  background-image: url("./../assets/pictures/dummyUser2.png");
  background-size: contain;
  background-repeat: no-repeat;
}

.user-naming {
  display: flex;
  flex-direction: column;
}

/* tweet body: tweet content */
.tweet-body {
  font-size: 1.5rem;
}

/* tweet footer: time stamp */
.tweet-footer {
  margin-top: 9px;
  border-bottom: 1px solid var(--page-divider);
}

.time-stamp {
  font-size: 0.875rem;
  color: var(--secondary-color);
}

/* below: counter section */
.counter-section {
  color: var(--secondary-color);
  font-size: 1.1875rem;
  font-weight: 600;
  padding: 1rem 0;
  border-bottom: 1px solid var(--page-divider);
  display: flex;
  column-gap: 1.5rem;
}

/* below: icon section */
.icon-section {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  column-gap: 3.5rem;
}

.footer-icon {
  width: 1.875rem;
  height: 1.875rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
}

.footer-icon:hover {
  filter: brightness(0) saturate(100%) invert(38%) sepia(52%) saturate(2219%)
    hue-rotate(2deg) brightness(107%) contrast(105%);
}

.reply-icon {
  background-image: url("./../assets/pictures/reply.png");
}

.like-icon {
  background-image: url("./../assets/pictures/like.png");
}
</style>