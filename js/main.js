const { createApp } = Vue;

createApp({
  data() {
    return {
      name: "Paolo",
      urlImg: "img/matrix-neo.webp",
      classes: {
        textCenter: "text-center",
        blue: "text-primary",
      },
    };
  },
}).mount("#app");
