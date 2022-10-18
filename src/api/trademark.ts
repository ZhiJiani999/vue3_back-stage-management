import service from "@/utils/request";
import type { TrademarkList } from "./model/trademarkModel";

enum Api {
  getTradeMarkUrl = "/admin/product/baseTrademark",
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
