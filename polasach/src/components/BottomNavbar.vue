<template>
  <div class="bottom-navbar">
    <button class="nav-button" @click="$emit('share')">Share on twitter</button>
    <button class="nav-button">Button 2</button>
    <button class="nav-button">Button 3</button>
  </div>
</template>

<style scoped>
.bottom-navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: #333;
  z-index: 100;
}

.nav-button {
  color: #fff;
  background-color: transparent;
  border: none;
  font-size: 16px;
  cursor: pointer;
}

.nav-button:hover {
  color: #ccc;
}
</style>
