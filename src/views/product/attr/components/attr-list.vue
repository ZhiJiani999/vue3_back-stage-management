<template>
  <el-card class="ma-20">
    <el-button type="primary" :icon="Plus" @click="isShowList"
      >添加属性</el-button
    >
    <el-table :data="AttrList" style="width: 100%" border class="ma-10">
      <el-table-column label="序号" type="index" width="60"> </el-table-column>
      <el-table-column label="属性名称" width="150" prop="attrName">
      </el-table-column>
      <el-table-column label="属性值列表" width="800">
        <template v-slot="{ row }">
          <el-tag
            v-for="attrValue in row.attrValueList"
            :key="attrValue.id"
            style="margin-right: 10px"
            >{{ attrValue.valueName }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template>
          <el-button size="small" type="warning" :icon="EditPen"></el-button>
          <el-button
            size="small"
            type="danger"
            :icon="DeleteFilled"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
export default {
  name: "AttrList",
};
</script>

<script lang="ts" setup>
import { Plus, DeleteFilled, EditPen } from "@element-plus/icons-vue";
import { useCategorySelectorStore } from "@/stores/categoryselector";
import { getAttrListApi } from "@/api/attr";
import { ref, watch } from "vue";
import type { AttrItemList } from "@/api/product/model/AttrModel";
const AttrStore = useCategorySelectorStore();

const AttrList = ref<AttrItemList>([]);

//接收自定义事件
const emit = defineEmits(["setShowList"]);
//触发自定义事件
const isShowList = () => {
  emit("setShowList", false);
};

watch(
  () => AttrStore.CategorySelectorId3,
  async () => {
    const { CategorySelectorId1, CategorySelectorId2, CategorySelectorId3 } =
      AttrStore;
    //如果id3是undexfined，那就把表格的内容设置空
    if (!CategorySelectorId3) {
      AttrList.value = [];
      return;
    }
    AttrList.value = await getAttrListApi({
      category1Id: CategorySelectorId1 as number,
      category2Id: CategorySelectorId2 as number,
      category3Id: CategorySelectorId3 as number,
    });
  }
);
</script>

<style scoped></style>
