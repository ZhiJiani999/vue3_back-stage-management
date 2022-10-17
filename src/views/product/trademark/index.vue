<template>
  <el-card>
    <el-button type="primary" :icon="Plus">添加品牌</el-button>
    <el-table :data="tableData" border class="tableline">
      <el-table-column type="index" label="序号" width="60" align="center" />
      <el-table-column prop="date" label="Date" />
      <el-table-column prop="name" label="Name" />
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button
            size="small"
            @click="handleEdit(scope.$index, scope.row)"
            :icon="EditPen"
          ></el-button>
          <el-button
            size="small"
            type="danger"
            :icon="DeleteFilled"
            @click="handleDelete(scope.$index, scope.row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
      <el-pagination
        class="paginationBorder"
        v-model:currentPage="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[3, 6, 9, 12]"
        :small="small"
        :disabled="disabled"
        :background="background"
        layout="prev, pager, next, jumper,total, sizes"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </el-card>
</template>

<script lang="ts">
export default {
  name: "TradeMark",
};
</script>

<script lang="ts" setup>
import { Plus, EditPen, DeleteFilled } from "@element-plus/icons-vue";
import { ref } from "vue";
//总页数
const total = ref(500);
//每条页数
const pageSize = ref(5);
//当前页
const currentPage = ref(1);

// 当page-size发送变化时触发的事件
const handleSizeChange = () => {};
// 当currentPage发送变化时触发的事件
const handleCurrentChange = () => {};
const tableData = [
  {
    date: "2016-05-03",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-02",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-04",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
  {
    date: "2016-05-01",
    name: "Tom",
    address: "No. 189, Grove St, Los Angeles",
  },
];
</script>

<style scoped lang="scss">
.paginationBorder:deep() {
  .el-pagination__sizes {
    position: absolute;
    right: 120px;
  }
  .el-pagination__total {
    position: absolute;
    right: 30px;
  }
}
.tableline {
  margin: 20px 0;
}
</style>
