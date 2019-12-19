(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{207:function(n,e,t){"use strict";t.r(e);var r=t(0),a=Object(r.a)({},(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"基本用法和功能（search）"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本用法和功能（search）"}},[n._v("#")]),n._v(" 基本用法和功能（Search）")]),n._v(" "),t("h3",{attrs:{id:"基本用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本用法"}},[n._v("#")]),n._v(" 基本用法")]),n._v(" "),t("br"),n._v("\n在父组件中，引入search组件，并调用："),t("br"),t("br"),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('import SearchComponent from "../../components/Search/Search";\n\ncomponents: { SearchComponent },\ndata() {\n  return: {\n    searchControls: [\n      {\n        key: "timeSelect",\n        type: "time",\n        label: "时间选择",\n        bindValue: "",\n        placeholder: "选择时间",\n      },\n      {\n        key: "timeRangeSelect",\n        type: "timeRange",\n        label: "时间范围选择",\n        bindValue: "",\n        placeholder: "选择时间",\n      },\n      {\n        key: "code",\n        type: "input",\n        label: "合同编号",\n        bindValue: "",\n        placeholder: "请输入合同编号",\n      },\n    ],\n    tableOptions: [\n      {\n        key: \'projectName\',\n        label: \'集采项目\',\n        show: true,\n        filter: true,\n      },\n      {\n        key: \'pattern\',\n        label: \'采购模式\',\n        show: true,\n      },\n    ],\n  };\n}\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('<search-component\n  ref="search"\n  :search-controls="searchControls"\n  :table-options="tableOptions"\n>\n</search-component>\n  或者\n<search-component\n  ref="search"\n  :search-controls="searchControls"\n  table-options="tableOptions"\n/>\n')])])]),t("br"),n._v(" "),t("h3",{attrs:{id:"功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能"}},[n._v("#")]),n._v(" 功能")]),n._v(" "),t("br"),n._v("\n搜索组件针对交易平台有如下几点功能：\n"),t("br"),t("br"),n._v(" "),t("ul",[t("li",[n._v("只需要按照对应的格式书写json就能生成搜索控件\n"),t("br"),t("br")]),n._v(" "),t("li",[n._v("搜索控件参数可选（搜索的来源与Element-UI，大部分的参数也来源于此）\n"),t("br"),t("br")]),n._v(" "),t("li",[n._v("搜索按钮参数可选（默认三个按钮：搜索，个性化，说明，其他想要自定义的按钮可以通过json自定义生成）\n"),t("br"),t("br")]),n._v(" "),t("li",[n._v("步骤条组件可选（查看合同或订单流程的时候会用到）\n"),t("br"),t("br")]),n._v(" "),t("li",[n._v("可缓存（对于搜索返回结果和个性化选择的数据提供缓存参数）\n"),t("br"),t("br")]),n._v(" "),t("li",[n._v("提供插槽（针对无法预料的定制化，提供了插槽）\n"),t("br"),t("br")]),n._v(" "),t("li",[n._v("提供方法（针对数据的变更提供方法以获得最新的数据）\n"),t("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);