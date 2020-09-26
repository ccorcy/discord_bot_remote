<template>
  <div>
    Bot channel: <span v-if="!channelName" class="offline">Offline</span>
    <span v-else class="online">{{channelName}}</span>
  </div>
  <div class="summon">
    <Button @click="showSummon()">Summon</Button>
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

  public mounted() {
    this.getStatus();
    setInterval(() => {
      this.getStatus();
    }, 5000);
  }

  public showSummon() {
    this.summonState = true;
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
  .offline {
    color: red;
    font-weight: bold;
  }

  .online {
    color: limegreen;
    font-weight: bold;
  }

  .summon {
    margin-left: 16px;
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
