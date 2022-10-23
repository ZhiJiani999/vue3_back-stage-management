import { saveItem, saveAttrItem } from "./AttrModel";
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
  id: number;
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
  isEdit: boolean;
  id: number;
  valueName: string;
}
export type saveItem = saveAttrItem[];

export interface saveItemList {
  id: number;
  attrName: string;
  attrValueList: saveItem;
}

//添加属性类型
// {
//   "attrName": "string",
//   "attrValueList": [
//     {

//       "valueName": "string"
//     }
//   ],
//   "categoryId": 0,
//   "categoryLevel": 0,
// }
// //修改属性类型
// {
//   "attrName": "string",
//   "attrValueList": [
//     {
//       "Id": 0,
//       "valueName": "string"
//     }
//   ],
//   "categoryId": 0,
//   "categoryLevel": 0,
//   "id": 0
// }
// //组件中使用的
// {
//   "attrName": "string",
//   "attrValueList": [
//     {
//       isEdit：boolean
//       "valueName": "string"
//     }
//   ],
// }

// 属性值列表
export interface AttrSaveItem {
  id?: 0;
  isEdit: boolean;
  valueName: string;
}
export type AttrSaveItemList = AttrSaveItem[];

//组件中
export interface SaveAttrValueList {
  attrName: string;
  attrValueList: AttrSaveItemList;
}
//添加/修改属性类型
export interface SaveAttrValueItem extends SaveAttrValueList {
  id?: number;
  categoryId: number;
  categoryLevel: number;
}
