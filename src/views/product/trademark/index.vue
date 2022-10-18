<template>
  <el-card>
    <el-button type="primary" :icon="Plus">添加品牌</el-button>
    <el-table
      :data="trademarkList"
      border
      class="tableline"
      v-loading="loading"
      row-key="id"
    >
      <el-table-column type="index" label="序号" width="60" align="center" />
      <el-table-column prop="tmName" label="品牌名称" />
      <el-table-column label="品牌LOGO">
        <template v-slot="{ row }">
          <el-image :src="row.logoUrl" fit="cover" class="trademark-img" />
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template #default="scope">
          <el-button size="small" type="warning" :icon="EditPen"></el-button>
          <el-button
            size="small"
            type="danger"
            :icon="DeleteFilled"
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
        layout="prev, pager, next, jumper,total, sizes"
        :total="total"
        @size-change="getTrademarkList"
        @current-change="getTrademarkList"
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
import { onMounted, ref } from "vue";
import { getTradeMarkApi } from "@/api/trademark";
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

/****请求品牌数据***/
const trademarkList = ref([]);
const loading = ref(false);

const getTrademarkList = async () => {
  loading.value = true;
  const result = await getTradeMarkApi(currentPage.value, pageSize.value);
  //console.log(result);
  total.value = result.total;
  trademarkList.value = result.records;
  loading.value = false;
};

onMounted(() => {
  getTrademarkList();
});
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
.trademark-img {
  width: 200px;
  height: 100px;
}
</style>
