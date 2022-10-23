import service from "@/utils/request";
import type {
  AttrParams,
  AttrItemList,
  SaveAttrValueItem,
} from "./product/model/AttrModel";
enum Api {
  attrInfoListUrl = "/admin/product/attrInfoList",
  saveAttrInfoUrl = "/admin/product/saveAttrInfo",
}
/**
 * 三级分类
 * @param param0
 * @returns
 */
export const getAttrListApi = ({
  category1Id,
  category2Id,
  category3Id,
}: AttrParams) => {
  return service.get<any, AttrItemList>(
    Api.attrInfoListUrl + `/${category1Id}/${category2Id}/${category3Id}`
  );
};

/**
 * 获取属性列表
 * @param data
 * @returns
 */
export const getAttrInfoApi = (data: SaveAttrValueItem) => {
  return service.post<any, null>(Api.saveAttrInfoUrl, data);
};
