<template>
  <!-- Followers / Following tabs -->
    <ul class="tab">
      <li class="tab-item">
        <router-link class="tab-link" aria-current="page" :to="{ name: 'user-followers' }">追隨者</router-link>
      </li>
      <li class="tab-item">
        <router-link class="tab-link" aria-current="page" :to="{ name: 'user-followerings' }">正在追隨</router-link>
      </li>
    </ul>
</template>

<style scoped>
/* Followers / Following tabs */
.tab {
  padding: 1rem;
  display: flex;
  border-bottom: 1px solid #e6ecf0;
}
.tab-link {
  padding: 1rem;
  color: #657786;
  font-weight: 700;
}
.tab-link.active {
  color: var(--main-color);
  border-bottom: 2px solid var(--main-color);
}
</style>