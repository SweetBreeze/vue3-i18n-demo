<template>
  <div class="footers">
    q1231231
    <el-dropdown trigger="click" @command="handleSetLanguage" class="languages">
      <div style="font-size: 15px">
        　　　　<span>{{ langName }}</span> 　　
      </div>
      　　<template #dropdown>
        　　　　<el-dropdown-menu>
          　　　　　　<el-dropdown-item
            :disabled="language === 'zh'"
            command="zh"
            >中文</el-dropdown-item
          >
          　　　　　　<el-dropdown-item
            :disabled="language === 'en'"
            command="en"
            >English</el-dropdown-item
          >
          　　　　</el-dropdown-menu
        >
        　　</template
      >
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";
// import {ElMessage} from '@element-plus'
const langName = ref("");
const language = ref("");

// 切换事件：
const handleSetLanguage = (lang: string) => {
  if (lang === "zh") {
    langName.value = "中文";
  } else {
    langName.value = "English";
  }
  language.value = lang;
  sessionStorage.setItem("lang", lang);
  console.log("语言切换成功");
  // ElMessage.success('语言切换成功');
  location.reload();
};

//页面加载判断语言
onMounted(() => {
  if (
    sessionStorage.getItem("lang") == undefined ||
    sessionStorage.getItem("lang") == "zh"
  ) {
    langName.value = "中文";
    language.value = "zh";
  } else {
    langName.value = "English";
    language.value = "en";
  }
});
</script>
<style lang="scss">
.footers {
  display: flex;
  align-items: center;
}
</style>
