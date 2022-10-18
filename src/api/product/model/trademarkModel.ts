export interface TrademarkList {
  records: TrademarkItemArray;
  total: number;
  size: number;
  current: number;
  searchCount: true;
  pages: number;
}

export interface TrademarkItem {
  id: number;
  tmName: string;
  logoUrl: string;
}

export type TrademarkItemArray = TrademarkItem[];
