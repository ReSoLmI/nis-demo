<template>
  <!-- 护理 ==>添加护理计划 -->
  <el-form :model="submitForm" :rules="rules" ref="submitForm">
    <div class="adddayassesment adddayassesment-n">
      <div class="header" style="background:#FFF3E6">
        <div class="dration" @click="closeadddayassesment"><</div>
        <div class="header-middle">添加计划</div>
      </div>
      <div class="c-gap-main c-gap-main-n">
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            护理问题：
            <el-button @click="adda1">生成护理问题</el-button>
            <div class="ui-float-r">
              <el-date-picker v-model="submitForm.date" type="date" placeholder="选择日期"></el-date-picker>
              <el-button @click="saveclose">保存</el-button>
            </div>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="submitForm.a1"
            ></el-input>
          </el-col>
        </el-row>
        <div class="addnp-tit" style="background:#FFF3E6">
          <p>护理措施</p>
        </div>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            观察重点：
            <el-button @click="dialog2=true">导入观察重点</el-button>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="submitForm.a2"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            基础护理：
            <el-button @click="dialog3=true">导入基础护理</el-button>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="submitForm.a3"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            专科护理：
            <el-button @click="dialog4=true">导入专科护理</el-button>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="submitForm.a4"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            健康宣教：
            <el-button @click="dialog5=true">导入健康宣教</el-button>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="submitForm.a5"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            出院计划：
            <el-button @click="dialog6=true">导入出院计划</el-button>
          </el-col>
        </el-row>
        <el-row class="addnp-top">
          <el-col class="ui-clear">
            <el-input
              type="textarea"
              :autosize="{ minRows: 2, maxRows: 4}"
              placeholder="请输入内容"
              v-model="submitForm.a6"
            ></el-input>
          </el-col>
        </el-row>
      </div>
      <el-dialog
        title="导入观察重点"
        modal="false"
        modal-append-to-body="false"
        append-to-body="false"
        :visible.sync="dialog2"
      >
        <el-tabs v-model="activeName2" type="card">
          <el-tab-pane label="基础观察重点" name="first">
            <el-checkbox-group v-model="checkList2" class="el-checkbox-group-n">
              <el-checkbox label="脉搏"></el-checkbox>
              <el-checkbox label="呼吸"></el-checkbox>
              <el-checkbox label="血压"></el-checkbox>
              <el-checkbox label="体温"></el-checkbox>
              <el-checkbox label="皮肤"></el-checkbox>
              <el-checkbox label="伤口"></el-checkbox>
              <el-checkbox label="意识"></el-checkbox>
              <el-checkbox label="疼痛"></el-checkbox>
              <el-checkbox label="排便"></el-checkbox>
            </el-checkbox-group>
            <p class="dialog-bottom-btn">
              <el-button size="mini" @click="adda2('基础观察重点:',checkList2,'a2','dialog2')">导入</el-button>
            </p>
          </el-tab-pane>
          <el-tab-pane label="呼吸系统" name="second">呼吸系统</el-tab-pane>
          <el-tab-pane label="消化系统" name="third">消化系统</el-tab-pane>
          <el-tab-pane label="循环系统" name="fourth">循环系统</el-tab-pane>
        </el-tabs>
      </el-dialog>
      <el-dialog
        title="导入基础护理"
        modal="false"
        modal-append-to-body="false"
        append-to-body="false"
        :visible.sync="dialog3"
      >
        <el-tabs v-model="activeName3" type="card">
          <el-tab-pane label="防跌倒" name="first">
            <el-checkbox-group v-model="checkList3" class="el-checkbox-group-n">
              <el-checkbox label="防跌倒基础护理措施"></el-checkbox>
              <el-checkbox label="防跌倒高风险护理措施"></el-checkbox>
              <el-checkbox label="躁动不安针对性措施"></el-checkbox>
              <el-checkbox label="视力障碍针对性措施"></el-checkbox>
              <el-checkbox label="频繁入厕针对性措施"></el-checkbox>
              <el-checkbox label="活动无耐力针对性措施"></el-checkbox>
            </el-checkbox-group>
            <p class="dialog-bottom-btn">
              <el-button size="mini" @click="adda2('防跌倒:',checkList3,'a3','dialog3')">导入</el-button>
            </p>
          </el-tab-pane>
          <el-tab-pane label="防压疮" name="second">防压疮</el-tab-pane>
          <el-tab-pane label="压疮护理" name="third">压疮护理</el-tab-pane>
          <el-tab-pane label="自理能力缺陷护理" name="fourth">自理能力缺陷护理</el-tab-pane>
        </el-tabs>
      </el-dialog>
      <el-dialog
        title="导入专科护理"
        modal="false"
        modal-append-to-body="false"
        append-to-body="false"
        :visible.sync="dialog4"
      >
        <el-tabs v-model="activeName4" type="card">
          <el-tab-pane label="产科" name="first">
            <el-checkbox-group v-model="checkList4" class="el-checkbox-group-n">
              <el-checkbox label="预防产后出血的护理"></el-checkbox>
              <el-checkbox label="新生儿的护理"></el-checkbox>
              <el-checkbox label="无合并症孕妇的护理"></el-checkbox>
              <el-checkbox label="顺产后的护理"></el-checkbox>
              <el-checkbox label="剖宫产后的护理"></el-checkbox>
              <el-checkbox label="先兆早产的护理"></el-checkbox>
            </el-checkbox-group>
            <p class="dialog-bottom-btn">
              <el-button size="mini" @click="adda2('产科:',checkList4,'a4','dialog4')">导入</el-button>
            </p>
          </el-tab-pane>
          <el-tab-pane label="消化系统" name="second">消化系统</el-tab-pane>
          <el-tab-pane label="耳鼻喉护理" name="third">耳鼻喉护理</el-tab-pane>
          <el-tab-pane label="心血管内科" name="fourth">心血管内科</el-tab-pane>
        </el-tabs>
      </el-dialog>
      <el-dialog
        title="导入健康宣教"
        modal="false"
        modal-append-to-body="false"
        append-to-body="false"
        :visible.sync="dialog5"
      >
        <el-tabs v-model="activeName5" type="card">
          <el-tab-pane label="通用教育" name="first">
            <el-checkbox-group v-model="checkList5" class="el-checkbox-group-n">
              <el-checkbox label="入院宣教"></el-checkbox>
              <el-checkbox label="饮食指导"></el-checkbox>
              <el-checkbox label="用药指导"></el-checkbox>
              <el-checkbox label="检查指导"></el-checkbox>
              <el-checkbox label="相关疾病宣教"></el-checkbox>
              <el-checkbox label="手术相关知识宣教"></el-checkbox>
            </el-checkbox-group>
            <p class="dialog-bottom-btn">
              <el-button size="mini" @click="adda2('通用教育:',checkList5,'a5','dialog5')">导入</el-button>
            </p>
          </el-tab-pane>
          <el-tab-pane label="产科" name="second">呼吸系统</el-tab-pane>
          <el-tab-pane label="消化系统" name="third">消化系统</el-tab-pane>
          <el-tab-pane label="心血管内科" name="fourth">循环系统</el-tab-pane>
        </el-tabs>
      </el-dialog>
      <el-dialog
        title="导入出院计划"
        modal="false"
        modal-append-to-body="false"
        append-to-body="false"
        :visible.sync="dialog6"
      >
        <el-tabs v-model="activeName6" type="card">
          <el-tab-pane label="出院日期" name="first">
            <el-checkbox-group v-model="checkList6" class="el-checkbox-group-n">
              <el-checkbox label="预计日期"></el-checkbox>
            </el-checkbox-group>
            <p class="dialog-bottom-btn">
              <el-button size="mini" @click="adda2('出院日期:',checkList6,'a6','dialog6')">导入</el-button>
            </p>
          </el-tab-pane>
          <el-tab-pane label="教育对象" name="second">教育对象</el-tab-pane>
          <el-tab-pane label="用药指导" name="third">用药指导</el-tab-pane>
          <el-tab-pane label name="fourth">饮食指导</el-tab-pane>
        </el-tabs>
      </el-dialog>
    </div>
  </el-form>
