<template>
  <!-- 护理 ==>护理记录 -->

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
        <el-button @click="isShow=!isShow">新增评估</el-button>
      </div>
    </el-row>
    <el-row>
      <el-table :data="nursingrecordTableData" border style="width: 100%; margin-top: 20px">
        <el-table-column label="操作" width="180" header-align="center" align="center">
          <template slot-scope="scope">
            <el-button
              class="n-btn"
              type="text"
              size="small"
              @click="handleClick(scope.row)"
              style="color:#FFC963;border:1px solid #fff !important"
            >查看</el-button>
            <el-button
              class="n-btn"
              type="text"
              size="small"
              style="color:#FFC963;border:1px solid #fff !important"
            >修改</el-button>
            <el-button
              class="n-btn"
              type="text"
              size="small"
              style="color:#FFC963;border:1px solid #fff !important"
            >删除</el-button>
          </template>
        </el-table-column>
        <el-table-column header-align="center" align="center" prop="a1" label="日期时间"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a2" label="评估人"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a3" label="T(℃)"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a4" label="P"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a5" label="心率"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a6" label="R"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a7" label="BP"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a8" label="SpO2"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a9" label="意识"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a10" label="氧疗方式"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a11" label="皮肤"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a12" label="伤口"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a13" label="疼痛评估"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a14" label="压疮评估"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a15" label="跌倒评估"></el-table-column>
        <el-table-column header-align="center" align="center" prop="a16" label="营养评估"></el-table-column>
      </el-table>
    </el-row>
    <transition name="bounce">
      <addnursingrecord
        v-show="isShow"
        @clickevent="isShow=false"
        class="add-position"
        style="margin-top: 162px;margin-left: 3px;position: relative;z-index: 10000;width: 1266px !important;"
      ></addnursingrecord>
    </transition>
    <!-- <transition name="bounce">
      <addsecond
        v-show="isTShow"
        @clickEvent="isTShow = false"
        class="add-position"
        style="margin-top:100px;"
      ></addsecond>
    </transition>-->
  </el-form>
</template>

<script type="text/javascript">
import addnursingrecord from "./addNurSingRecord.vue";
// import addsecond from "./addsecond.vue";
import axios from "axios";
export default {
  components: {
    addnursingrecord
    // addsecond
  },
  data() {
    return {
      isShow: false,
      // isTShow: true,
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
          a1: "2018-05-25 15:04",
          a2: "李小护",
          a3: "36.8℃",
          a4: "80次/分钟",
          a5: "77次/分钟",
          a6: "40次/分钟",
          a7: "120/90mmHg",
          a8: "117.00",
          a9: "镇静状态",
          a10: "面罩",
          a11: "红臀",
          a12: "有渗液",
          a13: "15分",
          a14: "20分",
          a15: "12分",
          a16: "20分"
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12,
          a1: "2018-05-24 09:04",
          a2: "李小护",
          a3: "37.8℃",
          a4: "70次/分钟",
          a5: "67次/分钟",
          a6: "45次/分钟",
          a7: "110/90mmHg",
          a8: "102.00",
          a9: "正常",
          a10: "面罩",
          a11: "完整",
          a12: "有渗液",
          a13: "25分",
          a14: "25分",
          a15: "15分",
          a16: "25分"
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "324",
          amount2: "1.9",
          amount3: 9,
          a1: "2018-05-23 10:04",
          a2: "李小护",
          a3: "36.8℃",
          a4: "68次/分钟",
          a5: "57次/分钟",
          a6: "35次/分钟",
          a7: "115/90mmHg",
          a8: "102.00",
          a9: "正常",
          a10: "面罩",
          a11: "完整",
          a12: "有渗血",
          a13: "20分",
          a14: "25分",
          a15: "18分",
          a16: "25分"
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
</style>
