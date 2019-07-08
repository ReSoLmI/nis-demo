<template>
  <!-- sidebar ==> 病区 -->

  <div>
    <div class="nav" style="margin-top: -27px;">
      <span style="width: 86px;">体征批量录入</span>
      <select
        class="split-input-select"
        style="width:100px;height:26px;margin-left:20px;border:none;background:orange;border-right:1px solid #000;"
      >
        <option value="volvo">医嘱管理</option>
        <option value="saab">医嘱拆分</option>
        <option value="saab">医嘱巡视单</option>
      </select>
      <select
        class="split-input-select"
        style="width:100px;height:26px;margin-left:20px;border:none;background:orange;border-right:1px solid #000;"
      >
        <option value="volvo">待办管理</option>
        <option value="saab">待办事项</option>
        <option value="saab">体征待测</option>
      </select>
      <select
        class="split-input-select"
        style="width:100px;height:26px;margin-left:20px;border:none;background:orange;border-right:1px solid #000;"
      >
        <option value="volvo">统计分析</option>
        <option value="saab">体温异常统计</option>
        <option value="saab">医嘱异常统计</option>
      </select>
    </div>
    <!-- <div class="fast">
      <div>快捷键：</div>
      <ul>
        <li>&nbsp;&nbsp;&nbsp;&nbsp;患者代办</li>
        <li>入院评估单</li>
        <li>每日评估单</li>
        <li>护理计划</li>
        <li>护理记录单</li>
        <li>体温单</li>
        <li>体征录入</li>
        <li>医嘱查询</li>
        <li>医嘱执行明细</li>
      </ul>
    </div>-->
    <div class="main">
      <!-- <div class="main-boot"></div> -->
      <el-tabs v-model="activeName" type="card" closable @tab-remove="removeTab">
        <!-- <el-tab-pane label="待办事项" name="todoitems" v-if="flagTodoitems">
          <todoitems></todoitems>
        </el-tab-pane>-->
        <el-tab-pane label="体征批量录入" name="signbatchinput" v-if="flagSignbatchinput">
          <signbatchinput></signbatchinput>
        </el-tab-pane>
        <el-tab-pane label="医嘱拆分" name="docacvicesplit" v-if="flagDocacvicesplit">
          <docacvicesplit></docacvicesplit>
        </el-tab-pane>
        <el-tab-pane label="医嘱巡视" name="docadvicepatrol" v-if="flagDocadvicepatrol">
          <docadvicepatrol></docadvicepatrol>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script type="text/javascript">
import todoitems from "./sign/todoItems.vue";
import signbatchinput from "./sign/signBatchInput.vue";
import docacvicesplit from "./docacvice/docAcviceSplit.vue";
import docadvicepatrol from "./docacvice/docAdvicePatrol.vue";
// import axios from "src/new/libs/axios.js";
export default {
  components: {
    todoitems,
    signbatchinput,
    docacvicesplit,
    docadvicepatrol
  },
  data() {
    return {
      activeName: "docacvicesplit", // tab的active
      assesment: {}, // 入院评估Obj
      dayassesment: {},
      // temperaturechart: {}, //体温单Obj
      patientdetail: {}, // 患者详情Obj
      flagTodoitems: true,
      flagSignbatchinput: true,
      flagDocacvicesplit: true,
      flagDocadvicepatrol: true,
      flagPatientdetail: true,
      flagTemperaturechart: true,
      flagAssesment: true,
      flagDayassesment: true,
      flagNursingplan: true,
      flagNursingrecord: true,
      flagSigninput: true,
      flagDocadviceinquiry: true
    };
  },
  methods: {
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
    }
  }
};
</script>

<style type="text/css" lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}

.nav {
  height: 28px;
  width: 100%;
  background: orange;
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
    height: 25px;
    // background: #0f0;
    border-bottom: 1px solid #eec;
    float: left;
    margin-left: -100px;
  }
  margin-left: 60px;
}
.fast {
  height: 20px;
  line-height: 20px;
  background: #eec;
  margin-top: 1px;
  div {
    position: absolute;
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    margin-left: 15px;
    left: 66px;
  }
  ul {
    padding-left: 125px;

    display: inline-block;
    li {
      float: left;
      font-size: 12px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }
}
</style>
<style>
#tab-signbatchinput,
#tab-docacvicesplit,
#tab-docadvicepatrol {
  height: 24px;
  line-height: 24px;
}
.el-tabs__item.is-active {
  color: #ffc963;
}
.el-tabs__item:hover {
  color: #ffc963;
  cursor: pointer;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #ffc963 !important;
  color: #303133;
}
</style>