</template>

<script type="text/javascript">
import axios from "axios";
// import nursingproblem from "./nursingproblem.vue";

export default {
  components: {
    // nursingproblem
  },
  data() {
    var validateb1 = (rule, value, callback) => {
      if (value < 35 || value > 40) {
        return callback(new Error("体温录入值不在有效范围35~40之内"));
      }
      callback();
    };
    var validateb4 = (rule, value, callback) => {
      if (value < 40 || value > 200) {
        return callback(new Error("脉搏不在有效范围40~200之内"));
      }
      callback();
    };
    var validateb5 = (rule, value, callback) => {
      if (value < 40 || value > 50) {
        return callback(new Error("呼吸不在有效范围40~50之内"));
      }
      callback();
    };
    var validateb6 = (rule, value, callback) => {
      if (value < 10 || value > 200) {
        return callback(new Error("心率不在有效范围10~200之内"));
      }
      callback();
    };

    return {
      // isnpShow: false,
      dialogPainFormVisible: false,
      dialogBradenFormVisible: false,
      dialogFallFormVisible: false,
      dialogSelfFormVisible: false,
      radio: "1",
      telinput: "",
      submitForm: {
        date: "",
        a1: "",
        a2: "",
        a3: "",
        a4: "",
        a5: "",
        a6: "",
        a7: ""
      },
      rules: {
        b1: [
          { required: true, message: "请输入体温", trigger: "blur" },
          { validator: validateb1, trigger: "blur" }
        ],
        b4: [
          { required: true, message: "请输入脉搏", trigger: "blur" },
          { validator: validateb4, trigger: "blur" }
        ],
        b5: [
          { required: true, message: "请输入呼吸", trigger: "blur" },
          { validator: validateb5, trigger: "blur" }
        ],
        b6: [
          { required: true, message: "请输入心率", trigger: "blur" },
          { validator: validateb6, trigger: "blur" }
        ]
      },
      formLabelWidth: "120px",
      value: "",
      planList: {},
      dialog2: false,
      dialog3: false,
      dialog4: false,
      dialog5: false,
      dialog6: false,
      activeName2: "first",
      activeName3: "first",
      activeName4: "first",
      activeName5: "first",
      activeName6: "first",
      checkList2: [],
      checkList3: [],
      checkList4: [],
      checkList5: [],
      checkList6: []
    };
  },
  watch: {
    "submitForm.b1": function(val) {
      console.log(val);
    }
  },
  mounted() {},
  methods: {
    saveclose() {
      this.$message("保存成功");
      // this.closeadddayassesment();
    },
    adda1() {
      this.submitForm.a1 = `活动/休息：1.有活动无耐力的危险感知/认知：1.知识缺乏安全/防御：1.有感染的危险2.有皮肤完整性受损的危险`;
    },
    adda2(tit, checkList, a, dialog) {
      let html = tit;
      for (let i = 0; i < checkList.length; i++) {
        let item = checkList[i];
        html += `${i + 1}.${item}`;
      }
      this.submitForm[a] = html;
      this[dialog] = false;
    },

    saveplan() {
      if (_self.checkForm()) {
        // this.isnpShow = !this.isnpShow;
        this.$emit("clickevent");
        this.$emit("clickEvent");
        this.$message("保存并生成护理计划成功");
        axios.get("/api/temperatureMock").then(res => {
          console.log(res.data);
          this.planList = res.data;
          console.log(this.planList);
        });
      }
    },
    save() {
      let _self = this;
      _self.$refs["submitForm"].validate(valid => {
        if (valid) {
          _self.$message("保存成功");
        } else {
          return false;
        }
      });
    },
    closeadddayassesment() {
      this.$emit("clickevent");
    }
  }
};
</script>

