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
    <div>OR</div>
    <div class="form-input">
      <label for="url">Youtube URL</label>
      <input id="url" type="text" v-model="url">
    </div>
    <div class="form-input">
      <label for="picture">Sound picture</label>
      <input id="picture" type="text" v-model="picture">
    </div>
    <Button class="button" @click="addSound()">Add sound</Button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/core/Button.vue';
import Api from '@/api';

@Options({
  components: {
    Button,
  },
})
export default class AddSounds extends Vue {
  public name: string = '';
  public filename: string = '';
  public url: string = '';
  public picture: string = '';
  public $store!: any;

  public created() {
    console.log('this :>> ', this);
  }

  public async addSound() {
    if (!this.name || (!this.filename && !this.url)) return;
    await Api.addSound({
      name: this.name,
      filename: this.filename,
      url: this.url,
      picture: this.picture,
    });
    this.name = '';
    this.filename = '';
    this.url = '';
    this.picture = '';
    this.$store.dispatch('getSounds');
  }
}
</script>
<style lang="scss" scoped>
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

  .button {
    width: 100%;
    margin: 12px auto;
    min-width: 200px;
    max-width: 500px;
    border: none;
    color: white;
    border-radius: 6px;
    font-weight: bolder;
    outline: none;
  }
</style>
