<template>
  <q-page>
    <q-list padding>
      <q-item clickable v-ripple exact :to="{ path: '/history' }">
        <q-item-section>
          <HomeEntryItem title="总览" comment="全部历史事件" />
        </q-item-section>
      </q-item>

      <q-item
        clickable
        v-ripple
        exact
        v-for="item in dynasties"
        :key="item.uid"
        :to="{ path: `/history?dynastyId=${item.uid}`}"
      >
        <q-item-section>
          <HomeEntryItem
            :title="item.name"
            :comment="item.comment"
            :duration="`${item.startYear} - ${item.endYear}`"
            :bg-color="item.bgColor"
          />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import HomeEntryItem from "../components/HomeEntryItem";
import { mapState } from "vuex";
export default {
  name: "IndexPage",

  props: {},

  beforeCreate() {},

  created() {},

  beforeMount() {},

  mounted() {},

  beforeDestroy() {},

  destroyed() {},

  data() {
    return {};
  },

  computed: {
    ...mapState("common", ["dynasties"])
  },

  watch: {},

  methods: {},

  components: { HomeEntryItem }
};
</script>

<style lang="stylus" scoped></style>
