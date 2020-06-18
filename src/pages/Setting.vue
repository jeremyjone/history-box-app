<template>
  <div>
    <q-page>
      <q-list>
        <!-- 这里是设置项 -->
        <q-item clickable v-ripple @click="$q.dark.toggle()">
          <q-item-section avatar>
            <q-icon :name="`brightness_${darkMode ? 2 : 7}`" />
          </q-item-section>
          <q-item-section>
            <q-item-label>暗夜模式</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-toggle v-model="darkMode" />
          </q-item-section>
        </q-item>
      </q-list>

      <q-separator class="q-mb-md" />

      <q-page-sticky position="bottom" :offset="[0, 18]">
        <q-list clickable @click="showBottomSheet(true)">
          <q-item>
            <q-item-section>
              <q-item-label class="text-center text-grey-7">
                {{ $appAttr.title }}，由
                <q-btn
                  flat
                  dense
                  no-caps
                  color="primary"
                  label="jeremyjone@qq.com"
                  :ripple="false"
                />
                制作。
              </q-item-label>
              <q-item-label class="text-center text-grey-7">
                当前版本：{{ $appAttr.titleEn }}@{{ $appAttr.version }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-page-sticky>
    </q-page>
  </div>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: "SettingPage",

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
    darkMode: {
      get: function() {
        return this.$q.dark.isActive;
      },
      set: function() {
        this.$q.dark.toggle();
      }
    }
  },

  watch: {},

  methods: {
    showBottomSheet: function(grid) {
      this.$q
        .bottomSheet({
          message: "联系作者",
          grid,
          actions: [
            {
              label: "该软件是开源的",
              icon: "code",
              id: "code",
              link: "https://github.com/jeremyjone/history-box-app"
            },
            {
              label: "联系作者",
              icon: "mail",
              color: "primary",
              id: "mail",
              link: "mailto:jeremyjone@qq.com"
            },
            {},
            {
              label: "作者首页",
              icon: "public",
              color: "secondary",
              id: "public",
              link: "https://www.jeremyjone.com"
            },
          ]
        })
        .onOk(action => {
          // console.log('Action chosen:', action.id)
          openURL(action.link);
        })
        .onCancel(() => {
          // console.log('Dismissed')
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    }
  },

  components: {}
};
</script>

<style lang="stylus" scoped></style>
