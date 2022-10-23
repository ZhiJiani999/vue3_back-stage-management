<template>
  <el-card class="ma-20">
    <el-form @submit.prevent>
      <el-form-item label="属性名">
        <el-input placeholder="请输入属性名" v-model="formDataList.attrName" />
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          :icon="Plus"
          :disabled="!formDataList.attrName"
          @click="addAttrValue"
          >添加属性值</el-button
        >
        <el-table :data="formDataList.attrValueList">
          <el-table-column label="序号" type="index"> </el-table-column>
          <el-table-column label="属性值名称">
            <template v-slot="{ row, $index }">
              <el-input
                v-if="row.isEdit"
                v-model="row.valueName"
                ref="inputRef"
                @blur="isShowDiv(row, $index)"
                @keyup.enter="keyShow(row)"
              />
              <div v-else @click="isShowInput(row)">{{ row.valueName }}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template v-slot="{ $index }">
              <el-button
                type="danger"
                :icon="Delete"
                size="small"
                @click="deleteattrVal($index)"
              />
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      <el-form-item class="ma-10">
        <el-button
          type="primary"
          :disabled="
            !formDataList.attrName ||
            !formDataList.attrValueList.some((attrVal) => attrVal.valueName)
          "
          @click="saveAata"
          >保存</el-button
        >
        <el-button @click="isShowList">取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script lang="ts">
export default {
  name: "AttrUpdateOrAdd",
};
</script>

<script lang="ts" setup>
import { Delete, Plus } from "@element-plus/icons-vue";
import { ref, nextTick, reactive } from "vue";
import { getAttrInfoApi } from "@/api/attr";
import { useCategorySelectorStore } from "@/stores/categoryselector";
import type {
  saveAttrItem,
  SaveAttrValueList,
} from "@/api/product/model/AttrModel";
import { ElMessage } from "element-plus";

const SelectorStore = useCategorySelectorStore();
const emit = defineEmits(["setShowList"]);
const isShowList = () => {
  emit("setShowList", true);
};
const inputRef = ref();
// 收集的表单数据
const formDataList = reactive<SaveAttrValueList>({
  attrName: "",
  attrValueList: [],
});
//点击添加
const addAttrValue = () => {
  formDataList.attrValueList.push({
    valueName: "",
    isEdit: true,
  });
  nextTick(() => {
    inputRef.value.focus();
  });
};
//失去光标，展示div
const isShowDiv = (row: saveAttrItem, index: number) => {
  row.isEdit = false;
  if (!row.valueName) {
    formDataList.attrValueList.splice(index, 1);
  }
};
//key-enter 展示div
const keyShow = (row: saveAttrItem) => {
  if (row.valueName) {
    row.isEdit = false;
  }
};
//点击文本，显示Input
const isShowInput = (row: saveAttrItem) => {
  row.isEdit = true;
  nextTick(() => {
    inputRef.value.focus();
  });
};

//点击删除按钮
const deleteattrVal = (index: number) => {
  formDataList.attrValueList.splice(index, 1);
};
//点击保存发送请求
//添加和修改用同一个接口
const saveAata = async () => {
  await getAttrInfoApi({
    ...formDataList,
    categoryId: SelectorStore.CategorySelectorId3 as number,
    categoryLevel: 3,
  });
  //返回上个组件
  isShowList();
  // 提示用户添加成功
  ElMessage.success("添加属性成功");
};
</script>

<style scoped></style>
