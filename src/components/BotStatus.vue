<template>
  <div class="bot-status">
    <div class="top">
      Bot's channel:&nbsp;<span v-if="!channelName" class="offline">[offline]</span>
      <span v-else>{{channelName}} <span class="online">[online]</span></span>
    </div>
    <div class="bottom">
      <Button :style="'outline'" @click="toggleMove()">Move bot</Button>
      <Button :style="'outline'" @click="toggleEditMode()">Edit sounds</Button>
    </div>
  </div>
  <div v-if="summonState" class="summon-container">
    <input placeholder="Channel Name" type="text"
      v-model="summonChannelName" @keydown.enter="summon()">
    <Button @click="summon()">Summon</Button>
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
export default class BotStatus extends Vue {
  public channelName: string = '';
  public summonState: boolean = false;
  public summonChannelName: string = '';
  public $store: any;

  public mounted() {
    this.getStatus();
    setInterval(() => {
      this.getStatus();
    }, 5000);
  }

  public toggleMove() {
    this.summonState = !this.summonState;
  }

  public toggleEditMode() {
    this.$store.dispatch('toggleEditMode');
  }

  public async summon() {
    await Api.summon(this.summonChannelName);
    this.summonState = false;
    this.summonChannelName = '';
  }

  private async getStatus() {
    const response = await Api.getStatus();
    this.channelName = response.data.channel;
  }
}
</script>
<style lang="scss">
  .bot-status {
    display: flex;
    flex-flow: column;
  }
  .top {
    .offline {
      color: var(--color-error);
    }

    .online {
      color: var(--color-success);
    }
    font-weight: bold;
  }

  .top, .bottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .button {
      margin-right: 11px;
    }
  }

  .bottom {
    margin-top: 7px;
  }

  .summon-container {
    width: 500px;
    position: fixed;
    top: 50%;
    left: 50%;
    padding: 50px;
    transform: translate(-50%, -50%);
    background: #fff;
    z-index: 999;
    border-radius: 15px;
    input {
      width: 100%;
      outline: none;
      border: 1px solid #333;
      border-radius: 6px;
      margin-bottom: 16px;
      height: 26px;
    }
  }
</style>
