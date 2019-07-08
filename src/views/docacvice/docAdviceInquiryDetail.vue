<template>
  <!-- 病区 ==> 医嘱查询明细 -->
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
            style="color:#FFC963 !important"
            class="btn"
            @click="showOperation"
          >操作</el-button>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog
      style="font-size:12px;"
      title="医嘱操作  001床 张伟"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <!-- <span>这是一段信息</span> -->
      <div class="dialog-header" style="border-bottom:1px solid #ccc;height:120px;">
        <div style="text-indent:20px;border-left:4px solid #FFC963">医嘱信息</div>
        <p
          style="margin-top:10px;text-indent:24px"
        >5%葡萄糖注射液（可立袋）&nbsp;&nbsp;&nbsp;&nbsp; 静滴&nbsp;&nbsp; | &nbsp;&nbsp;BID</p>
        <p style="text-indent:24px">0.9%氯化钠注射液（可立袋）</p>
        <div style="text-indent:20px;border-left:4px solid #FFC963;margin-top:10px;">计划执行时间</div>
        <p style="text-indent:24px;margin-top:10px;">2019-06-15 13:00</p>
      </div>
      <div class="dialog-main" style="border-bottom:1px solid #ccc;height:190px;">
        <div style="text-indent:20px;border-left:4px solid #FFC963;margin-top:15px">开始用药</div>
        <p style="margin-top:10px;text-indent:24px">
          <span style="font-weight:bold">开始时间</span>
          <el-date-picker
            v-model="value_time"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            :picker-options="pickerOptions1"
          ></el-date-picker>
        </p>
        <p style="margin-top:10px;text-indent:24px">
          <span style="font-weight:bold">执行人</span>
          <input type="text" placeholder="04221 李小护" style="text-indent:10px;margin-left:36px">
        </p>
        <p style="margin-top:10px;text-indent:24px">
          <span style="font-weight:bold">密码</span>
          <input type="text" placeholder style="text-indent:10px;margin-left:48px">
        </p>
        <p style="margin-top:10px;text-indent:24px">
          <span style="font-weight:bold">储备处理</span>
          <input type="radio" style="text-indent:10px;margin-left:26px">药已用
          <input type="radio" style="text-indent:10px;margin-left:20px">已退药
        </p>
        <p style="margin-top:10px;text-indent:24px">
          <input type="text" style="margin-left:77px;height:30px;">
        </p>
      </div>
      <div class="dialog-footer" style="border-bottom:1px solid #ccc;height:200px;">
        <div style="text-indent:7px;border-left:4px solid #FFC963;margin-top:15px;font-size:12px">
          <span style="margin-left:15px">结束用药</span>
          <el-switch
            v-model="value2"
            active-color="#FFC963"
            inactive-color="#ccc"
            style="margin-left:220px;display:inline-block"
            @change="switchChange"
          ></el-switch>
        </div>
        <p style="margin-top:76px;text-indent:92px" v-show="pShow">需要先开始用药，才能结束用药。</p>
        <div v-show="blockShow">
          <p style="margin-top:10px;text-indent:24px">
            <span style="font-weight:bold">开始时间</span>
            <el-date-picker
              v-model="value_time"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions1"
            ></el-date-picker>
          </p>
          <p style="margin-top:10px;text-indent:24px">
            <span style="font-weight:bold">执行人</span>
            <input type="text" placeholder="04221 李小护" style="text-indent:10px;margin-left:36px">
          </p>
          <p style="margin-top:10px;text-indent:24px">
            <span style="font-weight:bold">密码</span>
            <input type="text" placeholder style="text-indent:10px;margin-left:48px">
          </p>
          <p style="margin-top:10px;text-indent:24px">
            <span style="font-weight:bold">储备处理</span>
            <input type="radio" style="text-indent:10px;margin-left:26px">药已用
            <input type="radio" style="text-indent:10px;margin-left:20px">已退药
          </p>
          <p style="margin-top:10px;text-indent:24px">
            <input type="text" style="margin-left:77px;height:30px;">
          </p>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false" style="background:#FFC963">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      pShow: false,
      blockShow: true,
      querydetail: true,
      dialogVisible: false,
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
      ],
      value1: true,
      value2: true,
      value_time: "",
      pickerOptions1: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      }
    };
  },

  mounted() {},

  methods: {
    showOperation() {
      this.dialogVisible = true;
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    switchChange() {
      console.log("change");
      this.pShow = !this.pShow;
      this.blockShow = !this.blockShow;
    }
  }
};
</script>

<style type="text/css" lang="scss" >
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
.el-dialog__body {
  padding: 15px 20px;
  /* color: #606266; */
  font-size: 12px;
  /* word-break: break-all; */
}
.el-input__prefix {
  left: -13px;
  top: -6px;
  display: none;
  /* -webkit-transition: all .3s; */
  /* transition: all .3s; */
}
</style>
