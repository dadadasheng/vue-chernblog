<script setup lang="ts">
import { onMounted, ref } from 'vue';
const show_chern_introduction = ref(false); // 控制Chern介绍的显示
onMounted(() => {
  // 页面加载时可以执行一些初始化操作
  console.log("HomeView mounted");
});
const change_chern_introduction_status = () => {
  console.log("change_chern_introduction_status");
  show_chern_introduction.value = !show_chern_introduction.value;
};
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <img class="logo-img" src="../assets/logo.svg" alt="">
      </div>
      <div class="nav-title">
        <div>
          <span>
            Chern
          </span>
        </div>
        <div>
          <span>
            Blog
          </span>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <div class="chern-text" @click="change_chern_introduction_status">
      <span>
        Chern
      </span>
    </div>
    <div class="block">

    </div>
    <div v-if="!show_chern_introduction" class="blog-text">
      <RouterLink to="/menu">
        <span>BL</span><span>OG</span>
      </RouterLink>
    </div>
    <div v-if="show_chern_introduction" class="introduction-text">
      <p style="width: 500px; margin: 100px auto;">
        Chern作为一名blog网站开发者，精心打造的博客涵盖各种领域的精彩内容。这里既有充满趣味的各类事件，让你仿佛置身其中感受生活的多彩；又有名人故事带你领略他们的传奇人生。更值得一提的是，博客还加入了各种创意交互，让你不再只是旁观者，而是能深度参与其中，与精彩内容互动，享受独特的浏览体验，沉浸在这个充满魅力与惊喜的博客世界里。
      </p>
    </div>
  </main>
  <footer>
    <p>
      <span>© 2023 Chern Blog</span>
      <span> | </span>
      <span>Powered by Vue 3</span>
    </p>
  </footer>
</template>

<style lang="scss" scoped>
header {
  padding: 10px;
  color: white;
}
nav{
  display: flex;
  flex-direction: row;
}
.logo-img {
  height: 50px;
}
.nav-title {
  padding-left: 10px;
  color: white;
}
.block{
  width: 100%;
  height: 1px;
  background-color: #940d06;
  margin-top: 20px;
  border: #fff;
}
.chern-text {
  font-size: 5rem;
  font-weight: bold;
  color: #fff;
  text-align: center;
  margin-top: 20px;
}
.blog-text {
  font-size: 18rem;
  font-weight: bold;
  color: #062594;
  text-align: center;
}
footer{
  color: white;
  text-align: center;
}
</style>