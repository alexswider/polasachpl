<template>
  <div id="app">
    <!-- <PolasachMap /> -->
    <LasyIframe />
    <bottom-navbar @share="shareOnTwitter"></bottom-navbar>
  </div>
  
    
  
</template>

<script>
import LasyIframe from './components/LasyIframe.vue';
import BottomNavbar from "@/components/BottomNavbar.vue";
import html2canvas from "html2canvas";

//import PolasachMap from './components/PolasachMap.vue';

export default {
  components: {
  //  PolasachMap,
    LasyIframe,
    BottomNavbar,
  },
  methods: {
  async shareOnTwitter() {
    console.log("shareontwitter");
    const targetDiv = document.getElementById("app"); // Replace 'target-div' with your div's ID

    // Capture the div as a canvas
    const canvas = await html2canvas(targetDiv);

    // Convert the canvas to a base64 data URL
    const imageURL = canvas.toDataURL("image/png");

    // Encode the image URL for sharing
    const encodedImageURL = encodeURIComponent(imageURL);

    // Compose the Twitter share URL
    const twitterShareURL = `https://twitter.com/intent/tweet?url=${encodedImageURL}`;

    // Open the Twitter share URL in a new window
    window.open(twitterShareURL, "_blank");
  },
},
};


</script>
