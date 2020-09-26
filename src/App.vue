<template>
  <div>
    <h1>Discord Bot remote</h1>
    <Sounds></Sounds>
    <AddSound></AddSound>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Sounds from '@/components/Sounds.vue';
import AddSound from '@/components/AddSound.vue';

@Options({
  components: {
    Sounds,
    AddSound,
  },
})
export default class App extends Vue {

}
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
