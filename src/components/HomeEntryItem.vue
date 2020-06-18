<template>
  <div
    :class="`q-py-xs full-width bg-${bgColor || defaultBgColor}`"
  >
    <div class="q-mx-md text-bold text-h6 text-center">
      {{ title }}
    </div>
    <div class="text-center text-blue-grey-6 text-caption">{{ duration }}</div>
    <div
      class="q-mx-md text-subtitle2 text-center text-no-wrap text-grey-13"
      :style="{ 'text-overflow': 'ellipsis', overflow: 'hidden' }"
    >
      {{ comment }}
    </div>
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
      defaultBgColor: "secondary"
    };
  },

  computed: {},

  watch: {},

  methods: {},

  components: {}
};
</script>

<style lang="stylus" scoped></style>
