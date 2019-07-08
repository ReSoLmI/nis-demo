<template>
  <!-- 护理 ==>添加护理记录 -->
  <div class="adddayassesment">
    <el-form :model="submitForm" :rules="rules" ref="submitForm">
      <div class="header" style="background:#FFF3E6">
        <div class="dration" @click="closeadddayassesment"><</div>
        <div class="header-middle">一般护理记录单</div>
        <div class="header-text">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;001床&nbsp;&nbsp;&nbsp;&nbsp;张伟</div>
        <div class="header-end">
          <el-button size="mini" class="adddayassesment-save" :plain="true" @click="save">保存</el-button>
          <el-button
            type="primary"
            :plain="true"
            size="mini"
            class="adddayassesment-save-update"
            @click="saveplan"
            style="background:#fff;color:#FFC963"
          >保存并生成护理计划</el-button>
        </div>
      </div>
      <div class="c-gap-main c-gap-main-n">
        <div class="little-four"></div>
        <p>基本资料</p>
        <el-row class="patientdetail-title-main">
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">姓名：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a1"
            ></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">床号：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a2"
            ></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">性别：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a3"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">年龄：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a4"
            ></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">住院号：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a5"
            ></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">科室：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a6"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">护理级别：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a7"
            ></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">入院诊断：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a8"
            ></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">入院时间：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.a9"
            ></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="c-gap-main c-gap-main-n">
        <div class="little-four"></div>
        <p>生命体征</p>
        <el-row class="patientdetail-title-main">
          <el-col :span="6" :offset="1">
            <div>
              <!-- <span class="patientdetail-title patientdetail-title-n">体温：</span>  -->
              <el-form-item label="体温：" prop="b1">
                <el-input size="mini" class="detail-input-mini" placeholder v-model="submitForm.b1">
                  <span slot="suffix" class="el-input-icon">℃</span>
                </el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">血压：</span>
            <el-input size="mini" class="detail-input-mini" placeholder v-model="submitForm.b2">
              <span slot="suffix" class="el-input-icon">mmHg</span>
            </el-input>/
            <el-input size="mini" class="detail-input-mini" placeholder v-model="submitForm.b3">
              <span slot="suffix" class="el-input-icon">mmHg</span>
            </el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-form-item label="脉搏：" prop="b4">
              <el-input size="mini" class="detail-input-mini" placeholder v-model="submitForm.b4">
                <span slot="suffix" class="el-input-icon">次/分钟</span>
              </el-input>
            </el-form-item>
            <!-- <span class="patientdetail-title patientdetail-title-n">脉搏：</span> -->
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :span="6" :offset="1">
            <!-- <span class="patientdetail-title patientdetail-title-n">呼吸：</span> -->
            <el-form-item label="呼吸：" prop="b5">
              <el-input size="mini" class="detail-input-mini" placeholder v-model="submitForm.b5">
                <span slot="suffix" class="el-input-icon">次/分钟</span>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6" :offset="1">
            <div>
              <!-- <span class="patientdetail-title patientdetail-title-n">心率：</span> -->
              <el-form-item label="心率：" prop="b6">
                <el-input size="mini" class="detail-input-mini" placeholder v-model="submitForm.b6">
                  <span slot="suffix" class="el-input-icon">次/分钟</span>
                </el-input>
              </el-form-item>
            </div>
          </el-col>
          <el-col :span="6" :offset="1">
            <div>
              <span class="patientdetail-title patientdetail-title-n">Sp02：</span>
              <el-input size="mini" class="detail-input-mini" placeholder v-model="submitForm.b7">
                <span slot="suffix" class="el-input-icon">%</span>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="c-gap-main c-gap-main-n">
        <div class="little-four"></div>
        <p>常用评分</p>
        <el-row class="patientdetail-title-main">
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">疼痛评估：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.c1"
            ></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">压疮评估：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.c2"
            ></el-input>
          </el-col>
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">跌倒评估：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.c3"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :span="6" :offset="1">
            <span class="patientdetail-title patientdetail-title-n">营养评估：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.c4"
            ></el-input>
          </el-col>
        </el-row>
      </div>
      <div class="c-gap-main c-gap-main-n" style="height:260px !important;">
        <div class="little-four"></div>
        <p>其它</p>
        <el-row class="patientdetail-title-main-other">
          <el-col :offset="1">
            <span class="patientdetail-title patientdetail-title-n">心血管系统</span>
            <el-checkbox-group v-model="submitForm.checkList1" class="el-checkbox-group-n">
              <el-checkbox label="完整"></el-checkbox>
              <el-checkbox label="红臀"></el-checkbox>
              <el-checkbox label="湿疹"></el-checkbox>
              <el-checkbox label="皮疹"></el-checkbox>
              <el-checkbox label="糜烂"></el-checkbox>
              <el-checkbox label="出血"></el-checkbox>
              <el-checkbox label="其它"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main-other">
          <el-col :offset="1">
            <span class="patientdetail-title patientdetail-title-n">心血管系统</span>
            <el-checkbox-group v-model="submitForm.checkList2" class="el-checkbox-group-n">
              <el-checkbox label="正常"></el-checkbox>
              <el-checkbox label="镇静状态"></el-checkbox>
              <el-checkbox label="意识模糊"></el-checkbox>
              <el-checkbox label="烦躁"></el-checkbox>
              <el-checkbox label="嗜睡"></el-checkbox>
              <el-checkbox label="昏迷"></el-checkbox>
              <el-checkbox label="昏睡"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main-other">
          <el-col :offset="1">
            <span class="patientdetail-title patientdetail-title-n">伤口</span>
            <el-checkbox-group v-model="submitForm.checkList3" class="el-checkbox-group-n">
              <el-checkbox label="无渗血渗液"></el-checkbox>
              <el-checkbox label="有渗液"></el-checkbox>
              <el-checkbox label="有渗血渗液"></el-checkbox>
              <el-checkbox label="有渗血"></el-checkbox>
              <el-checkbox label="糜烂"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main-other">
          <el-col :offset="1">
            <span class="patientdetail-title patientdetail-title-n">氧疗方式</span>
            <el-checkbox-group v-model="submitForm.checkList4" class="el-checkbox-group-n">
              <el-checkbox label="鼻导管"></el-checkbox>
              <el-checkbox label="面罩"></el-checkbox>
              <el-checkbox label="头罩"></el-checkbox>
              <el-checkbox label="CPAP"></el-checkbox>
              <el-checkbox label="机械通气"></el-checkbox>
              <el-checkbox label="球囊加压"></el-checkbox>
              <el-checkbox label="高流量吸氧"></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>
      </div>

      <!-- <transition name="bounce">
        <addsecond
          v-show="isTShow"
          @clickEvent="isTShow = false"
          class="add-position"
          style="margin-left: 8px;position:absolute;z-index: 100000;width: 1266px !important;height:830px !important;"
        ></addsecond>
      </transition>-->
    </el-form>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
