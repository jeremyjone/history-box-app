<template>
  <q-layout view="lHh Lpr lFf">
    <q-header reveal elevated>
      <q-toolbar>
        <q-btn
          dense
          flat
          round
          icon="keyboard_arrow_left"
          @click="$router.back()"
        />

        <q-toolbar-title>
          {{ $appAttr.title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page
        class="q-ma-md"
        padding
        :style="{ 'padding-top': `${dynastyItem ? 30 : 0}px` }"
      >
        <div
          class="full-width text-center q-ma-lg text-body1"
          v-if="eventList.length === 0"
        >
          暂无数据
        </div>
        <q-timeline layout="dense" side="right" color="blue-grey-4">
          <EventEntryItem
            v-for="item in eventList"
            :key="item.uid"
            :item="item"
          />
        </q-timeline>

        <!-- place QPageSticky at end of page -->
        <q-page-sticky expand position="top" v-if="dynastyItem">
          <q-toolbar
            :class="
              `bg-${dynastyItem.bgColor || 'secondary'} text-white text-center`
            "
          >
            <q-toolbar-title>
              {{ dynastyItem.name }}
            </q-toolbar-title>
          </q-toolbar>
        </q-page-sticky>

        <!-- place QPageScroller at end of page -->
        <q-page-scroller
          position="bottom-right"
          :scroll-offset="150"
          :offset="[18, 18]"
        >
          <q-btn fab icon="keyboard_arrow_up" color="accent" />
        </q-page-scroller>
      </q-page>
    </q-page-container>

    <!-- <q-footer reveal elevated>
      <q-tabs
        no-caps
        indicator-color="warning"
        class="text-white shadow-2"
        v-model="footerTab"
      >
        <q-route-tab to="/" label="首页" name="index" exact />
        <q-route-tab to="/setting" label="设置" name="setting" exact />
      </q-tabs>
    </q-footer> -->
  </q-layout>
</template>

<script>
import EventEntryItem from "../components/EventEntryItem.vue";
import { EventModel } from "../model/EventModel";
import { mapState } from "vuex";
export default {
  name: "TimelineLayout",

  props: {},

  beforeCreate() {},

  async created() {
    this.$q.loading.show();

    // 获取参数
    const query = this.$router.history.current.query;
    this.dynastyId = parseInt(query.dynastyId) || -1;

    const result = await this.$get(this.$urls.getEvents, query);
    for (let i = 0; i < result.data.length; i++) {
      const item = new EventModel();
      item.setItem(result.data[i]);
      this.eventList.push(item);
    }

    this.$q.loading.hide();
  },

  beforeMount() {},

  mounted() {},

  beforeDestroy() {},

  destroyed() {},

  data() {
    return {
      dynastyId: -1,
      eventList: []
    };
  },

  computed: {
    ...mapState("common", ["dynasties"]),

    dynastyItem: function() {
      if (this.dynastyId > 0) {
        const r = this.dynasties.filter(x => x.uid === this.dynastyId);
        if (r.length > 0) {
          return r[0];
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
  },

  watch: {},

  methods: {},

  components: {
    EventEntryItem
  }
};
</script>

<style lang="stylus" scoped></style>
