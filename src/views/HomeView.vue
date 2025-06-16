<script setup lang="ts">

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
    <div class="chern-text">
      <span>
        Chern
      </span>
    </div>
    <div class="block">

    </div>
    <div class="blog-text">
      <span>BL</span><span>OG</span>
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