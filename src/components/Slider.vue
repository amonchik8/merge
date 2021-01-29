<template>
  <div class="slider">
    <div class="slider__slide">
      <div class="slider__image-wrapper">
        <img
          class="slider__image"
          src=""
          alt="img"
        />
      </div>
      <h2 class="slider__title">Tokenplace</h2>
      <p class="slider__subtitle">Multi-exchange Trading Terminal</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
};
</script>

<style lang="scss">
.slider {
  position: relative;
  z-index: 1;
  &__slide {
    @include flex(center, center, column);
    padding: 0 12px;
  }
  &__image {
    margin-bottom: 60px;
  }
  &__title {
    @include text($H20, 500, $N0);
    margin-bottom: 15px;
    line-height: 1.3;
    letter-spacing: 1px;
  }
  &__subtitle {
    @include text($H14, 500, $N0);
    line-height: 1.7;
    letter-spacing: 1px;
  }
}
</style>