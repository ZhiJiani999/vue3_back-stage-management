import service from "@/utils/request";
import type { ItemLists } from "./product/model/categoryModel";

enum Api {
  category1Url = "/admin/product/getCategory1",
  category2Url = "/admin/product/getCategory2",
  category3Url = "/admin/product/getCategory3",
}
/**
 * 一级分类
 * @param id
 * @returns
 */
export const getCategory1Api = () => {
  return service.get<any, ItemLists>(Api.category1Url);
};

/**
 * 二级分类
 * @param category1Id
 * @returns
 */

export const getCategory2Api = (category1Id: number) => {
  return service.get<any, ItemLists>(Api.category2Url + `/${category1Id}`);
};

/**
 * 三级分类
 * @param category2Id
 * @returns
 */
export const getCategory3Api = (category2Id: number) => {
  return service.get<any, ItemLists>(Api.category3Url + `/${category2Id}`);
};
