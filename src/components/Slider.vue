<template>
  <div class="glide">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <li class="glide__slide">
          <div class="glide__image-wrapper">
            <img
              class="glide__image"
              src="../assets/images/slide-1.png"
              alt=""
            />
          </div>
          <h2 class="glide__title">Tokenplace</h2>
          <p class="glide__subtitle">Multi-exchange Trading Terminal</p>
        </li>
        <li class="glide__slide">
          <div class="glide__image-wrapper">
            <img
              class="glide__image"
              src="../assets/images/slide-2.png"
              alt=""
            />
          </div>
          <h2 class="glide__title">Fund Platform</h2>
          <p class="glide__subtitle">Hedge funds wealth management</p>
        </li>
        <li class="glide__slide">
          <div class="glide__image-wrapper">
            <img
              class="glide__image"
              src="../assets/images/slide-3.png"
              alt=""
            />
          </div>
          <h2 class="glide__title">Noviscient</h2>
          <p class="glide__subtitle">Management Platform</p>
        </li>
      </ul>
      <div class="glide__bullets" data-glide-el="controls[nav]">
        <button class="glide__bullet" data-glide-dir="=0"></button>
        <button class="glide__bullet" data-glide-dir="=1"></button>
        <button class="glide__bullet" data-glide-dir="=2"></button>
      </div>
    </div>
  </div>
</template>

<script>
import Glide from "@glidejs/glide";

export default {
  name: "Slider",
  mounted() {
    new Glide(".glide", {
      type: "carousel",
      startAt: 0,
      gap: 30,
    }).mount();
  },
};
</script>

<style lang="scss">
.glide * {
  box-sizing: inherit;
}
.glide {
  position: relative;
  max-width: 512px;
  box-sizing: border-box;
  &__track {
    overflow: hidden;
  }
  &__slides {
    position: relative;
    width: 100%;
    list-style: none;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    touch-action: pan-Y;
    overflow: hidden;
    padding: 0;
    white-space: nowrap;
    display: flex;
    flex-wrap: nowrap;
    will-change: transform;
    z-index: 1;
  }
  &__slides--dragging {
    user-select: none;
  }
  &__slide {
    width: 100%;
    height: 100%;
    @include flex(center, center, column);
    flex-shrink: 0;
    white-space: normal;
    user-select: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
  }
  &__slide a {
    user-select: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
  &__arrows {
    -webkit-touch-callout: none;
    user-select: none;
  }
  &__bullets {
    -webkit-touch-callout: none;
    user-select: none;
  }
  &--rtl {
    direction: rtl;
  }
  &__bullets {
    position: absolute;
    z-index: 2;
    bottom: 7px;
    @include media {
      bottom: -80px;
    }
    left: 50%;
    display: inline-flex;
    list-style: none;
    transform: translateX(-50%);
  }
  &__bullet {
    background-color: rgba(255, 255, 255, 0.5);
    @include size(8px);
    border-radius: 50%;
    transition: all 0.1s ease;
    cursor: pointer;
    &:not(:last-child) {
      margin-right: 45px;
    }
  }
  &__bullet:focus {
    outline: none;
  }
  &__bullet:hover,
  &__bullet:focus {
    background-color: $N0;
  }
  &__bullet--active {
    background-color: $N0;
  }
  &--swipeable {
    cursor: grab;
    cursor: -moz-grab;
    cursor: -webkit-grab;
  }
  &--dragging {
    cursor: grabbing;
    cursor: -moz-grabbing;
    cursor: -webkit-grabbing;
  }
  &__title {
    @include text($H20, 500, $N0);
    @include media {
      margin-bottom: 15px;
    }
    line-height: 1.3;
    letter-spacing: 1px;
  }
  &__subtitle {
    @include text($H14, 500, $N0);
    line-height: 1.7;
    letter-spacing: 1px;
    max-width: 500px;
    text-align: center;
    margin-bottom: 30px;
    @include media {
      margin-bottom: 0;
    }
  }
  &__image-wrapper {
    width: 300px;
    @include media(430px) {
      width: 380px
    }
    @include media(550px) {
      width: 100%;
    }
    @include media {
      margin-bottom: 70px;
    }
    padding-bottom: 65%;
    position: relative;
  }
  &__image {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    position: absolute;
    padding: 0 12px;
  }
}
</style>