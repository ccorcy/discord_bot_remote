<template>
  <div class="add-sound">
    <div class="add-sound__title">Add a sound</div>
    <div class="form-input">
      <label for="name">Name</label>
      <input id="name" type="text" v-model="name">
    </div>
    <div class="form-input">
      <label for="url">Media source</label>
      <input id="url" type="text" v-model="url" placeholder="Youtube URL">
    </div>
    <div class="form-input">
      <label for="picture">Picture</label>
      <input id="picture" type="text" v-model="picture" placeholder="URL">
    </div>
    <Button :style="'fill'" @click="addSound()">+ Add sound</Button>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from '@/components/core/Button.vue';
import Api from '@/api';
import { Emit } from 'vue-property-decorator';

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
    this.soundAdded();
  }

  @Emit('soundAdded')
  public soundAdded() {
    return true;
  }
}
</script>
<style lang="scss" scoped>
  .add-sound {
    margin: 20px auto 0px;
    display: flex;
    flex-direction: column;
    position: relative !important;
    padding: 20px;
    min-width: 500px;
    &__title {
      font-weight: bold;
      font-size: 26px;
      line-height: 120%;
      margin-bottom: 30px;
    }
  }

  .form-input {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    min-width: 100%;
    label {
      font-weight: bold;
      font-size: 18px;
    }
    input {
      margin-top: 12px;
      margin-bottom: 20px;
      height: 32px;
      width: 100%;
      outline: none;
      border: none;
      background: #F4F5F8;
      border-radius: 5px;
      padding-left: 12px;
    }
  }

  .button {
    margin: 39px auto 0px;
  }

  @media screen and (max-width: 375px) {
    .add-sound {
      max-width: 300px;
      min-width: 300px;
    }
  }
</style>
