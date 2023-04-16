<template>
  <div id="app">
    <!-- <PolasachMap /> -->
    <LasyIframe />
    <top-navbar></top-navbar>
    <bottom-navbar @share="shareOnTwitter"></bottom-navbar>
  </div>
</template>

<script>
import LasyIframe from "./components/LasyIframe.vue";
import BottomNavbar from "@/components/BottomNavbar.vue";
import TopNavbar from "@/components/TopNavbar.vue";
import html2canvas from "html2canvas";
import axios from "axios";

//import PolasachMap from './components/PolasachMap.vue';

export default {
  components: {
    //  PolasachMap,
    LasyIframe,
    BottomNavbar,
    TopNavbar
  },
  methods: {
    async shareOnTwitter() {
      console.log('hareontwitter');
      const targetDiv = document.getElementById("app").children[0]; // Replace 'target-div' with your div's ID

      // Capture the div as a canvas
      const canvas = await html2canvas(targetDiv);

      // Convert the canvas to a base64 data URL
      const imageURL = canvas.toDataURL("image/png");

      // Upload the image using the ImgBB API
      const imgBBApiKey = "e2f72ed5e8a19f997874f96cc2dab2e3"; // Replace with your ImgBB API Key
      const apiEndpoint = "https://api.imgbb.com/1/upload";

      const formData = new FormData();
      formData.append("image", imageURL.split("base64,")[1]);
      formData.append("key", imgBBApiKey);

      const response = await axios.post(apiEndpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      // Get the image link from the API response
      const imageLink = response.data.data.url;

      // Compose the Twitter share URL
      const twitterShareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
        imageLink
      )}`;

      // Open the Twitter share URL in a new window
      window.open(twitterShareURL, "_blank");
    },
  },
};
</script>
