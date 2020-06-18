<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="q-ml-md">
          {{ $appAttr.title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <transition
        appear
        :enter-active-class="pageAnimation.enter"
        :leave-active-class="pageAnimation.leave"
      >
        <router-view />
      </transition>
    </q-page-container>

    <q-footer elevated>
      <q-tabs
        no-caps
        indicator-color="warning"
        class="text-white shadow-2"
        v-model="footerTab"
      >
        <q-route-tab to="/" label="首页" name="index" exact />
        <q-route-tab to="/setting" label="设置" name="setting" exact />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "MainLayout",

  created() {
    this.initDynasties();
  },

  data() {
    return {
      footerTab: "index"
    };
  },

  computed: {
    pageAnimation: function() {
      if (this.$route.path === "/") {
        return {
          enter: "animated slideInLeft",
          leave: "animated slideOutRight"
        };
      } else {
        return {
          enter: "animated slideInRight",
          leave: "animated slideOutLeft"
        };
      }
    }
  },

  methods: {
    ...mapActions("common", ["initDynasties"])
  },

  components: {}
};
</script>