<style type="text/css" lang="scss" >
.el-input__icon {
  line-height: 25px;
}
.adddayassesment {
  width: 1266px;
  height: 800px;
  border: 1px solid #000;
  background: #fff;
  overflow: scroll;
}
.c-gap-main {
  margin-top: 15px;
  width: 99%;
  height: 466px;
  border: 1px solid #d7d7d7;
  .little {
    position: absolute;
    width: 4px;
    height: 16px;
    background: #009ef9;
    top: 93px;
  }
  p {
    font-size: 14px;
    padding-left: 10px;
    background: #ebf6ff;
    height: 25px;
    line-height: 25px;
  }
  .patientdetail-title-main {
    padding: 9px;
    span {
      font-size: 12px;
      color: #666;
    }
  }
  .patientdetail-title-main-other {
    padding: 9px;
    span {
      font-size: 12px;
      color: #666;
    }
    .f0 {
      font-size: 0;
      margin-left: 56px;
      display: inline-block;
      .management {
        text-align: center;
        line-height: 20px;
        display: inline-block;
        width: 40px;
        height: 20px;
        border-radius: 5px 0 0 5px;
        background: #f2f2f2;
        font-size: 12px;
      }
      .unmanagement {
        line-height: 20px;
        text-align: center;
        display: inline-block;
        width: 40px;
        height: 20px;
        border-radius: 0 5px 5px 0;
        background: #ffcc66;
        font-size: 12px;
      }
    }
  }
  .el-radio {
    margin-left: 32px;
  }
  .detail-telinput-mini {
    width: 200px !important;
  }
}
.patientdetail-title-main {
  padding: 9px;
  span {
    font-size: 12px;
    color: #666;
  }
}
// .little-four {
//   position: absolute;
//   width: 4px;
//   height: 16px;
//   background: #009ef9;
//   top: 21px;
// }
.header {
  height: 36px;
  background: #fff3e6;
  .dration {
    font-size: 20px;
    line-height: 36px;
    width: 33px;
    display: inline-block;
    text-align: center;
    border-right: 1px solid #ccc;
    color: #ccc;
  }
  .header-middle {
    display: inline-block;
    font-size: 12px;
    height: 36px;
    line-height: 36px;
    width: 100px;
    display: inline-block;
    text-align: center;
    color: #000;
  }
  .header-text {
    display: inline-block;
    font-size: 10px;
    height: 36px;
    line-height: 36px;
    width: 102px;
    display: inline-block;
    text-align: center;
    color: #666;
  }
  .header-end {
    float: right;
    margin-top: 5px;
    margin-right: 20px;
  }
}
</style>
