<template>
  <div>
    <CategorySelector :disabled="!isShowList" />
    <!-- disabled为true是禁用，需求是在attrList中表单不禁用 -->
    <AttrList v-if="isShowList" @setShowList="isShowList = $event"></AttrList>
    <AttrUpdateOrAdd
      v-else
      @setShowList="isShowList = $event"
    ></AttrUpdateOrAdd>
  </div>
</template>

<script lang="ts">
export default {
  name: "ATTR",
};
</script>

<script lang="ts" setup>
import CategorySelector from "@/components/categorySele,ctor/index.vue";
import AttrList from "./components/attr-list.vue";
import AttrUpdateOrAdd from "./components/attrupdateoradd.vue";
import { ref } from "vue";

const isShowList = ref(true);
</script>

<style scoped></style>
