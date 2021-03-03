<script>
export default {
  data() {
    return {
      num: -1,
      isShowCategoryMenu: false,
      categoryList: [
        {
          id: 1,
          name: "熱門焦點",
          url: "/",
          content: {
            id: 1,
            data: [],
          },
        },
        {
          id: 2,
          name: "隱形眼鏡",
          url: "/ContactLens",
          content: {
            id: 2,
            data: [
              {
                cate: "品牌",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "威氏康【獨家】",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "博士倫",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "美若康",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "嬌生",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "海昌",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "酷柏",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 7,
                    type: "text",
                    name: "加美",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 8,
                    type: "text",
                    name: "帝康",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 9,
                    type: "text",
                    name: "美麗康",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 10,
                    type: "text",
                    name: "愛能視",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 11,
                    type: "text",
                    name: "Menicon",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },

              {
                cate: "種類",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "透明片",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "彩色片",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "配戴週期",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "日拋",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "週拋",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "月拋",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "季拋",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "彩片顏色",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "黑色",
                    class: "",
                    url: "test",
                    img: "",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "棕色",
                    class: "",
                    url: "tset",
                    img: "",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "金色",
                    class: "",
                    url: "tset",
                    img: "",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "灰色",
                    class: "",
                    url: "tset",
                    img: "",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "綠色",
                    class: "",
                    url: "tset",
                    img: "",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "藍色",
                    class: "",
                    url: "tset",
                    img: "",
                  },
                  {
                    id: 7,
                    type: "text",
                    name: "紫色",
                    class: "",
                    url: "tset",
                    img: "",
                  },
                  {
                    id: 8,
                    type: "text",
                    name: "粉紅色",
                    class: "",
                    url: "tset",
                    img: "",
                  },
                  {
                    id: 9,
                    type: "text",
                    name: "其他",
                    class: "",
                    url: "tset",
                    img: "",
                  },
                ],
              },
              {
                cate: "直徑",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "14.0mm(含)以下",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "14.0mm-14.4mm(含)",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "14.0mm(含)以上",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "含水量",
                type: "both",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "40%(含)以下",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "41%-54%(含)",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "55%(含)以上",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "img",
                    name: "55%(含)以上",
                    img: {
                      class: "",
                      src: "CL_img01",
                      width: "",
                      height: "",
                    },
                    class: "mt-2",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "img",
                    name: "55%(含)以上",
                    img: {
                      class: "",
                      src: "CL_img02",
                      width: "",
                      height: "",
                    },
                    class: "mt-2",
                    url: "tset",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 3,
          name: "光學眼鏡",
          url: "/OpticalGlasses",
          content: {
            id: 3,
            data: [
              {
                cate: "框型",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "both",
                    name: "半框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img01",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "both",
                    name: "方框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img02",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "both",
                    name: "眉框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img03",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "both",
                    name: "圓框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img04",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "both",
                    name: "橢圓框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img05",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "both",
                    name: "貓眼框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img06",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 7,
                    type: "both",
                    name: "威靈頓框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img07",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 8,
                    type: "both",
                    name: "波士頓框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img08",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 9,
                    type: "both",
                    name: "其他框",
                    img: {
                      class: "",
                      src: "EyeGlasses_img09",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "款式",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "男性",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "女性",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "兒童",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "中性",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "功能",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "濾藍光",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "濾藍光+UV400",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "偏光",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "戶外運動",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "前掛式",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "其它",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "材質",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "塑膠",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "TR系列",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "板料",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "合金",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "不鏽鋼",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "鈦金屬",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 7,
                    type: "text",
                    name: "記憶金屬",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 8,
                    type: "text",
                    name: "複合框",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 9,
                    type: "text",
                    name: "其他材質",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "品牌",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "5STREET",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "AGNES_B.",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "ALBERTO_CICCIOL",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "ANNA_SUI",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "BOLON",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "BONIA",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 7,
                    type: "text",
                    name: "CK",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 8,
                    type: "text",
                    name: "ELLE",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 9,
                    type: "text",
                    name: "GLUCK",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "品牌",
                type: "",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "HACHILL",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "JEEP",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "MONTBLANC",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "MOSCHINO",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "PORTER",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "RAY BAN",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 7,
                    type: "text",
                    name: "Syun KIWAMI",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 8,
                    type: "text",
                    name: "VIOKI",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 9,
                    type: "text",
                    name: "ZEISS蔡司",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 4,
          name: "太陽眼鏡",
          url: "/SunGlasses",
          content: {
            id: 4,
            data: [
              {
                cate: "框形",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "both",
                    name: "半框",
                    img: {
                      class: "",
                      src: "SunGlasses_img01",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "both",
                    name: "方框",
                    img: {
                      class: "",
                      src: "SunGlasses_img02",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "both",
                    name: "眉框",
                    img: {
                      class: "",
                      src: "SunGlasses_img03",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "both",
                    name: "圓框",
                    img: {
                      class: "",
                      src: "SunGlasses_img04",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "both",
                    name: "橢圓框",
                    img: {
                      class: "",
                      src: "SunGlasses_img05",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "both",
                    name: "貓眼框",
                    img: {
                      class: "",
                      src: "SunGlasses_img06",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 7,
                    type: "both",
                    name: "威靈頓框",
                    img: {
                      class: "",
                      src: "SunGlasses_img07",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 8,
                    type: "both",
                    name: "波士頓框",
                    img: {
                      class: "",
                      src: "SunGlasses_img08",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                  {
                    id: 9,
                    type: "both",
                    name: "其他框",
                    img: {
                      class: "",
                      src: "SunGlasses_img09",
                      width: "",
                      height: "",
                    },
                    class: "w-50",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "款式",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "男性",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "女性",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "兒童",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "中性",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "功能",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "濾藍光",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "濾藍光+UV400",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "偏光",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "戶外運動",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "掀蓋式",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "其它",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "材質",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "塑膠",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "TR系列",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "板料",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "合金",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "不鏽鋼",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "鈦金屬",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 7,
                    type: "text",
                    name: "記憶金屬",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 8,
                    type: "text",
                    name: "複合框",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 9,
                    type: "text",
                    name: "其他材質",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "品牌",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "5STREET",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "AGNES_B.",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "ANNA_SUI",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "BONIA",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "CK",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 6,
                    type: "text",
                    name: "ELLE",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 7,
                    type: "text",
                    name: "ESPRIT",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 8,
                    type: "text",
                    name: "HACHILL",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "品牌",
                type: "",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "HIPONI",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "JEEP",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "PAUL MARK",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "PORTER",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 5,
                    type: "text",
                    name: "RAY BAN",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 5,
          name: "大學葉黃素",
          url: "/Gold",
          content: {
            id: 5,
            data: [
              {
                cate: "品牌",
                type: "noTitle",
                list: [
                  {
                    id: 1,
                    type: "img",
                    name: "博士倫",
                    img: {
                      class: "",
                      src: "Gold_img01",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                ],
              },
              {
                cate: "品牌",
                type: "noTitle",
                list: [
                  {
                    id: 1,
                    type: "img",
                    name: "博士倫",
                    img: {
                      class: "",
                      src: "Gold_img02",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                ],
              },
              {
                cate: "品牌",
                type: "noTitle",
                list: [
                  {
                    id: 1,
                    type: "img",
                    name: "博士倫",
                    img: {
                      class: "",
                      src: "Gold_img03",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 1,
                    type: "img",
                    name: "博士倫",
                    img: {
                      class: "",
                      src: "Gold_img04",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 6,
          name: "配件 / 藥水",
          url: "/Others",
          content: {
            id: 6,
            data: [
              {
                cate: "超聲波清洗機",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "ASHMORE",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "EIWEI",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "GT Sonic",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "眼鏡周邊",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "眼鏡周邊",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "專業功能型放大鏡",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "色覺辨識輔助濾鏡",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "眼鏡盒/袋",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "眼鏡清潔保養",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "清潔凝膠",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "清潔噴霧",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "拭鏡布/紙",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "護眼燈",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "護眼燈",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "愛德華醫生潤眼燈",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "隱形眼鏡藥水",
                type: "text",
                list: [
                  {
                    id: 1,
                    type: "text",
                    name: "愛爾康",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "text",
                    name: "博士倫",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 3,
                    type: "text",
                    name: "安娜蘇",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                  {
                    id: 4,
                    type: "text",
                    name: "Menicon",
                    img: {
                      class: "",
                      src: "",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
              {
                cate: "配戴週期",
                type: "img",
                list: [
                  {
                    id: 1,
                    type: "img",
                    name: "博士倫",
                    img: {
                      class: "",
                      src: "CL_img01",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "test",
                  },
                  {
                    id: 2,
                    type: "img",
                    name: "博士倫",
                    img: {
                      class: "",
                      src: "CL_img01",
                      width: "",
                      height: "",
                    },
                    class: "",
                    url: "tset",
                  },
                ],
              },
            ],
          },
        },
        {
          id: 7,
          name: "流行時尚",
          url: "#",
          content: {
            id: 7,
            data: [],
          },
        },
      ],
    };
  },
  methods: {
    mouseOver() {},
  },
};
</script>

<template>
  <div class="category">
    <div class="container-fluid position-relative z-index-99 background-white">
      <b-row class="text-center categories container m-auto">
        <b-col
          v-for="item in categoryList"
          :key="item.id"
          :class="['categoryList', { active: item.id == num }]"
          @mouseover="num = item.id"
          @mouseleave="num = -1"
        >
          <div class="menuBox">
            <nuxt-link :to="item.url" class="menuTitle">{{
              item.name
            }}</nuxt-link>
            <!-- 熱門焦點(1) 跟 流行時尚(7) 不能HOVER  -->
            <div
              class="position-fixed categoryMenu"
              v-if="item.content.id == num && item.content.id != 1 && item.content.id != 7"
            >
              <div class="container text-left">
                <b-row>
                  <b-col
                    v-for="(items, indexs) in item.content.data"
                    :key="indexs"
                  >
                    <div
                      class="title"
                      v-if="items.type == 'text' || items.type == 'both'"
                    >
                      {{ items.cate }}
                    </div>
                    <div
                      class="title"
                      style="opacity: 0"
                      v-else-if="items.type == ''"
                    >
                      --
                    </div>
                    <div v-else-if="items.type == 'noTitle'"></div>
                    <nuxt-link
                      class="links pt-1 pb-1"
                      v-for="(itemss, indexss) in items.list"
                      :key="indexss"
                      :to="itemss.url"
                    >
                      <span :class="itemss.class" v-if="itemss.type == 'text'">
                        {{ itemss.name }}
                      </span>
                      <div
                        :class="itemss.class"
                        v-else-if="itemss.type == 'img'"
                      >
                        <img
                          :src="
                            require(`~/assets/img/nav/${itemss.img.src}.png`)
                          "
                        />
                      </div>
                      <div class="d-flex" v-else-if="itemss.type == 'both'">
                        <div :class="itemss.class">
                          {{ itemss.name }}
                        </div>
                        <div>
                          <img
                            :width="itemss.width"
                            :height="itemss.height"
                            :class="itemss.img.class"
                            :src="
                              require(`~/assets/img/nav/${itemss.img.src}.png`)
                            "
                          />
                        </div>
                      </div>
                    </nuxt-link>
                  </b-col>
                </b-row>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>


<style lang="scss">
.w-50 {
  width: 50%;
}
.category {
  .categoryList {
    border-bottom: 4px solid transparent;
  }
  .categories {
    height: 50px;
  }
}
.categoryMenu {
  background: $white-color;
  width: 100%;
  height: auto;
  padding-top: 35px;
  padding-bottom: 35px;
  left: 50%;
  top: 141px;
  z-index: 999;
  transform: translateX(-50%);
  border-bottom-left-radius: $border-radius-10;
  border-bottom-right-radius: $border-radius-10;
  @include shadowNormal;

  .title {
    margin-bottom: 30px;
    font-weight: 500;
    font-size: $font-size-18;
    color: $green-color;
  }
  .links {
    color: $dark-grey-color;
    font-size: $font-size-16;
    display: block;
    width: 100%;
  }
}

.row {
  .col {
    &.active {
      border-bottom: 4px solid $green-color;
    }

    .menuBox {
      width: 100%;
      height: 100%;
      @include Vertically;
    }

    &.active span.menuTitle {
      color: $green-color;
      text-decoration: none;
    }
  }
}
</style>