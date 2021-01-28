<template>
  <div class="container">
    <Banner></Banner>
    <FormWrapper></FormWrapper>
  </div>
</template>

<script>
import Banner from "./Banner";
import FormWrapper from "./FormWrapper";

export default {
  name: "Container",
  components: {
    Banner,
    FormWrapper,
  },
};
</script>

<style lang="scss">
.container {
  @include flex(center, stretch, row);
  padding: 20px 120px 20px 20px;
  margin: 0 auto;
  height: 100vh;
}
</style>