<template>
  <div>
   

    <GmapMap
      :center="center"
      :zoom="zoom"
      :options="mapOptions"
      style="width: 100vw; height: 100vh;"
      @click="addMarker"
      @bounds_changed="boundsChanged"
    >
      <GmapMarker
        v-for="(marker, index) in markers"
        :key="index"
        :position="marker.position"
        @click="markerClick(index)"
      >
        <GmapInfoWindow :options="{ maxWidth: 200 }" v-if="marker.showInfo">
          <div>
            <p>{{ marker.infoContent }}</p>
          </div>
        </GmapInfoWindow>
      </GmapMarker>
    </GmapMap>
  </div>
</template>


<script>
export default {
  data() {
  return {
    center: { lat: 0, lng: 0 },
    zoom: 8,
    mapOptions: {
      mapTypeId: 'satellite', // Enables satellite view
    },
    markers:[],
  };
},
mounted() {
  this.geolocation();
},
methods: {
  geolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  },
  addMarker(event) {
    this.markers.push({
      position: event.latLng,
      showInfo: false,
      infoContent: 'Marker info content',
    });
  },
  markerClick(index) {
    this.markers[index].showInfo = !this.markers[index].showInfo;
  },
  boundsChanged() {
    // Fetch s and display relevant information based on the visible area of the map.
    // You can use the Google Maps API to query for data within the visible bounds.
  },
},

};
</script>
