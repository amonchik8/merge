<template>
  <form id="form" class="form" @submit.prevent="checkForm" novalidate="true">
    <h1 class="form__title">Sign in</h1>
    <p class="form__subtitle">
      Don’t have an account?
      <a class="form__sign-up" href="https://merge/Sign-up">Sign up now</a>
    </p>
    <div class="form__input-wrapper">
      <div class="form__label-wrapper">
        <label class="form__input-label" for="email">Email</label>
        <span
          v-if="$v.form.email.$dirty && !$v.form.email.required"
          class="invalid-feedback"
          >Invalid email</span
        >
        <span
          v-if="$v.form.email.$dirty && !$v.form.email.email"
          class="invalid-feedback"
          >Invalid email</span
        >
      </div>
      <input
        id="email"
        v-model="form.email"
        type="email"
        name="email"
        class="form__input"
        :class="$v.form.email.$error ? 'input-invalid' : ''"
      />
      <div class="form__label-wrapper">
        <label class="form__input-label" for="password">Password</label>
        <span
          v-if="$v.form.password.$dirty && !$v.form.password.required"
          class="invalid-feedback"
          >Invalid format too short</span
        >
        <span
          v-if="$v.form.password.$dirty && !$v.form.password.minLength"
          class="invalid-feedback"
          >Invalid format too short</span
        >
      </div>
      <div>
        <a class="form__forgot" href="https://merge/Forgot-password"
          >Forgot your password?</a
        >
        <input
          id="password"
          v-model="form.password"
          type="password"
          name="password"
          class="form__input form__input--password"
          :class="$v.form.password.$error ? 'input-invalid' : ''"
        />
      </div>
    </div>
    <Button>Sign in</Button>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, minLength, email } from "vuelidate/lib/validators";

import Button from "./Button";
export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  validations: {
    form: {
      email: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(8),
      },
    },
  },
  methods: {
    checkForm() {
      this.$v.form.$touch();
    },
  },
  name: "Form",
  components: {
    Button,
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
  &__input-wrapper {
    @include flex(flex-start, stretch, column);
    width: 100%;
  }
  &__label-wrapper {
    @include flex(space-between, center);
    margin-bottom: 6px;
  }
  &__input-label {
    width: 10px;
    @include text($H14, 600, $text-color);
    line-height: 1.7;
  }
  &__forgot {
    @include text($H14, 600, $text-color);
    position: absolute;
    z-index: 1;
    padding: 15px 0;
    right: 20px;
  }
  &__input {
    @include text($H14, 600, $text-color);
    width: 100%;
    padding: 15px 20px;
    border: 1px solid #e0e5e9;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.2s ease;
    margin-bottom: 12px;
    @include media {
      margin-bottom: 30px;
    }
    &--password {
      position: relative;
    }
    &:focus {
      border-color: $B450;
    }
  }
}
.input-invalid {
  border: 1px solid $invalid-color;
  &:focus {
    border-color: $invalid-color;
  }
}
.input-valid {
  border: 1px solid $valid-color;
  &:focus {
    border-color: $valid-color;
  }
}
.invalid-feedback {
  @include text($H12, 400, $invalid-color);
  transition: all 0.2s ease;
}
</style>