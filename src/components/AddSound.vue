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
  .add-sound {
    width: 50%;
    min-width: 200px;
    max-width: 500px;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
  }

  .form-input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    label {
      font-weight: bold;
    }
    input {
      height: 25px;
      width: 100%;
      outline: none;
      border: none;
      border-radius: 2px;
    }
  }

  button {
    margin-top: 12px;
    width: 100%;
    min-width: 200px;
    max-width: 500px;
    height: 25px;
    border: none;
    color: white;
    border-radius: 6px;
    background: #c21500;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #ffc500, #c21500);
    background: linear-gradient(to right, #ffc500, #c21500);
    font-weight: bolder;
  }
</style>
