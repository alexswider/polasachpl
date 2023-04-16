<template>
  <div class="bottom-navbar">
    <!-- <button class="nav-button" @click="$emit('share')">Share on twitter</button> -->
    <!-- <button class="nav-button">Button 2</button> -->
    <button class="nav-button">PoLasach.pl</button>

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
  height: 30px;
  background-color: white;
  z-index: 100;
}

.nav-button {
  color: black;
  background-color: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
}

.nav-button:hover {
  color: #ccc;
}
</style>
