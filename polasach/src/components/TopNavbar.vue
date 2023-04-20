<template>
  <div class="top-navbar">
    <button  ><img src="/images/logo.png"/> </button> 
  </div>
</template>

<style scoped>
.top-navbar {
  display: flex;
  justify-content: space-around;
  align-items: left;
  position: fixed;
  top: 0;
  left: 0;
  width: 70px;
  height: 70px;
  z-index: 101;
  background: none;
  
}


.top-navbar button img{
width: 100%;
scale: auto;
margin: 0;
}
.top-navbar button{
width: 100%;
margin: 0;
border:none;
}


</style>
