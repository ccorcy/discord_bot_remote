<template>
  <div>
    <h1>Discord Bot remote</h1>
    <div class="sounds">
      <div class="sound" v-for="sound in sounds" :key="sound"
        :class="{active: sound === activeSound}"
        @click="playSound(sound)">
        {{sound}}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class App extends Vue {
  public message: string = 'test';
  public activeSound = '';
  public sounds = [
    'oss1',
    'oss2',
    'oss3',
  ];

  public mounted() {
    this.sounds.push('oss4');
  }

  public playSound(sound: string) {
    this.activeSound = sound;
  }
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

.sounds {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.sound {
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
  transform: scale(1);
  transition: all 250ms ease-in;
  margin: 12px;
  border-radius: 25px;
}
.sound.active {
  background: orange;
}
.sound:active {
  transform: scale(0.95);
}
</style>
