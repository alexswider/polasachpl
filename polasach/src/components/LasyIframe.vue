<template>
  <div>
    <!-- Add your iframe -->
    <iframe
      ref="myIframe"
      src="https://mapy.lasyiobywatele.pl/zanim-wytna-twoj-las.html"
      @load="iframeLoaded"
      width="100%"
      height="1000px"
      style="
      width:100vw;
      height:100vh;
      "
    ></iframe>
    <!-- Other content -->
  </div>
</template>

  <script>
export default {
  name: "LasyIframe",
  mounted() {
    this.trackPageView();
  },
  methods: {
    trackPageView() {
      const pageTitle = "maps"; // Replace with your actual page title

    
      this.$gtag.pageview({
        page_path: "/",
        page_title: pageTitle,
      });

      console.log("iframeLoaded")
    },
    iframeLoaded() {
      
    }
  }
  
  
};

</script>
  