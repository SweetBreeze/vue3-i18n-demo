<template>
  <el-config-provider :locale="locale">
    <router-view></router-view>
  </el-config-provider>
</template>
<script lang='ts' setup>
import zhLocale from "element-plus/lib/locale/lang/zh-cn";
import enLocale from "element-plus/lib/locale/lang/en";
import i18n from "@/locales/index"; //引入i18n组件
import moment from "moment";
import "moment/dist/locale/zh-cn";
import "moment/dist/locale/en-au";
const locale = ref(zhLocale);

if (i18n.global.fallbackLocale.value == "zh") {
  locale.value = zhLocale;
  moment.locale("zh-cn");
} else {
  locale.value = enLocale;
  moment.locale("en-au");
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
