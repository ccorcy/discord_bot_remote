<template>
    <div v-if="syncedState" class="modal">
        <div class="modal__content">
            <div class="close" @click="close()">
                <img src="../../assets/close-black.svg" alt="close">
            </div>
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropSync, Watch } from 'vue-property-decorator';

@Options({})
export default class Modal extends Vue {
    @PropSync('state', { type: Boolean }) public syncedState!: boolean;

    @Watch('state')
    public stateChange(val: boolean) {
      const body = document.getElementsByTagName('body')[0];
      if (val) {
        body.className = 'noscroll';
      } else {
        body.className = '';
      }
    }

    public destroyed() {
      const body = document.getElementsByTagName('body')[0];
      body.className = '';
    }

    public close() {
      this.syncedState = false;
    }
}

</script>
<style lang="scss">
    .modal {
        overscroll-behavior: contain;
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 999;
        background: rgba(24, 44, 63, 0.5);
        &__content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #fff;
            box-shadow: 0px 1px 10px rgba(50, 97, 139, 0.2);
            border-radius: 10px;
            & .close {
                z-index: 1000;
                position: absolute;
                right: 15px;
                top: 10px;
                cursor: pointer;
                img {
                    width: 12px;
                    height: 12px;
                }
            }
        }
    }

</style>
