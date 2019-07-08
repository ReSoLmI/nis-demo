<template>
  <!-- 护理 ==>护理问题（暂未用） -->
  <div class="adddayassesment">
    <div class="header">
      <div class="dration" @click="closeadddayassesment"><</div>
      <div class="header-middle">每日评估单</div>
      <div class="header-text">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;001床&nbsp;&nbsp;&nbsp;&nbsp;张伟</div>
      <div class="header-end">
        <el-button size="mini" plain class="adddayassesment-save" :plain="true" @click="save">保存</el-button>
        <el-button
          type="primary"
          :plain="true"
          size="mini"
          class="adddayassesment-save-update"
          @click="saveplan"
        >保存并生成护理计划</el-button>
      </div>
    </div>
    <div class="c-gap-main" style="height:162px">
      <div class="little-four"></div>
      <p>生命体征</p>
      <el-row class="patientdetail-title-main" style="color:#bbb">
        <el-col :span="4" :offset="1">
          <span class="patientdetail-title">体温：</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.nation"
          ></el-input>
        </el-col>
        <el-col :span="8" :offset="1">
          <span class="patientdetail-title">血压：</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.nation"
          ></el-input>/
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.nation"
          ></el-input>
        </el-col>
        <el-col :span="5" :offset="1">
          <span class="patientdetail-title">脉搏：</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.birthplace"
          ></el-input>
        </el-col>
      </el-row>

      <el-row class="patientdetail-title-main" style="color:#bbb">
        <el-col :span="4" :offset="1">
          <span class="patientdetail-title">呼吸:</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.birthplace"
            style="margin-left: 10px;"
          ></el-input>
        </el-col>
        <el-col :span="8" :offset="1">
          <span class="patientdetail-title">疼痛:</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.birthplace"
            style="margin-left: 10px;"
          ></el-input>
        </el-col>
        <el-col :span="5" :offset="1">
          <span class="patientdetail-title">体重:</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.birthplace"
            style="margin-left:9px"
          ></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="5" :offset="1">
          <span class="patientdetail-title" style="font-size: 12px;
    color: #666;">身高：</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.birthplace"
            style="margin-left: 9px;"
          ></el-input>
        </el-col>
      </el-row>

      <!-- <el-row class="patientdetail-title-main-other">
        <el-col :offset="0.5">
          <span class="patientdetail-title">皮肤黏膜</span>
          <div class="f0" style="margin-left:32px">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
      <el-row class="patientdetail-title-main-other">
        <el-col :offset="0.5">
          <span class="patientdetail-title">口腔</span>
          <div class="f0">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
      <el-row class="patientdetail-title-main">
        <el-col :offset="0.5">
          <span class="patientdetail-title">Braden评估</span>
          <el-input
            v-model="telinput"
            placeholder="点击选择"
            size="mini"
            class="detail-telinput-mini-zili"
            style="margin-left:16px"
          ></el-input>
        </el-col>
      </el-row>
      <el-row class="patientdetail-title-main-other">
        <el-col :offset="0.5">
          <span class="patientdetail-title">伤口情况</span>
          <div class="f0" style="margin-left:32px">
            <div class="management">无</div>
            <div class="unmanagement">有</div>
          </div>
        </el-col>
      </el-row>-->
    </div>

    <div class="c-gap-main" style="height:128px">
      <div class="little-four"></div>
      <p>常用评估</p>
      <el-row class="patientdetail-title-main" style="color:#bbb">
        <el-col :span="5" :offset="1">
          <div @click="painAssesment">
            <span class="patientdetail-title">疼痛评估：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="5"
              v-model="submitForm.nation"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="5" :offset="1">
          <div @click="bradenAssesment">
            <span class="patientdetail-title">压疮评估：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="3"
              v-model="submitForm.nation"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="5" :offset="1">
          <div @click="fallAssesment">
            <span class="patientdetail-title">跌倒评估：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="4"
              v-model="submitForm.birthplace"
            ></el-input>
          </div>
        </el-col>
      </el-row>

      <el-row class="patientdetail-title-main" style="color:#bbb">
        <el-col :span="5" :offset="1">
          <span class="patientdetail-title">营养评估:</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.birthplace"
            style="margin-left: 10px;"
          ></el-input>
        </el-col>
        <el-col :span="5" :offset="1">
          <div @click="selfAssesment">
            <span class="patientdetail-title">自理能力:</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.birthplace"
              style="margin-left: 10px;"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>精神系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">精神系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>心血管系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">心血管系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>血液系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">血液系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>呼吸系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">呼吸系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>消化系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">消化系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>感觉语言系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">感觉语言系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>内分泌代谢系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">内分泌代谢系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>生殖生育系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">生殖生育系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>泌尿系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">泌尿系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>骨骼肌肉运动系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">骨骼肌肉运动系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>皮肤系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">皮肤系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>精神心里系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">精神心里系统</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>活动与参与</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">活动与参与</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>环境心里</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">环境心里</span>
          <div class="f0" style="margin-left:32px  ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:84px">
      <div class="little-four"></div>
      <p>其他</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">其他</span>
          <div class="f0" style="margin-left:32px ;float:right">
            <div class="management">正常</div>
            <div class="unmanagement">异常</div>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-dialog title="痛苦评分" :visible.sync="dialogPainFormVisible">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth">
          <!-- <p
            class="methods"
            style="background:#E4E4E4;height:30px;line-height:30px;text-indent:10px;"
          >数字评分法NRS</p>-->
        </el-form-item>
        <el-form-item :label-width="formLabelWidth"></el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogPainFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogPainFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogBradenFormVisible">
      <div>
        <p
          class="methods"
          style="background:#E4E4E4;height:30px;line-height:30px;text-indent:10px;position:relative;z-index:10"
        >压疮危险因素评估-Braden 3分</p>
        <el-form :model="form" style="position:relative;top:-14px">
          <el-row>
            <el-table :data="bradenTableData" border style="width: 100%">
              <el-table-column prop="date" label="日期时间"></el-table-column>
              <el-table-column prop="name" label="评估人"></el-table-column>
              <el-table-column prop="tem" label="体温"></el-table-column>
              <el-table-column prop="bloodpressure" label="血压"></el-table-column>
              <el-table-column prop="pulse" label="脉搏"></el-table-column>
            </el-table>
          </el-row>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogBradenFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogBradenFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog title="跌倒评分" :visible.sync="dialogFallFormVisible">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth"></el-form-item>
        <el-form-item :label-width="formLabelWidth"></el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFallFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFallFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog :visible.sync="dialogSelfFormVisible">
      <div>
        <p
          class="methods"
          style="background:#E4E4E4;height:30px;line-height:30px;text-indent:10px;position:relative;z-index:10"
        >Barther评定量表 -- 20分 重度依赖</p>
        <el-form :model="form" style="position:relative;top:-14px">
          <el-row>
            <el-table :data="selfTableData" border style="width: 100%">
              <el-table-column prop="date" label="日期时间"></el-table-column>
              <el-table-column prop="name" label="评估人"></el-table-column>
              <el-table-column prop="tem" label="体温"></el-table-column>
              <el-table-column prop="bloodpressure" label="血压"></el-table-column>
              <el-table-column prop="pulse" label="脉搏"></el-table-column>
            </el-table>
          </el-row>
        </el-form>
      </div>
      <div slot="footer" class="dialog-footer" style="position:relative;top:-39px">
        <el-button @click="dialogSelfFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogSelfFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <!--
    <transition name="bounce">
      <nursingproblem
        v-show="isnpShow"
        @clickEvent="isnpShow=false"
        style="margin-top: -240px;margin-left:0px;position:relative;z-index:1000000;"
      ></nursingproblem>
    </transition>-->
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
// import nursingproblem from "./nursingproblem.vue";

