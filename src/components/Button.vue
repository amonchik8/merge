<template>
  <button @click="(e) => $emit('click', e)" class="button" :disabled="disabled">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    disabled: Boolean,
  },
};
</script>

<style lang="scss">
.button {
  @include text($H16, 600, $N0);
  cursor: pointer;
  @include flex(center, center);
  width: 100%;
  border-radius: 8px;
  padding: 16px 0;
  margin-bottom: 12px;
  background-color: $B450;
  transition: background-color 0.2s ease;
  @include hover {
    background-color: $button-hover-color;
  }
  @include media {
    margin-bottom: 0;
  }
}
.button:disabled {
  cursor: not-allowed;
  background-color: $button-disable;
}
</style>