<template>
  <div>
    <ol class="track-list">
      <li
        class="track"
        v-for="(track, index) in tracks"
        v-bind:item="track"
        v-bind:index="index"
        v-bind:key="track.id"
      >
        <a v-bind:href="track.uri" target="_blank">
          <div class="track-content">
            <img v-bind:src="track.img" alt="Spotify Album image" width="150" height="100%">
            <div class="track-content__info">
              <h2>{{ track.name }}</h2>
              <p>{{ track.artist }}</p>
              <scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
              <p>Playcount: {{ track.playcount }}</p>
            </div>
          </div>
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
import TrackService from "../TrackService";
import TrackCountService from "../TrackCountService";
import TrackParser from "../TrackParser";
import ScaleLoader from "./ScaleLoader.vue";

export default {
  name: "Track",
  components: {
    ScaleLoader
  },
  data() {
    return {
      tracks: [],
      error: "",
      // Spinner //
      loading: false,
      color: "#3AB982",
      height: "20px",
      width: "4px",
      margin: "1px",
      radius: "3px"
      //-//
    };
  },
  async created() {
    try {
      this.loading = true;
      //this.tracks = await TrackService.getTracks();
      this.tracks = await TrackParser.getTracks();
      //tracks.map(item => { item.playcount = await TrackCountService.getTrack(item.id)});
      console.log(this.tracks);
      // This is supposed to load untill playcount has been fetched.
      // this.loading = false;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {}
};
</script>

<style scoped>
.track-list {
  display: block;
}

.track {
  width: 50%;
  background-color: #e9ecf6;
  border-left: 6px solid #34495e;
  color: white;
  margin: auto;
  text-align: left;
  margin-bottom: 20px;
  text-decoration: none;
  position: relative;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  -webkit-transition-duration: 0.5s;
  transition-duration: 0.5s;
  -webkit-transition-property: transform;
  transition-property: transform;
}

.track:hover {
  -webkit-transform: translateX(-15px);
  transform: translateX(-15px);
}

.track:hover .track-content__info h2,
.track:hover .track-content__info p {
  color: white;
}

.track-content:before {
  background-color: #34495e;
  content: "asd";
  height: 0;
  color: transparent;
  transition: 0.5s;
  position: absolute;
  left: 150px;
  height: 100%;
  opacity: 1;
  width: 0%;
}

.track-content:hover:before {
  background: #34495e;
  content: "asd";
  color: transparent;
  height: 30px;
  position: absolute;
  z-index: -1;
  transition: 0.5s;
  left: 150px;
  height: 100%;
  width: calc(100% - 150px);
}

a {
  text-decoration: none;
}

.track-content {
  display: flex;
}

.track-content__info {
  display: block;
  margin-left: 50px;
}

h2 {
  color: #34495e;
  text-decoration: none;
  padding-right: 10px;
  font-size: 1.875em;
  margin-bottom: 0;
}
p {
  color: #34495e;
  text-decoration: none;
  padding-right: 10px;
  font-size: 1.375em;
  margin: 0;
}
</style>
