<template>
    <div class="button btn-grad">
      <slot></slot>
    </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Emit } from 'vue-property-decorator';

@Options({})
export default class Button extends Vue {
  @Emit() public click() {
    this.$emit('click');
  }
}
</script>
<style lang="scss">
    .button {
      padding: 6px 12px;
      border-radius: 6px;
      cursor: pointer;
      user-select: none;
      transform: scale(1);
    }
    .button:active {
      transform: scale(0.95);
    }
    .btn-grad {
      background-image: linear-gradient(to right, #16222A 0%, #3A6073 51%, #16222A 100%)
    }

    .btn-grad {
      text-align: center;
      text-transform: uppercase;
      transition: 0.5s;
      background-size: 200% auto;
      color: white;
      box-shadow: 0 0 20px #16222A;
      border-radius: 10px;
      display: block;
    }

    .btn-grad:hover {
      background-position: right center;
      /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }
</style>
