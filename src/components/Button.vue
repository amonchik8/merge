<template>
  <button class="button" type="submit">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
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
  background-color: $button-disable;
  @include media {
    margin-bottom: 0;
  }
}
.button-is-valid {
  background-color: $B450;
  transition: background-color .2s ease;
  @include hover {
      background-color: $button-hover-color;
  }
}
.button-disable {

}
</style>