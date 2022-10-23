<template>
  <el-card class="ma-20">
    <el-button type="primary" :icon="Plus">添加属性</el-button>
    <el-table :data="[{}]" width="100%" class="ma-20">
      <el-table-column type="index" label="序号" width="60" align="center" />
      <el-table-column label="SPU名称" />
      <el-table-column label="SPU描述" />
      <el-table-column label="操作">
        <el-tooltip effect="light" content="添加SKU" placement="bottom">
          <el-button type="primary" :icon="Plus" size="small" />
        </el-tooltip>
        <el-tooltip effect="light" content="修改SPU" placement="bottom">
          <el-button type="warning" :icon="Edit" size="small" />
        </el-tooltip>
        <el-tooltip effect="light" content="查看SKU列表" placement="bottom">
          <el-button type="info" :icon="InfoFilled" size="small" />
        </el-tooltip>
        <el-tooltip effect="light" content="删除SPU" placement="bottom">
          <el-button type="danger" :icon="Delete" size="small" />
        </el-tooltip>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script lang="ts">
export default {
  name: "SpuList",
};
</script>

<script lang="ts" setup>
import { Plus, Edit, InfoFilled, Delete } from "@element-plus/icons-vue";
</script>

<style scoped></style>
