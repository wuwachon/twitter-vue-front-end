<template>
  <aside class="aside">
    <h4 class="card-title">推薦跟隨</h4>
    <div class="card-container">
      <div class="card-info">
        <div class="user-image-sm"></div>
        <div class="user-naming">
          <p class="user-name">Pizza Hut</p>
          <p class="user-handle">@pizzahut</p>
        </div>
        <button class="btn-border btn-clip btn-50 user-follow-btn">跟隨</button>
      </div>
      <div class="card-info">
        <div class="user-image-sm"></div>
        <div class="user-naming">
          <p class="user-name">Bank of Alphacamp</p>
          <p class="user-handle">@BankOfAlphacamp</p>
        </div>
        <button class="btn-border btn-clip btn-50 user-follow-btn">
          跟隨
        </button>
      </div>
      <div class="card-info">
        <div class="user-image-sm"></div>
        <div class="user-naming">
          <p class="user-name">MasterCard</p>
          <p class="user-handle">@MasterCard</p>
        </div>
        <button class="btn-border btn-bg btn-50 user-follow-btn">
          正在跟隨
        </button>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.aside {
  height: max-content;
  background-color: var(--dark-20);
  border-radius: 1rem;
  margin-top: 1rem;
}

.card-container {
  width: 100%;
  height: 100%;
  padding: 0.5rem 1.5rem;
  border-top: 1px solid var(--page-divider);
}

.card-title {
  padding: 1.5rem;
  font-weight: 700;
}

.card-info {
  width: 100%;
  display: grid;
  grid-template-columns: 50px 100px 100px;
  column-gap: 0.5rem;
  padding: 0.5rem 0;
}

.user-image-sm {
  width: 50px;
  height: 50px;
  background-image: url("./../assets/pictures/dummyUser.png");
}

/* 名稱不換行，過長的名稱後方會以...顯示 */
.user-name,
.user-handle {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.user-name {
  font-weight: 700;
}

.user-handle {
  color: var(--dark-70);
  font-size: 0.875rem;
  font-weight: 500;
}

.user-follow-btn {
  height: 2.5rem;
  padding: 0.5rem 1rem;
  justify-self: end;
}
</style>