// import nursingproblem from "./nursingproblem.vue";
// import addsecond from "./addsecond.vue";

export default {
  components: {
    // nursingproblem
    // addsecond
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
      // isTShow: false,
      dialogPainFormVisible: false,
      dialogBradenFormVisible: false,
      dialogFallFormVisible: false,
      dialogSelfFormVisible: false,
      radio: "1",
      telinput: "",
      submitForm: {
        b1: "",
        b4: "",
        b5: "",
        b6: "",
        checkList1: [],
        checkList2: [],
        checkList3: [],
        checkList4: []
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
      planList: {}
    };
  },
  watch: {
    "submitForm.b1": function(val) {
      console.log(val);
    }
  },
  mounted() {},
  methods: {
    saveplan() {
      let _self = this;
      // _self.isTShow = !_self.isTShow;
      _self.$refs["submitForm"].validate(valid => {
        if (valid) {
          _self.$emit("clickevent");
          // _self.$emit("clickEvent");
          _self.$message("保存并生成护理计划成功");
          axios.get("/api/temperatureMock").then(res => {
            console.log(res.data);
            _self.planList = res.data;
            console.log(_self.planList);
          });
        } else {
          return false;
        }
      });
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
.adddayassesment {
  width: 1266px;
  height: 800px;
  // background: #ff0;
  border: 1px solid #000;
  background: #fff;
  overflow: scroll;
}
.c-gap-main {
  margin-top: 15px;
  width: 99%;
  height: 466px;
  border: 1px solid #d7d7d7;
  // background: #009ef9;
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
  // margin-bottom: 10px;
  background: #e8f7ff;
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
    // border-right: 1px solid #ccc;
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
    // border-right: 1px solid #ccc;
    color: #666;
  }
  .header-end {
    float: right;
    margin-top: 5px;
    margin-right: 20px;
  }
}
</style>
