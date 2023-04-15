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
  methods: {
    iframeLoaded() {
      // Access the iframe's contentWindow and document
     // const iframeWindow = this.$refs.myIframe.contentWindow;
      const iframeDocument = this.$refs.myIframe.contentDocument;

      // Find the button inside the iframe (assuming it has an ID)
      const button = iframeDocument.getElementById("your-button-id");

      // Click the button
      if (button) {
        button.click();
      } else {
        console.error("Button not found");
      }
    },
    onload(){
       this.$gtm.trackEvent({
        event: null, // Event type [default = 'interaction'] (Optional)
        category: "Iframe",
        action: "load",
        label: "Loaded",
        value: 5000,
        noninteraction: false, // Optional
      }); 
    }
  },
};

</script>
  