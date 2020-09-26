<template>
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
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Api from '@/api';

@Options({})
export default class AddSounds extends Vue {
  public name: string = '';
  public filename: string = '';

  public async addSound() {
    if (this.filename && this.name) {
      await Api.addSound({ name: this.name, filename: this.filename });
      this.name = '';
      this.filename = '';
    }
  }
}
</script>
<style lang="scss">

</style>
