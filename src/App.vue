<template>
  <div>
    <div class="navbar">
      <BotStatus></BotStatus>
    </div>
    <h1>Discord Bot remote</h1>
    <Sounds></Sounds>
    <AddSound></AddSound>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Sounds from '@/components/Sounds.vue';
import AddSound from '@/components/AddSound.vue';
import BotStatus from '@/components/BotStatus.vue';

@Options({
  components: {
    Sounds,
    AddSound,
    BotStatus,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
body {
  background: #bdc3c7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
* {
  box-sizing: border-box;
}

.navbar {
  position: fixed;
  background: rgb(104, 104, 104);
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  color: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
}
</style>
