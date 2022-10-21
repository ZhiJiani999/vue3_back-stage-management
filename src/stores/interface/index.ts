import type { RouteRecordRaw } from "vue-router";
import type { ItemLists } from "@/api/product/model/categoryModel";

// 用户信息包括权限数据
export interface UserInfoState {
  token: string;
  avatar: string;
  name: string;

  menuRoutes: RouteRecordRaw[]; // 用于生成导航菜单的路由列表
}

export interface AttrItemParams {
  CategorySelectorList1: ItemLists;
  CategorySelectorList2: ItemLists;
  CategorySelectorList3: ItemLists;
  CategorySelectorId1: undefined | number;
  CategorySelectorId2: undefined | number;
  CategorySelectorId3: undefined | number;
}
