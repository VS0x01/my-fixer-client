<template>
  <GmapMap
    :center="{
      lat: map.lat,
      lng: map.lng
    }"
    :zoom="zoom"
    map-type-id="terrain"
    style="margin: 17px 41px; flex: 1 1 auto; border: 2px solid #EFEFEF;"
    :options="{ styles: mapStyles }"
  >
    <GmapMarker
      v-for="(m, index) in map.markers"
      :key="index"
      :position="m.position"
      :clickable="true"
      @click="showPlace"
    />
  </GmapMap>
</template>

<script>
export default {
  name: "SearchMap",
  props: {
    map: Object
  },
  data() {
    return {
      zoom: 7,
      mapStyles: [
        {
          featureType: "all",
          elementType: "geometry.fill",
          stylers: [
            {
              weight: "2.00"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "geometry.stroke",
          stylers: [
            {
              color: "#9c9c9c"
            }
          ]
        },
        {
          featureType: "all",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [
            {
              color: "#f2f2f2"
            }
          ]
        },
        {
          featureType: "landscape",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "landscape.man_made",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [
            {
              saturation: -100
            },
            {
              lightness: 45
            }
          ]
        },
        {
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#eeeeee"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#7b7b7b"
            }
          ]
        },
        {
          featureType: "road",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [
            {
              visibility: "simplified"
            }
          ]
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [
            {
              visibility: "off"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [
            {
              color: "#46bcec"
            },
            {
              visibility: "on"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "geometry.fill",
          stylers: [
            {
              color: "#c8d7d4"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#070707"
            }
          ]
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [
            {
              color: "#ffffff"
            }
          ]
        }
      ]
    };
  },
  methods: {
    showPlace() {
      this.zoom++;
    }
  }
};
</script>

<style lang="sass" scoped></style>
