<template>
  <el-button @click="isShowList">取消</el-button>
  <el-card class="ma-20">
    <el-form class="form-AttrData">
      <el-form-item label="属性名">
        <el-input placeholder="请输入属性名" v-model="formDataList.attrName" />
      </el-form-item>
      <el-from-item>
        <el-button type="primary">添加属性值</el-button>
        <el-button>取消</el-button>
      </el-from-item>
      <el-table :data="formDataList.attrValueList" style="width: 100%">
        <el-table-column label="序号" width="60" type="index">
        </el-table-column>
        <el-table-column label="属性值名称" width="500">
          <template v-slot="{ row }">
            <el-input v-model="row.valueName" />
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button size="small" type="danger" :icon="Delete"></el-button>
          </template>
        </el-table-column>
        <el-button type="primary">保存</el-button>
        <el-button>取消</el-button>
      </el-table>
    </el-form>
  </el-card>
</template>

<script lang="ts">
export default {
  name: "AttrUpdateOrAdd",
};
</script>

<script lang="ts" setup>
import { Delete } from "@element-plus/icons-vue";
import { ref } from "vue";
const emit = defineEmits(["setShowList"]);
const isShowList = () => {
  emit("setShowList", true);
};

const formDataList = ref({
  attrName: "",
  attrValueList: [{}],
});
</script>

<style scoped lang="sass">
.form-AttrData{
  .el-form-item{
    .el-input{
      width:fit-content
    }
  }
}
</style>
