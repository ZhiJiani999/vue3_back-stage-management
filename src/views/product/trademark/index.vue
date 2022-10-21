<template>
  <el-card>
    <el-button
      type="primary"
      :icon="Plus"
      @click="showDialogFormVisible({ id: 0, tmName: '', logoUrl: '' })"
      >添加品牌</el-button
    >

    <el-dialog
      v-model="dialogFormVisible"
      :title="`${trademarkFormData.id}` ? '修改品牌' : '添加品牌'"
    >
      <el-form
        label-width="100px"
        ref="ruleFormRef"
        :model="trademarkFormData"
        :rules="rules"
      >
        <el-form-item label="添加品牌" prop="tmName">
          <el-input
            v-model="trademarkFormData.tmName"
            placeholder="请输入品牌名称"
          />
        </el-form-item>
        <el-form-item label="品牌LOGO" prop="logoUrl">
          <el-upload
            class="avatar-uploader"
            :action="`${BASE_URL}/admin/product/fileUpload`"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img
              v-if="trademarkFormData.logoUrl"
              :src="trademarkFormData.logoUrl"
              class="avatar"
            />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            <template #tip>
              <div class="el-upload__tip">
                只能上传jpg/png文件，且不超过50kb
              </div>
            </template>
          </el-upload>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="notarizeForm">确认</el-button>
        </span>
      </template>
    </el-dialog>

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
      <el-table-column label="操作">
        <template v-slot="{ row }">
          <el-button
            size="small"
            type="warning"
            :icon="EditPen"
            @click="showDialogFormVisible(row)"
          ></el-button>
          <el-button
            size="small"
            type="danger"
            :icon="DeleteFilled"
            @click="deleteFormData(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页器 -->
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
import { onMounted, ref, reactive } from "vue";
import {
  getTradeMarkApi,
  saveTradeMarkApi,
  removeTradeMarkApi,
  updateTradeMarkApi,
} from "@/api/trademark";
import { ElMessage, ElMessageBox } from "element-plus";
import type { UploadProps, FormInstance, FormRules } from "element-plus";
import type { TrademarkItem } from "@/api/product/model/trademarkModel";

// 请求前缀
const BASE_URL = import.meta.env.VITE_API_URL;

/***校验规则****/
// 表单数据
const trademarkFormData = reactive({
  tmName: "",
  // 品牌logo
  logoUrl: "",
  id: 0,
});
// 表单实列
const ruleFormRef = ref<FormInstance>();
// 验证规则
const rules = reactive<FormRules>({
  tmName: [{ required: true, message: "请输入上传名称", trigger: "blur" }],
  logoUrl: [{ required: true, message: "请上传品牌LOGO" }],
});

//点击发送添加或者修改的请求
const notarizeForm = async () => {
  //校验表单
  await ruleFormRef.value?.validate();
  const { tmName, logoUrl, id } = trademarkFormData;
  if (!id) {
    await saveTradeMarkApi(tmName, logoUrl);
  } else {
    await updateTradeMarkApi({ id, tmName, logoUrl });
  }

  dialogFormVisible.value = false;
  ElMessage.success(`${id ? "修改品牌" : "添加品牌"}`);
  //更新数据
  getTrademarkList();
};

//点击修改和添加
const showDialogFormVisible = (row: TrademarkItem) => {
  dialogFormVisible.value = true;
  trademarkFormData.tmName = row.tmName;
  trademarkFormData.logoUrl = row.logoUrl;
  trademarkFormData.id = row.id;
  ruleFormRef.value?.clearValidate();
};

/***添加品牌***/
// const imageUrl = ref("");
//上传成功
const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
  trademarkFormData.logoUrl = response.data;
  ruleFormRef.value?.clearValidate(["logoUrl"]);
};

// rawFile 上传的文件对象
// rawFile.type 文件类型
// rawFile.size 文件大小
//上传之前
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
  const rawFileType = ["image/jpeg", "image/jpg", "image/png"];
  if (!rawFileType.includes(rawFile.type)) {
    ElMessage.error("图片只能上传jpeg,jpg和png类型的");
    return false;
  } else if (rawFile.size / 1024 > 250) {
    ElMessage.error("图片大小必须小于250kb!");
    return false;
  }
  return true;
};
//总页数
const total = ref(500);
//每条页数
const pageSize = ref(5);
//当前页
const currentPage = ref(1);

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

/***加载框****/
const dialogFormVisible = ref(false);

/****删除品牌*****/
const deleteFormData = (row: TrademarkItem) => {
  ElMessageBox.confirm(`确认删除+${row.tmName}+吗`, "Warning", {
    confirmButtonText: "确认",
    cancelButtonText: "取消",
    type: "warning",
  }).then(async () => {
    const { id } = row;
    await removeTradeMarkApi(id);
    ElMessage.success("删除品牌成功");
    getTrademarkList();
  });
};
</script>

<style scoped lang="scss">
.tableline {
  margin: 20px 0;
}
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
.trademark-img {
  width: 200px;
  height: 100px;
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
