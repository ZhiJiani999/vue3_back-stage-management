import service from "@/utils/request";

import type { TrademarkList, TrademarkItem } from "./model/trademarkModel";

enum Api {
  getTradeMarkUrl = "/admin/product/baseTrademark",
  saveTradeMarkUrl = "/admin/product/baseTrademark/save",
  removeTradeMarkUrl = "/admin/product/baseTrademark/remove",
  updateTradeMarkUrl = "/admin/product/baseTrademark/update",
}
//请求品牌
/**
 *
 * @param page
 * @param limit
 * @returns
 */
export const getTradeMarkApi = (page: number, limit: number) => {
  return service.get<any, TrademarkList>(
    `${Api.getTradeMarkUrl}/${page}/${limit}`
  );
};
/**
 *添加品牌
 * @param logoUrl
 * @param tmName
 * @returns
 */
export const saveTradeMarkApi = (tmName: string, logoUrl: string) => {
  return service.post<any, null>(Api.saveTradeMarkUrl, {
    logoUrl,
    tmName,
  });
};

/***
 * 删除图片
 */
export const removeTradeMarkApi = (id: number) => {
  return service.delete<any, null>(Api.removeTradeMarkUrl + `/${id}`);
};

export const updateTradeMarkApi = (updateParams: TrademarkItem) => {
  return service.put<any, null>(Api.updateTradeMarkUrl, updateParams);
};
