<template>
  <div class="container">
    <Banner></Banner>
    <FormWrapper></FormWrapper>
  </div>
</template>

<script>
import Banner from "./components/Banner";
import FormWrapper from "./components/FormWrapper";

export default {
  name: "App",
  components: {
    Banner,
    FormWrapper,
  },
};
</script>

<style lang="scss">
.container {
  @include flex(center, stretch, row, wrap-reverse);
  @include media {
    @include flex(center, stretch, row);
    padding: 20px 120px 20px 20px;
  }
  padding: 12px;
  margin: 0 auto;
  @include media {
    height: 100vh;
  }
}
</style>
