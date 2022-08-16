<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <StillInFirst ref="sif"></StillInFirst>
  <button @click="isMetsInFirst">Try it</button>
</template>

<script>
import StillInFirst from "./components/StillInFirst.vue";

export default {
  name: "App",
  components: {
    StillInFirst,
  },
  computed: {
    console: () => console,
    window: () => window,
  },
  methods: {
    isMetsInFirst(){
      let response = this.$refs.sif.getNLEastStandings();
      this.console.log(response)
      if (response === 0){
        this.console.log(true)
        return true;
      } else if (response != 0){
        return false
      }
    }
  },
  data(){
    return{
      test: '',
      first: '',
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
