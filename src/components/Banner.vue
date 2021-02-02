<template>
  <div class="main">
    <Slider />
    <div class="main__image-wrapper">
      <img class="main__image" src="../assets/images/bgImage-2.png" alt="" />
    </div>
  </div>
</template>

<script>
import Slider from "./Slider";

export default {
  name: "Banner",
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.main {
  @include flex(center, center, column);
  background-color: $B450;
  background-image: url("../assets/images/bgImage-1.png");
  background-size: cover;
  height: auto;
  max-width: 100%;
  max-width: 800px;
  border-radius: 15px;
   @include media {
    margin-right: 80px;
  }
  margin-right: 0;
  position: relative;
  &__image-wrapper {
    position: absolute;
    display: flex;
    bottom: 0;
    right: 0;
  }
  &__image {
    border-radius: 15px;
    display: none;
    @include media {
      display: block;
    }
  }
}
</style>