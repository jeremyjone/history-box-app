<template>
  <div id="q-app">
    <transition
      appear
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut"
    >
        <router-view />
    </transition>
  </div>
</template>

<script>
import { QSpinnerDots } from "quasar";
export default {
  name: "App",

  beforeCreate() {
    this.$q.loading.setDefaults({
      message: "努力加载中...",
      spinner: QSpinnerDots
    });
  }
};
</script>
