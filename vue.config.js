module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_core.scss";`,
      },
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/merge/" : "/",
};
