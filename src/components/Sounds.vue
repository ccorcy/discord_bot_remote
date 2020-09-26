<template>
  <div class="sounds">
    <div class="sound" v-for="sound in sounds" :key="sound"
      @click="playSound(sound)">
      <div class="delete-sound" @click.stop="deleteSound(sound.id)">x</div>
      {{sound.name}}
    </div>
  </div>
</template>
<script lang="ts">
import api, { ISound } from '@/api';
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Sounds extends Vue {
  public sounds: ISound[] = [];

  public mounted() {
    this.getSounds();
  }

  public async playSound(sound: ISound) {
    await api.playSound(sound.id!);
  }

  public async deleteSound(soundId: string) {
    api.deleteSound(soundId);
    this.getSounds();
  }

  private async getSounds() {
    this.sounds = await api.getSounds();
  }
}

</script>
<style lang="scss">
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
