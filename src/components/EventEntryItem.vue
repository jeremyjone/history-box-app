<template>
  <div>
    <q-timeline-entry
      side="left"
      v-ripple
      :title="item.title"
      :subtitle="item.year.toString()"
      :avatar="item.icon ? item.icon : void 0"
      v-touch-hold.mouse="handleHold"
    >
      <template>
        <div v-html="content" class="text-justify j-overflow"></div>
      </template>
    </q-timeline-entry>

    <q-dialog v-model="showDetails">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">{{ item.title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none" v-html="item.content">
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { EventModel } from "../model/EventModel";
export default {
  name: "EventEntryItem",

  props: {
    item: EventModel
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeDestroy() {},

  destroyed() {},

  data() {
    return {
      showDetails: false
    };
  },

  computed: {
    content: function() {
      if (this.item.content.startsWith("<div>")) {
        return this.item.content.split("</div>")[0] + "</div>";
      } else {
        return this.item.content;
      }
    }
  },

  watch: {},

  methods: {
    handleHold: function() {
      this.showDetails = true;
    }
  },

  components: {}
};
</script>

<style lang="stylus" scoped>
.j-overflow
  display -webkit-box
  -webkit-box-orient vertical
  -webkit-line-clamp 3
  overflow hidden
</style>
