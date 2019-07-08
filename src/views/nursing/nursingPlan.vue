<template>
  <!-- 护理 ==>护理计划 -->
  <el-form :model="dayassesmentData" ref="dayassesmentData">
    <el-row>
      <div class="block">
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions3"
        ></el-date-picker>
      </div>
      <ul class="dayassesment-ul">
        <li>当前</li>
        <li>一周</li>
        <li>住院至今</li>
      </ul>
      <div class="dayassesment-div">
        <span class="print">打印</span>
        <el-button @click="isShow=!isShow">新增计划</el-button>
      </div>
    </el-row>
    <el-row>
      <el-table :data="nursingrecordTableData" border style="width: 100%; margin-top: 20px">
        <el-table-column header-align="center" align="center" prop="a1" label="生成时间"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a2" label="护理问题"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a3" label="观察重点"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a4" label="基础护理"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a5" label="转科护理"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a6" label="健康宣教"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a7" label="出院计划"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a8" label="签名"></el-table-column>
      </el-table>
    </el-row>
    <transition name="bounce">
      <addnursingplan
        v-show="isShow"
        @clickevent="isShow=false"
        class="add-position"
        style=" margin-top:-50px;margin-left: 1px;position: relative;z-index: 10000;width: 1266px !important;"
      ></addnursingplan>
    </transition>
  </el-form>
</template>

<script type="text/javascript">
import addnursingplan from "./addNursingPlan.vue";
import axios from "axios";
export default {
  components: {
    addnursingplan
  },
  data() {
    return {
      isShow: false,
      dayassesmentData: {},
      pickerOptions3: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value7: "",
      nursingrecordTableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10,
          a1: "2019-06-15  17:00",
          a2:
            "感知/认知：1.认识缺乏安全/防御：1.有感染的危险2.有皮肤完整性受损的危险",
          a3: "基础观察重点：1.体温2.脉搏3.呼吸4.皮肤5.意识6.进食",
          a4: "防跌倒：1.防跌倒基础护理措施心理护理：1.通用心理护理措施",
          a5:
            "儿科护理：1.神经母细胞癌患儿的护理2.化疗后患儿的护理3.输液港的护理",
          a6:
            "通用教育：1.入院宣教2.相关疾病宣教儿科：1.儿科防烫伤安全宣教2.儿科防拐带安全宣教",
          a7:
            "出院日期：1.预计日期：2019-06-07教育对象：1.病人和家属饮食指导：1.普食",
          a8: "丽丽"
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
          a1: "2019-06-13  17:00",
          a2:
            "活动/休息：1.有活动无耐力的危险感知/认知：1.知识缺乏安全/防御：1.有感染的危险2.有皮肤完整性受损的危险",
          a3:
            "基础观察重点：1.体温2.脉搏3.呼吸4.皮肤5.意识6.疼痛7.伤口8.进食9.排便10.排尿",
          a4:
            "防跌倒：1.防跌倒基础护理措施2.防跌倒高风险护理措施心理护理：1.通用心理护理措施",
          a5:
            "儿科护理：1.输血患儿护理2.化疗后患儿的护理3.输液港的护理4.PICC护理",
          a6:
            "通用教育：1.入院宣教2.相关疾病宣教3.手术相关知识宣教儿科：1.儿科防烫伤安全宣教2.儿科防拐带安全宣教3.输血相关护理知识宣教",
          a7:
            "出院日期：1.预计日期：2019-06-07教育对象：1.病人和家属饮食指导：1.普食",
          a8: "丽丽"
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
          a1: "2019-06-11  17:00",
          a2:
            "活动/休息：1.有活动无耐力的危险感知/认知：1.知识缺乏安全/防御：1.有感染的危险2.有皮肤完整性受损的危险",
          a3:
            "基础观察重点：1.体温2.脉搏3.呼吸4.皮肤5.意识6.疼痛7.伤口8.进食9.排便10.排尿",
          a4:
            "防跌倒：1.防跌倒基础护理措施2.防跌倒高风险护理措施心理护理：1.通用心理护理措施",
          a5:
            "儿科护理：1.输血患儿护理2.化疗后患儿的护理3.输液港的护理4.PICC护理",
          a6:
            "通用教育：1.入院宣教2.相关疾病宣教3.手术相关知识宣教儿科：1.儿科防烫伤安全宣教2.儿科防拐带安全宣教3.输血相关护理知识宣教",
          a7:
            "出院日期：1.预计日期：2019-06-07教育对象：1.病人和家属饮食指导：1.普食",
          a8: "丽丽"
        }
      ],
      column_row_offset: {
        id: [3, 1, 1],
        name: [2, 1, 1, 1],
        amount1: [1, 1, 1, 1, 1],
        amount2: [1, 1, 1, 1, 1],
        amount3: [1, 1, 1, 1, 1]
      },
      now_col_row_num: {},
      now_col_offset: {}
    };
  },

  mounted() {
    console.log(333);
  },

  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (!this.now_col_row_num[column.property]) {
        this.now_col_row_num[column.property] = Object.assign(
          [],
          this.column_row_offset[column.property]
        );
        let a = this.now_col_row_num[column.property].shift();
        this.now_col_offset[column.property] = a;
        return {
          rowspan: a,
          colspan: 1
        };
      } else if (rowIndex >= this.now_col_offset[column.property]) {
        let a = this.now_col_row_num[column.property].shift();
        this.now_col_offset[column.property] += a;
        return {
          rowspan: a,
          colspan: 1
        };
      } else {
        return {
          rowspan: 0,
          colspan: 0
        };
      }
    }
  }
};
</script>

<style type="text/css" lang="scss" scoped>
.el-input__icon {
  line-height: 25px;
}
</style>
