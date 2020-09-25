<template>
  <div>
    <h1>Discord Bot remote</h1>
    <div class="sounds">
      <div class="sound" v-for="sound in sounds" :key="sound"
        :class="{active: sound.id === activeSound?.id}"
        @click="playSound(sound)">
        <div class="delete-sound" @click.stop="deleteSound(sound.id)">x</div>
        {{sound.name}}
      </div>
    </div>
    <div class="add-sound">
      <div class="form-input">
        <label for="name">Name</label>
        <input id="name" type="text" v-model="name">
      </div>
      <div class="form-input">
        <label for="filename">Filename</label>
        <input id="filename" type="text" v-model="filename">
      </div>
      <button @click="addSound()">Add sound</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Api, { ISound } from './api';

@Options({})
export default class App extends Vue {
  public message: string = 'test';
  public activeSound: ISound | null = null;
  public sounds: ISound[] = [];
  public name: string = '';
  public filename: string = '';
  public api = new Api();

  public async mounted() {
    this.getSounds();
  }

  public async addSound() {
    if (this.filename && this.name) {
      await this.api.addSound({ name: this.name, filename: this.filename });
      this.name = '';
      this.filename = '';
      this.getSounds();
    }
  }

  public async playSound(sound: ISound) {
    await this.api.playSound(sound.id!);
  }

  public async deleteSound(soundId: string) {
    this.api.deleteSound(soundId);
    this.getSounds();
  }

  private async getSounds() {
    this.sounds = await this.api.getSounds();
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
  position: relative;
}
.sound .delete-sound {
  width: 24px;
  height: 24px;
  background: red;
  position: absolute;
  top: -6px;
  left: -6px;
  border-radius: 12px;
}
.sound.active {
  background: orange;
}
.sound:active {
  transform: scale(0.95);
}
</style>
