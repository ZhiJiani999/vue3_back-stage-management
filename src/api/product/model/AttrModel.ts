export interface AttrParams {
  category1Id: number;
  category2Id: number;
  category3Id: number;
}

// [
//   {
//     "id": 106,
//     "attrName": "手机系统",
//     "categoryId": 2,
//     "categoryLevel": 1,
//     "attrValueList": [
//       {
//         "id": 175,
//         "valueName": "苹果手机",
//         "attrId": 106
//       },
//     ]
//   }
// ],
//attr,三级菜单
export interface AttrItem {
  id: number;
  valueName: string;
  attrId: number;
}
export type ItemList = AttrItem[];

export interface AttrItemValue {
  id: 106;
  attrName: string;
  categoryId: number;
  categoryLevel: number;
  attrValueList: ItemList;
}
export type AttrItemList = AttrItemValue[];

//属性列表
// {
//   "attrName": "string",
//   "attrValueList": [
//     {
//       "attrId": 0,
//       "id": 0,
//       "valueName": "string"
//     }
//   ],

//   "id": 0
// }

export interface saveAttrItem {
  attrId: number;
  id: number;
  valueName: string;
}
export type saveItem = saveAttrItem[];

export interface saveItemList {
  id: number;
  attrName: string;
  attrValueList: saveItem;
}
