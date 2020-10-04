<template>
    <div class="button" :class="[style]">
      <slot></slot>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Emit, Prop } from 'vue-property-decorator';

@Options({})
export default class Button extends Vue {
  @Prop() public style: 'fill' | 'outline' = 'fill';
  @Emit() public click() {
    this.$emit('click');
  }
}
</script>
<style lang="scss">
    .button {
      border-radius: 40px;
      cursor: pointer;
      user-select: none;
      padding: 0px 0px 0px 0px;
      font-size: 12px;
      transform: scale(1);
      height: 22px;
      width: 85px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
    }
    .fill {
      color: #fff;
      background: var(--color-base);
    }
    .outline {
      color: var(--color-base);
      background: #fff;
    }
    .button:active {
      transform: scale(0.95);
    }
</style>
