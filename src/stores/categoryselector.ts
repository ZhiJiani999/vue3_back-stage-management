import { defineStore } from "pinia";
import type { AttrItemParams } from "./interface";

import {
  getCategory1Api,
  getCategory2Api,
  getCategory3Api,
} from "@/api/category";

export const useCategorySelectorStore = defineStore("CategorySelector", {
  state: (): AttrItemParams => {
    return {
      CategorySelectorList1: [],
      CategorySelectorList2: [],
      CategorySelectorList3: [],
      CategorySelectorId1: undefined,
      CategorySelectorId2: undefined,
      CategorySelectorId3: undefined,
    };
  },
  actions: {
    async getCategoryList1() {
      this.CategorySelectorList1 = await getCategory1Api();
    },
    async getCategoryList2(category1Id: number) {
      this.CategorySelectorList2 = await getCategory2Api(category1Id);
      this.CategorySelectorId2 = undefined;
      this.CategorySelectorId3 = undefined;
      this.CategorySelectorList3 =[]
    },
    async getCategoryList3(category2Id: number) {
      this.CategorySelectorList3 = await getCategory3Api(category2Id);
      this.CategorySelectorId3 = undefined;
    },
  },
  getters: {},
});
