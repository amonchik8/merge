<template>
  <div class="main">
    <header class="header">
      <a class="logo" href="https://merge">
        <img class="logo__image" src="../assets/images/logo.png" alt="logo" />
      </a>
    </header>
    <Form></Form>
    <footer class="footer">
      <ul class="list">
        <li class="list__item">
          <a class="list__link" href="https://merge/Contact">Contact</a>
        </li>
        <li class="list__item">
          <a class="list__link" href="https://merge/Privacy">Privacy</a>
        </li>
        <li class="list__item">
          <a class="list__link" href="https://merge/Terms">Terms</a>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
import Form from "./Form";

export default {
  name: "FormWrapper",
  components: {
    Form,
  },
};
</script>

<style lang="scss">
.main {
  @include flex(flex-start, stretch, column);
  @include media {
    max-width: 420px;
  }
  width: 100%;
  padding: 12px 0;
  @include media {
    padding: 40px 0 30px;
  }
}
.header {
  @include media {
    @include flex(flex-start, flex-start, row);
  }
  @include flex(center, flex-start, row);
}
.logo {
  @include media {
    margin-bottom: 120px;
  }
  height: 30px;
  margin-bottom: 20px;
  &__image {
    width: 250px;
    height: 30px;
  }
}
.footer {
  @include media {
    @include flex(flex-start, flex-end, row);
  }
  @include flex(center, flex-end, row);
  flex-grow: 1;
}
.list {
  @include flex(flex-start, flex-start, row);
  &__item {
    &:not(:last-child) {
      margin-right: 25px;
    }
  }
  &__link {
    @include text($H14, 600, $text-color);
  }
}
</style>