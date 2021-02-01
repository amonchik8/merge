<template>
  <form class="form" @submit.prevent="onSubmit">
    <h1 class="form__title">Sign in</h1>
    <p class="form__subtitle">
      Don’t have an account?
      <a class="form__sign-up" href="https://merge/Sign-up">Sign up now</a>
    </p>
    <Input
      v-model="email"
      :has-error="emailHasError"
      :error-message="emailErrorMessage"
      :valid="emailValid"
      label="Email"
      type="email"
      required
      @blur="emailHasError = !emailValid"
      @focus="emailHasError = false"
    />
    <div class="form__input--password">
    <Input
      v-model="password"
      :has-error="passwordHasError"
      :error-message="passwordErrorMessage"
      :valid="passwordValid"
      :input="inputValid"
      label="Password"
      type="password"
      required
      @blur="passwordHasError = !passwordValid"
      @focus="passwordHasError = false" />
      <a class="form__forgot" href="https://merge/Forgot-password"
      >Forgot your password?</a>
    </div>

    <Button :disabled="disabled">Sign in</Button>
  </form>
</template>

<script>
import Button from "./Button";
import Input from "./Input";

export default {
  name: "Form",
  components: {
    Button,
    Input,
  },
  data() {
    return {
      email: "",
      password: "",
      emailHasError: false,
      passwordHasError: false,
    };
  },
  computed: {
    emailValid() {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase());
    },
    passwordValid() {
      return this.password.length >= 4;
    },
    emailErrorMessage() {
      switch (true) {
        case !this.email:
          return "Enter email";
        case !this.emailValid:
          return "Invalid email";
        default:
          return "";
      }
    },
    passwordErrorMessage() {
      switch (true) {
        case !this.password:
          return "Enter password";
        case !this.passwordValid:
          return "Invalid format too short";
        default:
          return "";
      }
    },
    disabled() {
      return !this.emailValid || !this.passwordValid;
    },
  },
  methods: {
    onSubmit() {
      alert("Sign in");
    },
  },
};
</script>

<style lang="scss">
.form {
  position: relative;
  @include flex(flex-start, flex-start, column);
  &__title {
    margin: 0 auto;
    @include text($H28, 700, $title-color);
    @include media {
      margin: 0 0 15px;
    }
    margin-bottom: 8px;
  }
  &__subtitle {
    margin: 0 auto;
    @include text($H14, 600, $title-color);
    @include media {
      margin: 0 0 90px;
    }
    margin-bottom: 8px;
  }
  &__sign-up {
    @include text($H14, 600, $B450);
    transition: color 0.2s ease;
    @include hover {
      @include text($H14, 600, $B480);
    }
  }
  &__input--password {
    width: 100%;
    position: relative;
  }
  &__forgot {
    @include text($H14, 600, $text-color);
    position: absolute;
    top: 22.5px;
    z-index: 1;
    padding: 15px 0;
    right: 20px;
  }
}
</style>