<template>
  <div>{{ t('用户名') }}</div>
  <div>{{ nowTime }}</div>
  <el-input v-model="queryForm.id"></el-input>
  <!-- <div class="block">
    <span class="demonstration">Default</span>
    <el-date-picker
      v-model="value1"
      type="datetimerange"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
  </div> -->
  <!-- <div class="block">
    <span class="demonstration">With shortcuts</span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :shortcuts="shortcuts"
      range-separator="To"
      start-placeholder="Start date"
      end-placeholder="End date"
    />
  </div> -->
  <el-pagination
    v-model:currentPage="currentPage4"
    v-model:page-size="pageSize4"
    :page-sizes="[100, 200, 300, 400]"
    :small="small"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
  />
  <el-switch v-model="value10" />
</template>

<script setup lang='ts'>
import * as Utils from "@/utils";
import moment from "moment";
const value10 = ref(true);
// moment.locale();
const nowTime = moment().format("MMMM Do YYYY, h:mm:ss a");
const queryForm: any = ref({});
const currentPage4 = ref(4);
const pageSize4 = ref(100);
//语言包方法
function t(key: string): string {
  return Utils.i18nt("user", key);
}
const value1 = ref([
  new Date(2000, 10, 10, 10, 10),
  new Date(2000, 10, 11, 10, 10),
]);
const value2 = ref("");

const shortcuts = [
  {
    text: "Last week",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
      return [start, end];
    },
  },
  {
    text: "Last month",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
      return [start, end];
    },
  },
  {
    text: "Last 3 months",
    value: () => {
      const end = new Date();
      const start = new Date();
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
      return [start, end];
    },
  },
];
</script>
<script lang='ts'>
export default {
  name: "Profile",
};
</script>