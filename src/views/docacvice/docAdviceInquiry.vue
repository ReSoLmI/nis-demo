<template>
  <!-- 病区 ==> 医嘱查询 -->
  <div>
    <el-date-picker
      v-model="picker_value"
      type="daterange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      default-value="2010-10-01"
    ></el-date-picker>
    <div class="type" style="display:inline-block;font-size:12px;">
      <span style="margin-left:10px;color:#FFC963;">今日</span>
      <span style="margin-left:10px;">一周</span>
      <span style="margin-left:10px;">入院至今</span>
    </div>
    <div style="display:inline-block;">
      <template>
        <el-select v-model="nurse" placeholder="全部医嘱" style="margin-left:10px;">
          <el-option
            v-for="item in nurseoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
      <template>
        <el-select v-model="status" placeholder="全部状态" style="margin-left:10px;">
          <el-option
            v-for="item in statusoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
      <template>
        <el-select v-model="time" placeholder="长期+临时" style="margin-left:10px;">
          <el-option
            v-for="item in timeoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
      <template>
        <el-select v-model="methods" placeholder="全部方式" style="margin-left:10px;">
          <el-option
            v-for="item in methodsoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </template>
    </div>
    <div v-if="query">
      <el-table
        :data="tableData3"
        height="530"
        class="table"
        :header-cell-style="{
        'color':'#000',
        'font-size':'12px',
        'font-weight':'300',
        'background':'#eee'
        }"
      >
        <el-table-column prop="number" label="组号" width="100"></el-table-column>
        <el-table-column prop="name" label="医嘱名称" width="120"></el-table-column>
        <el-table-column prop="sex" label="类别" width="50"></el-table-column>
        <el-table-column prop="age" label="规格" width="80"></el-table-column>
        <el-table-column prop="mrn" label="剂量" width="60"></el-table-column>
        <el-table-column prop="history" label="单位" width="80"></el-table-column>
        <el-table-column prop="time" label="性质" width="80"></el-table-column>
        <el-table-column prop="doctor" label="用法" width="80"></el-table-column>
        <el-table-column prop="level" label="频度" width="80"></el-table-column>
        <el-table-column prop="diagnose" label="起始时间" width="180"></el-table-column>
        <el-table-column prop="food" label="停止时间" width="180"></el-table-column>
        <el-table-column prop="insurance" label="操作" width="80">
          <el-button
            type="text"
            size="mini"
            style="color:#FFC963 !important"
            class="btn"
            @click="showDocadviceDetail"
          >执行明细</el-button>
        </el-table-column>
      </el-table>
    </div>

    <div v-if="querydetail" style="position:relative;">
      <div
        class="left"
        style="width:200px;display:inline-block;background:#F3F3F3;height:300px;font-size:14px;"
      >
        <div class="top" style="height:120px;border:1px solid #ccc">
          <div
            style="width:180px;height:35px;margin-left:10px;border-bottom:1px solid #CCC;line-height:35px;text-align:center"
          >6824732&nbsp;&nbsp;R</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center"
          >5%葡萄糖注射液</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center;color:#989898"
          >250ml/瓶剂量：250ml</div>
        </div>
        <div
          class="bottom"
          style="height:120px;border-bottom:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid #ccc;background:#fff; "
        >
          <div
            style="width:180px;height:35px;margin-left:10px;border-bottom:1px solid #CCC;line-height:35px;text-align:center"
          >6824732&nbsp;&nbsp;R</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center"
          >5%葡萄糖注射液</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center;color:#989898"
          >250ml/瓶剂量：250ml</div>
        </div>
        <div
          class="bottom"
          style="height:120px;border-bottom:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid #ccc;background:#fff; "
        >
          <div
            style="width:180px;height:35px;margin-left:10px;border-bottom:1px solid #CCC;line-height:35px;text-align:center"
          >6824732&nbsp;&nbsp;R</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center"
          >5%葡萄糖注射液</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center;color:#989898"
          >250ml/瓶剂量：250ml</div>
        </div>
        <div
          class="bottom"
          style="height:120px;border-bottom:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid #ccc;background:#fff; "
        >
          <div
            style="width:180px;height:35px;margin-left:10px;border-bottom:1px solid #CCC;line-height:35px;text-align:center"
          >6824732&nbsp;&nbsp;R</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center"
          >5%葡萄糖注射液</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center;color:#989898"
          >250ml/瓶剂量：250ml</div>
        </div>
        <div
          class="bottom"
          style="height:120px;border-bottom:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid #ccc;background:#fff; "
        >
          <div
            style="width:180px;height:35px;margin-left:10px;border-bottom:1px solid #CCC;line-height:35px;text-align:center"
          >6824732&nbsp;&nbsp;R</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center"
          >5%葡萄糖注射液</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center;color:#989898"
          >250ml/瓶剂量：250ml</div>
        </div>
        <div
          class="bottom"
          style="height:120px;border-bottom:1px solid #ccc;border-left:1px solid #ccc;border-right:1px solid #ccc;background:#fff; "
        >
          <div
            style="width:180px;height:35px;margin-left:10px;border-bottom:1px solid #CCC;line-height:35px;text-align:center"
          >6824732&nbsp;&nbsp;R</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center"
          >5%葡萄糖注射液</div>
          <div
            style="width:180px;height:35px;margin-left:10px;line-height:35px;text-align:center;color:#989898"
          >250ml/瓶剂量：250ml</div>
        </div>
      </div>
      <div
        class="main"
        style="display:inline-block;background:#999;height:300px;width:970px; position: absolute;"
      >
        <div class="nav" style="background:#EFEFCC">
          <ul style="height:40px;">
            <li>药品医嘱</li>
            <li>静滴</li>
            <li>BID</li>
            <li>开嘱医生：余建</li>
            <li>起始时间：2019-06-12 10:00</li>
            <li>停止时间：2018-03-12 10:00</li>
          </ul>
        </div>
        <el-table
          :data="tableData4"
          height="530"
          class="table"
          :header-cell-style="{
        'color':'#000',
        'font-size':'12px',
        'font-weight':'300',
        'background':'#eee'
        }"
        >
          <el-table-column prop="plan_time" label="计划执行时间"></el-table-column>
          <el-table-column prop="start_time" label="开始时间"></el-table-column>
          <el-table-column prop="end_time" label="结束时间"></el-table-column>
          <el-table-column prop="status" label="状态"></el-table-column>
          <el-table-column prop="operation" label=" 操作" width="60">
            <el-button
              type="text"
              size="mini"
              style="border：none"
              class="btn"
              @click="showOperation"
            >操作</el-button>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      query: true,
      querydetail: false,
      picker_value: "",
      nurseoptions: [
        {
          value: "选项1",
          label: "药品医嘱"
        },
        {
          value: "选项2",
          label: "输血医嘱"
        },
        {
          value: "选项3",
          label: "检验医嘱"
        },
        {
          value: "选项4",
          label: "护理医嘱"
        },
        {
          value: "选项5",
          label: "母乳医嘱"
        }
      ],
      statusoptions: [
        {
          value: "选项1",
          label: "未停止"
        },
        {
          value: "选项2",
          label: "已停止"
        },
        {
          value: "选项3",
          label: "已撤销"
        }
      ],
      timeoptions: [
        {
          value: "选项1",
          label: "长期"
        },
        {
          value: "选项2",
          label: "临时"
        }
      ],
      methodsoptions: [
        {
          value: "选项1",
          label: "静滴"
        },
        {
          value: "选项2",
          label: "肌注"
        },
        {
          value: "选项3",
          label: "皮下注射"
        },
        {
          value: "选项4",
          label: "静推"
        },
        {
          value: "选项5",
          label: "口服"
        },
        {
          value: "选项6",
          label: "其他"
        }
      ],
      nurse: "",
      status: "",
      time: "",
      methods: "",
      tableData3: [
        {
          number: "6824738 R",
          name: "5%葡萄糖注射液",
          sex: "西药",
          age: "250ml",
          mrn: "250",
          history: "ml/瓶",
          time: "长期",
          doctor: "静滴",
          level: "BID",
          diagnose: "2019-06-12  10:00",
          food: "2018-03-12  10:00",
          insurance: "执行明细"
        },
        {
          number: "6824738 R",
          name: "破伤风抗毒素注射液",
          sex: "西药",
          age: "250ml",
          mrn: "250",
          history: "ml/瓶",
          time: "长期",
          doctor: "静滴",
          level: "BID",
          diagnose: "2019-06-12  10:00",
          food: "2018-03-12  10:00",
          insurance: "执行明细"
        },
        {
          number: "6824738 R",
          name: "5%葡萄糖注射液",
          sex: "西药",
          age: "250ml",
          mrn: "250",
          history: "ml/瓶",
          time: "长期",
          doctor: "静滴",
          level: "BID",
          diagnose: "2019-06-12  10:00",
          food: "2018-03-12  10:00",
          insurance: "执行明细"
        },
        {
          number: "6824738 R",
          name: "5%葡萄糖注射液",
          sex: "西药",
          age: "250ml",
          mrn: "250",
          history: "ml/瓶",
          time: "长期",
          doctor: "静滴",
          level: "BID",
          diagnose: "2019-06-12  10:00",
          food: "2018-03-12  10:00",
          insurance: "执行明细"
        },
        {
          number: "6824738 R",
          name: "5%葡萄糖注射液",
          sex: "西药",
          age: "250ml",
          mrn: "250",
          history: "ml/瓶",
          time: "长期",
          doctor: "静滴",
          level: "BID",
          diagnose: "2019-06-12  10:00",
          food: "2018-03-12  10:00",
          insurance: "执行明细"
        },
        {
          number: "6824738 R",
          name: "5%葡萄糖注射液",
          sex: "西药",
          age: "250ml",
          mrn: "250",
          history: "ml/瓶",
          time: "长期",
          doctor: "静滴",
          level: "BID",
          diagnose: "2019-06-12  10:00",
          food: "2018-03-12  10:00",
          insurance: "执行明细"
        },
        {
          number: "6824738 R",
          name: "5%葡萄糖注射液",
          sex: "西药",
          age: "250ml",
          mrn: "250",
          history: "ml/瓶",
          time: "长期",
          doctor: "静滴",
          level: "BID",
          diagnose: "2019-06-12  10:00",
          food: "2018-03-12  10:00",
          insurance: "执行明细"
        },
        {
          number: "6824738 R",
          name: "5%葡萄糖注射液",
          sex: "西药",
          age: "250ml",
          mrn: "250",
          history: "ml/瓶",
          time: "长期",
          doctor: "静滴",
          level: "BID",
          diagnose: "2019-06-12  10:00",
          food: "2018-03-12  10:00",
          insurance: "执行明细"
        }
      ],
      tableData4: [
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        },
        {
          plan_time: "2019-06-15  19:00",
          start_time: "未开始",
          end_time: "未结束",
          status: "已拆分",
          operation: "操作"
        }
      ]
    };
  },

  mounted() {
    // axios.get("/restapi/order/orderInfo/101").then(res => {
    //   console.log(res.data);
    //   // this.planList = res.data;
    //   // console.log(this.planList);
    // });
  },

  methods: {
    showDocadviceDetail() {
      console.log(888);
      // this.query = true;
      // this.querydetail = false;
      this.$emit("show-docevent");
    },
    showOperation() {}
  }
};
</script>

<style type="text/css" lang="scss" scoped>
.btn {
  border: none;
}
.nav ul li {
  float: left;
  line-height: 40px;
  // width: 120px;
  text-align: center;
  font-size: 12px;
  padding-left: 20px;
  padding-right: 20px;
}
// .el-input__icon {
//   line-height: 0px !important;
// }
</style>
