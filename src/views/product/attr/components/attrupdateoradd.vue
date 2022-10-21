<template>
  <el-card class="ma-20">
    <el-form>
      <el-form-item label="属性名">
        <el-input placeholder="请输入属性名" v-model="formDataList.attrName" />
      </el-form-item>
      <el-from-item>
        <el-button
          type="primary"
          :icon="Plus"
          :disabled="!formDataList.attrName"
          @click="addAttrValue"
          >添加属性值</el-button
        >
        <el-table :data="formDataList.attrValueList" style="width: 100%">
          <el-table-column label="序号" width="60" type="index">
          </el-table-column>
          <el-table-column label="属性值名称" width="800">
            <template v-slot="{ row }">
              <el-input v-model="row.valueName" ref="inputRef" />
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <!-- <template #reference> -->
            <!-- <el-button size="small" type="danger" :icon="Delete"></el-button> -->
            <el-button type="danger" :icon="Delete" size="small" />
            <!-- </template> -->
          </el-table-column>
        </el-table>
      </el-from-item>
      <el-form-item class="ma-10">
        <el-button type="primary">保存</el-button>
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

const emit = defineEmits(["setShowList"]);
const isShowList = () => {
  emit("setShowList", true);
};
const inputRef = ref();
const formDataList = reactive({
  attrName: "",
  attrValueList: [],
});

const addAttrValue = () => {
  formDataList.attrValueList.push({});
  nextTick(() => {
    inputRef.value.focus();
  });
};
</script>

<style scoped></style>
