<template>
  <div id="app">
    <Header title="Germantionary" />
    <Search />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/general/Header.vue";
import Search from "@/components/search/Search.vue";

export default {
  name: "App",
  components: {
    Header,
    Search
  }
};
</script>

<style lang="scss">
@import "~meyer-reset-sass/reset";
@import "./src/assets/scss/main";

@mixin font-face($name, $file, $weight: normal, $style: normal) {
  @font-face {
    font-family: $name;
    font-style: $style;
    font-weight: $weight;
    font-display: swap;
    src: url("#{$file}.eot") format("eot"), url("#{$file}.woff") format("woff"),
      url("#{$file}.ttf") format("truetype");
  }
}

@include font-face(
  "Neuzeit Grotesk",
  "./assets/fonts/neuzeit_grotesk_regular-webfont"
);
@include font-face(
  "Neuzeit Grotesk",
  "./assets/fonts/neuzeit_grotesk_bold-webfont",
  bold
);

@mixin font-family-neuzeit-grotesk {
  font-family: Neuzeit Grotesk, Arial, Verdana, Tahoma, sans-serif;
}

@mixin font-family-default {
  @include font-family-neuzeit-grotesk;
}

body {
  @include font-family-default;
}
</style>
