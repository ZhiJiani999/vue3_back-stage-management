<template>
  <div>
    <el-Card>
      <el-form inline class="category-form" :disabled="disabled">
        <el-form-item label="一级菜单">
          <el-select
            placeholder="请选择"
            v-model="CategoryStore.CategorySelectorId1"
          >
            <el-option
              v-for="c1 in CategoryStore.CategorySelectorList1"
              :key="c1.id"
              :label="c1.name"
              :value="c1.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="二级菜单">
          <el-select
            placeholder="请选择"
            v-model="CategoryStore.CategorySelectorId2"
          >
            <el-option
              v-for="c2 in CategoryStore.CategorySelectorList2"
              :key="c2.id"
              :label="c2.name"
              :value="c2.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="三级菜单">
          <el-select
            placeholder="请选择"
            v-model="CategoryStore.CategorySelectorId3"
          >
            <el-option
              v-for="c3 in CategoryStore.CategorySelectorList3"
              :key="c3.id"
              :label="c3.name"
              :value="c3.id"
            />
          </el-select>
        </el-form-item>
      </el-form>
    </el-Card>
  </div>
</template>

<script lang="ts">
export default {
  name: "CategorySelector",
};
</script>

<script lang="ts" setup>
import { useCategorySelectorStore } from "@/stores/categoryselector";
import { onMounted, watch } from "vue";
const CategoryStore = useCategorySelectorStore();

defineProps<{ disabled: boolean }>();
onMounted(() => {
  CategoryStore.getCategoryList1();
});
watch(
  () => CategoryStore.CategorySelectorId1,
  (newVal) => {
    CategoryStore.getCategoryList2(newVal as number);
  }
);

watch(
  () => CategoryStore.CategorySelectorId2,
  (newVal) => {
    if (!newVal) return;
    CategoryStore.getCategoryList3(newVal as number);
  }
);
</script>

<style scoped>
.category-form :deep(.el-form-item) {
  margin-bottom: 10px;
  margin-top: 10px;
}
</style>
