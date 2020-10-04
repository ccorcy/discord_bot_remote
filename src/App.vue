<template>
  <div>
    <div class="navbar">
      <div class="left">
        <BotStatus></BotStatus>
      </div>
      <div class="center">
        <div class="navbar__title">Discord Bot remote</div>
      </div>
      <div class="right"></div>
    </div>
    <Sounds></Sounds>
    <AddSound></AddSound>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Sounds from '@/components/Sounds.vue';
import AddSound from '@/components/AddSound.vue';
import BotStatus from '@/components/BotStatus.vue';

@Options({
  components: {
    Sounds,
    AddSound,
    BotStatus,
  },
})
export default class App extends Vue {

}
</script>

<style lang="scss">
body {
  background: #bdc3c7;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 80px;
  --color-base: #3C75A9;
  --color-error: #E02121;
  --color-success: #27AE60;
}
* {
  box-sizing: border-box;
}

.navbar {
  position: fixed;
  background: rgb(104, 104, 104);
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 30px 16px;
  z-index: 999;
  background: var(--color-base);
  .left, .right {
    width: 25%;
  }
  .navbar__title {
    font-weight: 900;
    font-size: 36px;
  }
}

@media screen and (max-width: 750px) {
  .navbar {
    flex-direction: row-reverse;
    justify-content: space-between;
    &__title {
      font-size: 20px !important;
    }
    .left {
      width: auto;
    }
    .right {
      display: none;
    }
  }
}
</style>
