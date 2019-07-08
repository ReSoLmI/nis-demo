<template>
  <!-- sidebar ==> 患者 -->

  <div>
    <div
      class="center"
      style="position:fixed;height:10px;line-height:10px;top:0px;font-size:14px; width:100px;background:#eec;"
    >
      001&nbsp;&nbsp;张伟&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span @click="closePatient">X</span>
    </div>
    <div class="nav" style="margin-top:-27px;height:23px;">
      <div style="display:inline-block">
        <span style="line-height:20px;margin-top: 0px;">患者待办</span>
        <select
          class="split-input-select"
          style="width:100px;height:20px;position: relative;
    top: -3px;margin-left:20px;border:none;background:#eec;border-right:1px solid #000;"
        >
          <option value="volvo" style="line-height:20px;">电子病历</option>
          <option value="saab" style="line-height:20px;">入院评估单</option>
          <option value="saab" style="line-height:20px;">每日评估单</option>
          <option value="saab" style="line-height:20px;">护理计划</option>
          <option value="saab" style="line-height:20px;">护理评价</option>
          <option value="saab" style="line-height:20px;">护理记录</option>
        </select>
        <select
          class="split-input-select"
          style="width:100px;height:20px;position: relative;
    top: -3px;margin-left:20px;border:none;background:#eec;border-right:1px solid #000;"
        >
          <option value="volvo">体征管理</option>
          <option value="saab">体征录入</option>
          <option value="saab">体温单</option>
          <option value="saab">趋势图</option>
        </select>
        <select
          class="split-input-select"
          style="width:100px;height:20px;position: relative;
    top: -3px;margin-left:20px;border:none;background:#eec;border-right:1px solid #000;"
        >
          <option value="volvo">医嘱管理</option>
          <option value="saab">医嘱查询</option>
          <option value="saab">医嘱执行明细</option>
        </select>
      </div>
      <div style="display:inline-block;">
        <ul
          class="hfast"
          style="width:700px;height:20px;margin-left:20px;border:none;background:#eec;"
        >
          <li @click="patientdetailShow">&nbsp;&nbsp;&nbsp;&nbsp;快捷键：</li>
          <li @click="assesmentShow">入院评估单</li>
          <li @click="dayassesmentShow">每日评估单</li>
          <li @click="nursingplanShow">护理计划</li>
          <li @click="nursingrecordShow">护理记录单</li>
          <li @click="temperaturechartShow">体温单</li>
          <li @click="docadviceinquirydetailShow">医嘱执行明细</li>
        </ul>
      </div>
    </div>
    <div id="card-list-1" class="main">
      <el-tabs
        v-model="editableTabsValue2"
        class="card-list-tabs"
        type="card"
        closable
        @tab-remove="removeTab"
      >
        <el-tab-pane label="患者待办" name="patientdetail" v-if="flagPatientdetail">
          <patientdetail></patientdetail>
        </el-tab-pane>
        <el-tab-pane label="入院评估单" name="assesment" v-if="flagAssesment">
          <assesment></assesment>
        </el-tab-pane>
        <el-tab-pane label="每日评估单" name="dayassesment" v-if="flagDayassesment">
          <dayassesment></dayassesment>
        </el-tab-pane>
        <el-tab-pane label="护理计划" name="nursingplan" v-if="flagNursingplan">
          <nursingplan></nursingplan>
        </el-tab-pane>
        <el-tab-pane label="护理记录单" name="nursingrecord" v-if="flagNursingrecord">
          <nursingrecord></nursingrecord>
        </el-tab-pane>

        <el-tab-pane label="护理计划(智)" name="nursingplanmind" v-if="flagNursingplanMind">
          <nursingplanmind></nursingplanmind>
        </el-tab-pane>
        <el-tab-pane label="护理记录单(智)" name="nursingrecordmind" v-if="flagNursingrecordMind">
          <nursingrecordmind></nursingrecordmind>
        </el-tab-pane>

        <el-tab-pane label="体温单" name="temperaturechart" v-if="flagTemperaturechart">
          <temperaturechart v-on:show-temevent="showtemevent"></temperaturechart>
        </el-tab-pane>
        <el-tab-pane label="体征录入" name="signinput" v-if="flagSigninput">
          <signinput></signinput>
        </el-tab-pane>
        <el-tab-pane label="医嘱查询" name="docadviceinquiry" v-if="flagDocadviceinquiry">
          <docadviceinquiry v-on:show-docevent="showevent"></docadviceinquiry>
        </el-tab-pane>
        <el-tab-pane label="医嘱查询明细" name="docadviceinquirydetail" v-if="flagDocadviceinquirydetail">
          <docadviceinquirydetail></docadviceinquirydetail>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type="text/javascript">
import assesment from "./document/assesment.vue";
import dayassesment from "./document/dayAssesment.vue";
import temperaturechart from "./sign/temperaturechart.vue";
import signinput from "./sign/signInput.vue";
import patientdetail from "./document/patientDetail.vue";
import nursingplan from "./nursing/nursingPlan.vue";
import nursingrecord from "./nursing/nursinGrecord.vue";

import nursingplanmind from "./nursing/nursingPlanMind.vue";
import nursingrecordmind from "./nursing/nursinGrecordMind.vue";

