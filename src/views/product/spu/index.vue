<template>
  <div>
    <CategorySelector :disabled="false"></CategorySelector>
    <SpuList></SpuList>
    <SkuAddOrUpdate></SkuAddOrUpdate>
  </div>
</template>

<script lang="ts">
export default {
  name: "SPU",
};
</script>

<script lang="ts" setup>
import CategorySelector from "@/components/categorySelector/index.vue";
import SpuList from "./component/spu-list.vue";
import SkuAddOrUpdate from "./component/skuaddorupdate.vue";
</script>

<style scoped></style>
