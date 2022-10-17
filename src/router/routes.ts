import type { RouteRecordRaw } from "vue-router";
/**
 * 路由meta对象参数说明
 * meta: {
 *      title:          菜单栏及 tagsView 栏、菜单搜索名称（国际化）
 *      hidden：        是否隐藏此路由
 *      icon：          菜单、tagsView 图标，阿里：加 `iconfont xxx`，fontawesome：加 `fa xxx`
 * }
 */

/**
 * 静态路由（默认路由）
 */
export const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true,
    },
  },

  {
    path: "/404",
    name: "404",
    component: () => import("@/views/error/404.vue"),
    meta: {
      hidden: true,
    },
  },

  {
    path: "/",
    component: () => import("@/layout/index.vue"),
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/index.vue"),
        // 1. 决定左侧菜单显示什么内容 2. 决定网站的title
        meta: {
          title: "首页",
          icon: "ele-HomeFilled",
        },
      },
     
    ],
  },
  {
    path: "/product",
    component: () => import("@/layout/index.vue"),
    redirect: "/product/category/list",
    meta: {
      title: "商品管理",
      icon: "ele-ShoppingBag",
    },
    children: [
      {
        path: "category/list",
        name: "CateGory",
        component: () => import("@/views/product/category/index.vue"),
        meta: {
          title: "分类管理",
          icon: "ele-ShoppingBag",
        },
      },
      {
        path: "trademark/list",
        name: "Trademark",
        component: () => import("@/views/product/trademark/index.vue"),
        meta: {
          title: "品牌管理",
          icon: "ele-ShoppingBag",
        },
      },
      {
        path: "attr/list",
        name: "ATTR",
        component: () => import("@/views/product/attr/index.vue"),
        meta: {
          title: "平台属性管理",
          icon: "ele-ShoppingBag",
        },
      },
      {
        path: "spu/list",
        name: "SPU",
        component: () => import("@/views/product/spu/index.vue"),
        meta: {
          title: "SPU",
          icon: "ele-ShoppingBag",
        },
      },
      {
        path: "sku/list",
        name: "SKU",
        component: () => import("@/views/product/sku/index.vue"),
        meta: {
          title: "SKU",
          icon: "ele-ShoppingBag",
        },
      },
    ],
  },

  /* 匹配任意的路由 必须最后注册 */
  {
    path: "/:pathMatch(.*)",
    name: "Any",
    redirect: "/404",
    meta: {
      hidden: true,
    },
  },
];

/**
 * 定义动态路由
 */
export const allAsyncRoutes: Array<RouteRecordRaw> = [];
