<template>
  <div class="input">
    <div class="input__label-wrapper">
      <label class="input__label" v-if="!!label">{{ label }}</label>
      <span v-if="hasError" class="input__error-message">{{
        errorMessage
      }}</span>
    </div>
    <div>
      <input
        class="input__input"
        :class="{ _error: hasError, _valid: valid }"
        :placeholder="placeholder"
        :type="type"
        :required="required"
        :value="value"
        @input="(e) => $emit('input', e.target.value)"
        @blur="$emit('blur')"
        @focus="$emit('focus')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    label: String,
    message: String,
    type: String,
    input: Boolean,
    required: Boolean,
    placeholder: String,
    hasError: Boolean,
    errorMessage: String,
    value: String,
    valid: Boolean,
  },
};
</script>

<style lang="scss">
.input {
  @include flex(flex-start, stretch, column);
  width: 100%;
  transition: border-color 0.2s ease;
  margin-bottom: 12px;
  @include media {
    margin-bottom: 30px;
  }
  &__input {
    @include text($H14, 600, $title-color);
    outline: none;
    width: 100%;
    padding: 17px 20px;
    border: 1px solid #e0e5e9;
    border-radius: 8px;
    transition: border-color 0.2s ease;
    position: relative;
    &:focus {
      border-color: $B450;
    }
  }
  &__label-wrapper {
    @include text($H14, 600, $title-color);
    @include flex(space-between, center);
    margin-bottom: 12px;
    letter-spacing: 0.2px;
  }
  &__error-message {
    color: $invalid-color;
  }
}
// .input-valid {
//   border: 1px solid $valid-color;
//   &:focus {
//     border-color: $valid-color;
//   }
// }
</style>