export default {
  components: {
    // nursingproblem
  },
  data() {
    return {
      // isnpShow: false,
      dialogPainFormVisible: false,
      dialogBradenFormVisible: false,
      dialogFallFormVisible: false,
      dialogSelfFormVisible: false,
      radio: "1",
      telinput: "",
      submitForm: {
        division: "",
        bednumber: "",
        admissionnumber: "",
        admissiontime: "",
        admissiondiagnose: "",
        name: "",
        sex: "",
        age: "",
        project: "",
        nation: "",
        birthplace: ""
      },
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      rulesoptions: [
        {
          value: "选项1",
          label: "数字评分法NRS"
        },
        {
          value: "选项2",
          label: "表情量表法FRS-R"
        },
        {
          value: "选项3",
          label: "语言描述法DPIS"
        },
        {
          value: "选项4",
          label: "疼痛行为量表法FLACC"
        },
        {
          value: "选项5",
          label: "重症监护疼痛观察工具"
        }
      ],
      value: "",
      selfTableData: [
        {
          date: "进食",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "洗澡",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "修饰",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "修饰",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "修饰",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "进食",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "洗澡",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "修饰",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "修饰",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        },
        {
          date: "修饰",
          name: "完全依赖（0分）",
          tem: "需要极大帮助（0分）",
          bloodpressure: "需要部分帮助（5分）",
          pulse: "完全独立（5分）"
        }
      ],
      bradenTableData: [
        {
          date: "   ",
          name: "1分",
          tem: "2分",
          bloodpressure: "3分",
          pulse: "4分"
        },
        {
          date: "感觉",
          name: "完全受限",
          tem: "非常受限",
          bloodpressure: "轻度受限",
          pulse: "为受损害"
        },
        {
          date: "潮湿",
          name: "持久潮湿",
          tem: "非常潮湿",
          bloodpressure: "偶尔潮湿",
          pulse: "很少潮湿"
        },
        {
          date: "活动",
          name: "卧床不起",
          tem: "局限于椅",
          bloodpressure: "偶尔步行",
          pulse: "经常行走"
        },
        {
          date: "移动",
          name: "完全不能",
          tem: "极大受限",
          bloodpressure: "轻度受限",
          pulse: "不受限"
        },
        {
          date: "营养",
          name: "非常差",
          tem: "可能不足",
          bloodpressure: "适当",
          pulse: "良好"
        },
        {
          date: "摩擦和剪切力",
          name: "有问题",
          tem: "有潜在问题",
          bloodpressure: "无明显问题",
          pulse: "   "
        }
      ],
      planList: {}
    };
  },

  mounted() {},

  methods: {
    saveplan() {
      // this.isnpShow = !this.isnpShow;
      this.$emit("clickevent");
      this.$emit("clickEvent");
      this.$message("保存并生成护理计划成功");
      axios.get("/api/temperatureMock").then(res => {
        console.log(res.data);
        this.planList = res.data;
        console.log(this.planList);
      });
    },
    save() {
      this.$message("保存成功");
    },
    closeadddayassesment() {
      this.$emit("clickevent");
    },
    painAssesment() {
      this.dialogPainFormVisible = true;
      console.log(222);
    },
    bradenAssesment() {
      this.dialogBradenFormVisible = true;
      console.log(333);
    },
    fallAssesment() {
      this.dialogFallFormVisible = true;
      console.log(444);
    },
    selfAssesment() {
      this.dialogSelfFormVisible = true;
      console.log(444);
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
  // height: 466px;
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
        border-radius: 5px;
        background: #f2f2f2;
        font-size: 12px;
      }
      .unmanagement {
        line-height: 20px;
        text-align: center;
        display: inline-block;
        width: 40px;
        height: 20px;
        border-radius: 5px;
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
  background: rgb(255, 224, 162);
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
