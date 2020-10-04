<template>
  <div class="sounds">
    <div v-if="!$store.state.sounds.length">No sound</div>
    <div class="sound" v-for="sound in $store.state.sounds" :key="sound">
      <div class="sound__block" @click="playSound(sound)"
      :style="{backgroundImage: `url(${sound.picture})`}">
        <div class="edit" v-if="$store.state.editMode">
          <div v-if="!sound.isdefault" class="delete-sound"
            @click.stop="deleteSound(sound.id)">x</div>
        </div>
      </div>
      <div class="sound__name">
        {{sound.name}}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import api, { ISound } from '@/api';
import { Options, Vue } from 'vue-class-component';

@Options({})
export default class Sounds extends Vue {
  public $store!: any;
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
    this.$store.dispatch('getSounds');
  }
}

</script>
<style lang="scss">
  .sounds {
    display: grid;
    margin: 100px 30px;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    grid-template-rows: auto;
    gap: 13px;
  }

  .sound {
    height: 100px;
    width: 100px;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &__block {
      flex-shrink: 0;
      height: 80px;
      width: 80px;
      background: #333;
      transform: scale(1);
      transition: all 250ms ease-in;
      border-radius: 25px;
      position: relative;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      .delete-sound {
        width: 24px;
        height: 24px;
        background: red;
        position: absolute;
        top: -6px;
        left: -6px;
        border-radius: 12px;
      }
    }
    &__name {
      flex-shrink: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100px;
      margin-top: 6px;
      color: #000;
      font-weight: 500;
      font-size: 14px;
    }
    &.active {
      background: orange;
    }
    &:active {
      transform: scale(0.95);
    }
  }
</style>