import docadviceinquiry from "./docacvice/docAdviceInquiry.vue";
import docadviceinquirydetail from "./docacvice/docAdviceInquiryDetail.vue";
// import axios from "src/new/libs/axios.js";
export default {
  components: {
    assesment,
    dayassesment,
    temperaturechart,
    signinput,
    patientdetail,
    nursingplan,
    nursingrecord,
    nursingplanmind,
    nursingrecordmind,
    docadviceinquiry,
    docadviceinquirydetail
  },
  data() {
    return {
      // tabIndex: 2,
      editableTabsValue2: "patientdetail", // tab的active
      assesment: {}, // 入院评估Obj
      dayassesment: {},
      // temperaturechart: {}, //体温单Obj
      patientdetail: {}, // 患者详情Obj
      flagPatientdetail: true,
      flagTemperaturechart: true,
      flagAssesment: true,
      flagDayassesment: true,
      flagNursingplan: true,
      flagNursingrecord: true,

      flagNursingplanMind: false,
      flagNursingrecordMind: false,

      flagSigninput: true,
      flagDocadviceinquiry: true,
      flagDocadviceinquirydetail: true,
      editableTabs2: [
        {
          title: "Tab 1",
          name: "assesment",
          content: <assesment />
        },
        {
          title: "Tab 2",
          name: "dayassesment",
          content: <dayassesment />
        },
        {
          title: "Tab 3",
          name: "temperaturechart",
          content: <temperaturechart />
        },
        {
          title: "Tab 4",
          name: "signinput",
          content: <signinput />
        },
        {
          title: "Tab 5",
          name: "patientdetail",
          content: <patientdetail />
        },
        {
          title: "Tab 6",
          name: "docadviceinquiry",
          content: <docadviceinquiry />
        },
        {
          title: "Tab 7",
          name: "docadviceinquirydetail",
          content: <docadviceinquirydetail />
        }
      ]
    };
  },
  mounted() {},
  methods: {
    patientdetailShow() {
      this.flagPatientdetail = true;
    },
    assesmentShow() {
      this.flagAssesment = true;
    },
    dayassesmentShow() {
      this.flagDayassesment = true;
    },
    nursingplanShow() {
      this.flagNursingplan = true;
    },
    nursingrecordShow() {
      this.flagNursingrecord = true;
    },
    temperaturechartShow() {
      this.flagTemperaturechart = true;
    },
    signinputShow() {
      this.flagSigninput = true;
    },
    docadviceinquiryShow() {
      this.flagDocadviceinquiry = true;
    },
    docadviceinquirydetailShow() {
      this.flagDocadviceinquirydetail = true;
    },

    closePatient() {},
    removeTab(targetName) {
      // let tabs = this.editableTabs2;
      // let activeName = this.editableTabsValue2;
      // if (activeName === targetName) {
      //   tabs.forEach((tab, index) => {
      //     if (tab.name === targetName) {
      //       let nextTab = tabs[index + 1] || tabs[index - 1];
      //       if (nextTab) {
      //         activeName = nextTab.name;
      //       }
      //     }
      //   });
      // }
      // this.editableTabsValue2 = activeName;
      // this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
    },
    showevent() {
      console.log(999999);
      this.editableTabsValue2 = "docadviceinquirydetail";
      // this.flagDocadviceinquiry = false;
      // this.flagDocadviceinquirydetail = true;
    },
    showtemevent() {
      console.log(77777);
      this.editableTabsValue2 = "signinput";
      // this.flagDocadviceinquiry = false;
      // this.flagDocadviceinquirydetail = true;
    }
    // jumpPage() {
    //   this.flagTemperaturechart = false;
    //   console.log(this.flagTemperaturechart);
    //   this.flagSigninput = true;
    // }
    // showcard() {
    //   console.log(1234);
    //   this.flagDocadviceinquiry = false;
    //   this.flagDocadviceinquirydetail = true;
    // }      @showevent="showcard"
  }
};
</script>

<style type="text/css" lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.center {
  // position: absolute;
  // top: -40px;
  left: 148px;
  z-index: 1000000;
  padding: 6px 10px;
  line-height: 28px;
  width: 122px;
  // border: 1px solid #fff;
  // background: #fff;
  color: #666;
  font-size: 14px;
}
.nav {
  height: 28px;
  width: 100%;
  background: #eec;
  margin-top: -9px;
  padding-left: 66px;
  span {
    width: 70px;
    height: 20px;
    line-height: 20px;
    float: left;
    font-size: 14px;
    margin-top: 4px;
    padding-left: 15px;
    padding-right: 15px;
    border-right: 1px solid;
  }
}
.main {
  margin-top: 8px;
  .main-boot {
    width: 100px;
    height: 40px;
    // background: #0f0;
    border-bottom: 1px solid #eec;
    float: left;
    margin-left: -100px;
  }
  margin-left: 60px;
}
// .fast {
//   height: 20px;
//   line-height: 20px;
//   background: #eec;
//   margin-top: 1px;
//   div {
//     position: absolute;
//     display: inline-block;
//     font-size: 14px;
//     font-weight: bold;
//     margin-left: 15px;
//     left: 66px;
//   }
//   ul {
//     padding-left: 125px;

//     display: inline-block;
//     li {
//       float: left;
//       font-size: 12px;
//       padding-left: 20px;
//       padding-right: 20px;
//     }
//   }
// }
.nav ul li {
  float: left;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
  padding-left: 11px;
  padding-right: 11px;
}
</style>

<style>
#tab-docadviceinquirydetail,
#tab-docadviceinquiry,
#tab-signinput,
#tab-temperaturechart,
#tab-dayassesment,
#tab-assesment,
#tab-patientdetail,
#tab-nursingplan,
#tab-nursingrecord,
#tab-nursingplanmind,
#tab-nursingrecordmind {
  height: 24px;
  line-height: 24px;
  position: relative;
  /* top: -8px; */
}
.hfast {
  float: left;
}
.el-tabs__nav-wrap {
  height: 26px;
}
.el-tabs__item.is-active {
  color: #ffc963;
}
.el-tabs__item:hover {
  color: #ffc963;
  cursor: pointer;
}
.el-tabs__header {
  margin: 0px 0 8px !important;
}
</style>
