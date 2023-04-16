<template>
  <div>
    <div>
      <button class="twitter-button" @click="$emit('share')">
        <img src="/images/twitter.png" />
      </button>
    </div>
    <div class="bottom-navbar">
     
      <button class="nav-button-right">PoLasach.pl</button>
    </div>
  </div>
</template>

<style scoped>
.bottom-navbar {
  display: flex;
  justify-content: space-around;
  
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 20px;
  z-index: 100;
  
}
.twitter-button {
  height: 70px;
  width: 70px;
  border: none;
  left: 0;
  bottom: 20px;
  position: fixed;
}

.twitter-button img {
  height: 100%;
  align-content: center;
  left: 0;
  bottom: 0;
}
.nav-button {
  color: black;
  background-color: transparent;
  border: none;
  font-size: 12px;
  cursor: pointer;
}

.nav-button-right {
  color: black;
  background-color: white;
  right: 0;
  border: none;
  font-size: 12px;
  cursor: pointer;
  width: 100%;
}

.nav-button:hover {
  color: #ccc;
}
</style>
