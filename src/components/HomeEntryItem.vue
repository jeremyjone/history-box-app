<template>
  <div
    :class="`q-py-xs full-width bg-${bgColor || defaultBgColor}`"
    v-touch-hold.mouse="handleHold"
  >
    <div class="q-mx-md text-bold text-h6 text-center">
      {{ title }}
    </div>
    <div class="text-center text-blue-grey-6 text-caption">{{ duration }}</div>
    <div
      class="q-mx-md text-subtitle2 text-center text-no-wrap text-grey-13"
      :style="{ 'text-overflow': 'ellipsis', overflow: 'hidden' }"
    >
      {{ description }}
    </div>

    <q-dialog v-model="showDetails">
      <q-card>
        <q-card-section class="row items-center">
          <div class="text-h6">{{ title }}</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pt-none" v-html="comment">
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "HomeEntryItem",

  props: {
    title: {
      type: String,
      required: true
    },
    comment: String,
    description: String,
    duration: String,
    bgColor: {
      type: String,
      default: "secondary"
    }
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeDestroy() {},

  destroyed() {},

  data() {
    return {
      showDetails: false,
      defaultBgColor: "secondary"
    };
  },

  computed: {},

  watch: {},

  methods: {
    handleHold: function() {
      this.showDetails = true;
    }
  },

  components: {}
};
</script>

<style lang="stylus" scoped></style>
