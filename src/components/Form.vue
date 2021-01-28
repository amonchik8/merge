<template>
  <form class="form" action="">
    <h1 class="form__title">Sign in</h1>
    <p class="form__subtitle">
      Don’t have an account?
      <a class="form__sign-up" href="">Sign up now</a>
    </p>
    <div class="form__input-wrapper">
      <label class="form__input-label" for="">Email</label>
      <input class="form__input" type="email" />
      <label class="form__input-label" for="">Password</label>
      <input
        class="form__input"
        type="password"
        placeholder="Forgot your password?"
      />
    </div>
    <Button>Sign in</Button>
  </form>
</template>

<script>
import Button from "./Button";
export default {
  name: "Form",
  components: {
    Button,
  },
};
</script>

<style lang="scss">
.form {
  @include flex(flex-start, flex-start, column);
  &__title {
    @include text($H28, 700, $title-color);
    margin-bottom: 15px;
  }
  &__subtitle {
    @include text($H14, 600, $title-color);
    margin-bottom: 90px;
  }
  &__sign-up {
    @include text($H14, 600, $B450);
  }
  &__input-wrapper {
    @include flex(flex-start, stretch, column);
    width: 100%;
  }
  &__input-label {
    @include text($H14, 600, $text-color);
    line-height: 1.7;
    margin-bottom: 10px;
  }
  &__input {
    @include text($H14, 600, $text-color);
    width: 100%;
    padding: 15px 20px;
    text-align: right;
    border: 1px solid #e0e5e9;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s ease;
    margin-bottom: 30px;
    @include placeholder {
      @include text($H14, 600, $text-color);
    }
    &:focus {
      border-color: $B450;
    }
  }
}
</style>