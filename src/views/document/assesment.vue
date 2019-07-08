<template>
  <!-- 文书 ==>入院评估单 -->
  <div>
    <el-form :model="patientdetailData" ref="patientdetailData">
      <div class="c-gap-top">
        <!-- <div class="little"></div> -->
        <p>基本资料</p>
        <el-row class="patientdetail-title-main-one">
          <el-col :span="4" :offset="1">
            <span class="patientdetail-title">科室：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="张伟"
              v-model="submitForm.division"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span class="patientdetail-title">床号：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="001"
              v-model="submitForm.bednumber"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span class="patientdetail-title">住院号：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="90821234"
              v-model="submitForm.admissionnumber"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span class="patientdetail-title">入院时间：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="2018-05-25"
              v-model="submitForm.admissiontime"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span class="patientdetail-title">入院诊断：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="累及循环和呼吸系统特指症状和体征"
              v-model="submitForm.admissiondiagnose"
            ></el-input>
          </el-col>
        </el-row>
      </div>

      <div class="c-gap-main">
        <!-- <div class="little"></div> -->
        <p>一般资料</p>
        <el-row class="patientdetail-title-main">
          <el-col :span="4" :offset="1">
            <span class="patientdetail-title">姓名：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="张伟"
              v-model="submitForm.name"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span class="patientdetail-title">性别：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="男"
              v-model="submitForm.sex"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span class="patientdetail-title">年龄：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="55岁"
              v-model="submitForm.age"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span class="patientdetail-title">职业：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="程序员"
              v-model="submitForm.project"
            ></el-input>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :span="4" :offset="1">
            <span class="patientdetail-title">民族：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="汉族"
              v-model="submitForm.nation"
            ></el-input>
          </el-col>
          <el-col :span="4">
            <span class="patientdetail-title">籍贯：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="新疆"
              v-model="submitForm.birthplace"
            ></el-input>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">婚姻状况</span>
            <el-radio v-model="a_radio" label="1" class="el-radio">未婚</el-radio>
            <el-radio v-model="a_radio" label="2" class="el-radio">已婚</el-radio>
            <el-radio v-model="a_radio" label="3" class="el-radio">丧偶</el-radio>
            <el-radio v-model="a_radio" label="4" class="el-radio">离婚</el-radio>
            <el-radio v-model="a_radio" label="5" class="el-radio">其他</el-radio>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">文化程度</span>
            <el-radio v-model="b_radio" label="edu-1" class="el-radio">文盲</el-radio>
            <el-radio v-model="b_radio" label="edu-2" class="el-radio">小学</el-radio>
            <el-radio v-model="b_radio" label="edu-3" class="el-radio">初中</el-radio>
            <el-radio v-model="b_radio" label="edu-4" class="el-radio">高中</el-radio>
            <el-radio v-model="b_radio" label="edu-5" class="el-radio">中专</el-radio>
            <el-radio v-model="b_radio" label="edu-6" class="el-radio">大专</el-radio>
            <el-radio v-model="b_radio" label="edu-7" class="el-radio">本科及以上</el-radio>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">联系电话</span>
            <el-select v-model="value" placeholder="请选择" class="el-radio">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-input
              v-model="submitForm.telinput"
              placeholder="请输入联系电话"
              size="mini"
              class="detail-telinput-mini"
            ></el-input>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">入院处置</span>
            <div class="f0">
              <div class="management">处置</div>
              <div class="unmanagement">未处置</div>
            </div>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">入院方式</span>
            <el-radio v-model="c_radio" label="way-1" class="el-radio">步行</el-radio>
            <el-radio v-model="c_radio" label="way-2" class="el-radio">扶走</el-radio>
            <el-radio v-model="c_radio" label="way-3" class="el-radio">轮椅</el-radio>
            <el-radio v-model="c_radio" label="way-4" class="el-radio">平车</el-radio>
            <el-radio v-model="c_radio" label="way-5" class="el-radio">担架</el-radio>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">入院介绍</span>
            <el-checkbox-group v-model="checkList" class="f1">
              <el-checkbox label="环境"></el-checkbox>
              <el-checkbox label="安全"></el-checkbox>
              <el-checkbox label="饮食"></el-checkbox>
              <el-checkbox label="作息"></el-checkbox>
              <el-checkbox label="探陪"></el-checkbox>
              <el-checkbox label="工作人员" disabled></el-checkbox>
              <el-checkbox label="对症宣教" disabled></el-checkbox>
            </el-checkbox-group>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">过敏史</span>
            <div class="f0" style="margin-left:45px">
              <div class="management">有</div>
              <div class="unmanagement">无</div>
            </div>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">家族史</span>
            <div class="f0" style="margin-left:45px">
              <div class="management">有</div>
              <div class="unmanagement">无</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="c-gap-main" style="height:560px">
        <!-- <div class="little-two"></div> -->
        <p>生活习惯及自理程度</p>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">饮食习惯</span>
            <div class="f0">
              <div class="management">正常</div>
              <div class="unmanagement">异常</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">食欲</span>
            <el-radio v-model="d_radio" label="food-1" class="el-radio" style="margin-left:56px">正常</el-radio>
            <el-radio v-model="d_radio" label="food-2" class="el-radio">亢进</el-radio>
            <el-radio v-model="d_radio" label="food-3" class="el-radio">下降/厌食</el-radio>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">咀嚼困难</span>
            <div class="f0">
              <div class="management">无</div>
              <div class="unmanagement">有</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">吞咽困难</span>
            <div class="f0">
              <div class="management">无</div>
              <div class="unmanagement">有</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main-other">
          <el-col :offset="0.5">
            <span class="patientdetail-title">睡眠</span>
            <div class="f0">
              <div class="management">正常</div>
              <div class="unmanagement-sleep">入睡困难</div>
            </div>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">大便</span>
            <el-radio v-model="e_radio" label="meth-1" class="el-radio" style="margin-left:56px">正常</el-radio>
            <el-radio v-model="e_radio" label="meth-2" class="el-radio">便秘</el-radio>
            <el-radio v-model="e_radio" label="meth-3" class="el-radio">腹泻</el-radio>
            <el-radio v-model="e_radio" label="meth-4" class="el-radio">失禁</el-radio>
            <el-radio v-model="e_radio" label="meth-5" class="el-radio">其他</el-radio>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main-other">
          <el-col :offset="0.5">
            <span class="patientdetail-title">小便</span>
            <div class="f0">
              <div class="management">正常</div>
              <div class="unmanagement">异常</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <div @click="selfAssesment">
              <span class="patientdetail-title">自理能力</span>
              <el-input
                v-model="submitForm.zlnl"
                placeholder="点击选择"
                size="mini"
                class="detail-telinput-mini-zili"
              ></el-input>
            </div>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main-other">
          <el-col :offset="0.5">
            <span class="patientdetail-title">陪护</span>
            <div class="f0">
              <div class="management">无</div>
              <div class="unmanagement">有</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">活动能力</span>
            <el-radio v-model="f_radio" label="pop-1" class="el-radio">自主活动</el-radio>
            <el-radio v-model="f_radio" label="pop-2" class="el-radio">活动受限</el-radio>
            <el-radio v-model="f_radio" label="pop-3" class="el-radio">卧床</el-radio>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">健康意识</span>
            <el-radio v-model="g_radio" label="tx-1" class="el-radio">良好</el-radio>
            <el-radio v-model="g_radio" label="tx-2" class="el-radio">一般</el-radio>
            <el-radio v-model="g_radio" label="tx-3" class="el-radio">差</el-radio>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main-other">
          <el-col :offset="0.5">
            <span class="patientdetail-title">吸烟</span>
            <div class="f0">
              <div class="management">无</div>
              <div class="unmanagement">有</div>
            </div>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main-other">
          <el-col :offset="0.5">
            <span class="patientdetail-title">饮酒</span>
            <div class="f0">
              <div class="management">无</div>
              <div class="unmanagement">有</div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="c-gap-main" style="height:115px">
        <!-- <div class="little-three"></div> -->
        <p>心理与社会</p>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">心理状态</span>
            <el-radio
              v-model="radio"
              label="status-1"
              class="el-radio"
              style="margin-left:56px"
            >情绪稳定</el-radio>
            <el-radio v-model="h_radio" label="status-2" class="el-radio">焦虑</el-radio>
            <el-radio v-model="h_radio" label="status-3" class="el-radio">抑郁</el-radio>
            <el-radio v-model="h_radio" label="status-4" class="el-radio">其他</el-radio>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">社会家庭支持</span>
            <el-radio v-model="i_radio" label="soc-1" class="el-radio">良好</el-radio>
            <el-radio v-model="i_radio" label="soc-2" class="el-radio">有困难</el-radio>
          </el-col>
        </el-row>
      </div>

      <div class="c-gap-main" style="height:488px">
        <!-- <div
          class="little-four"
          style="position: absolute;width: 4px;height: 16px;background: #009ef9;top: 1284px;"
        ></div>-->
        <p>护理体验</p>
        <el-row class="patientdetail-title-main">
          <el-col :span="5" :offset="1">
            <span class="patientdetail-title">体温：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="temIsDeValue"
            ></el-input>
            <p
              style="font-size:10px;color:#f00;background:#fff;height:14px;"
              v-show="tempValueIsDeBad"
            >体温值不在有效范围35~40之间</p>
          </el-col>
          <el-col :span="5" :offset="1">
            <span class="patientdetail-title">脉搏：</span>
            <el-input size="mini" class="detail-input-mini" placeholder="请输入" v-model="mbIsDeValue"></el-input>
            <p
              style="font-size:10px;color:#f00;background:#fff;height:14px;"
              v-show="mbValueIsDeBad"
            >脉搏录入值不在有效范围40-200之间</p>
          </el-col>
          <el-col :span="5" :offset="1">
            <span class="patientdetail-title">呼吸频率：</span>
            <el-input size="mini" class="detail-input-mini" placeholder="请输入" v-model="hxIsDeValue"></el-input>
            <p
              style="font-size:10px;color:#f00;background:#fff;height:14px;"
              v-show="hxValueIsDeBad"
            >呼吸录入值不在有效范围10-50之间</p>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main" style="color:#bbb">
          <el-col :span="5" :offset="1">
            <span class="patientdetail-title">血压：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.signxy"
            ></el-input>/
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.signxyz"
            ></el-input>
          </el-col>
          <el-col :span="5" :offset="1">
            <span class="patientdetail-title">体重:</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.signweight"
              style="margin-left:9px"
            ></el-input>
          </el-col>
          <el-col :span="5" :offset="1">
            <span class="patientdetail-title">身高：</span>
            <el-input
              size="mini"
              class="detail-input-mini"
              placeholder="请输入"
              v-model="submitForm.signhigh"
              style="margin-left:24px"
            ></el-input>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">意识状态</span>
            <el-radio v-model="j_radio" label="ystatus-1" class="el-radio">清醒</el-radio>
            <el-radio v-model="j_radio" label="ystatus-2" class="el-radio">模糊</el-radio>
            <el-radio v-model="j_radio" label="ystatus-3" class="el-radio">谵妄</el-radio>
            <el-radio v-model="j_radio" label="ystatus-4" class="el-radio">嗜睡</el-radio>
            <el-radio v-model="j_radio" label="ystatus-4" class="el-radio">昏睡</el-radio>
            <el-radio v-model="j_radio" label="ystatus-4" class="el-radio">昏迷</el-radio>
          </el-col>
        </el-row>

        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">表情</span>
            <el-radio v-model="k_radio" label="bq-1" class="el-radio" style="margin-left:56px">正常</el-radio>
            <el-radio v-model="l_radio" label="bq-2" class="el-radio">淡漠</el-radio>
            <el-radio v-model="l_radio" label="bq-3" class="el-radio">痛苦</el-radio>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">瞳孔</span>
            <el-radio v-model="m_radio" label="tk-1" class="el-radio" style="margin-left:56px">左、右等大</el-radio>
            <el-radio v-model="n_radio" label="tk-2" class="el-radio">不等大</el-radio>
            <el-radio v-model="n_radio" label="tk-3" class="el-radio">散大</el-radio>
            <el-radio v-model="n_radio" label="tk-4" class="el-radio">缩小</el-radio>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main">
          <el-col :offset="0.5">
            <span class="patientdetail-title">对光反射</span>
            <el-radio v-model="o_radio" label="fs-1" class="el-radio">存在</el-radio>
            <el-radio v-model="o_radio" label="fs-2" class="el-radio">迟钝</el-radio>
            <el-radio v-model="o_radio" label="fs-3" class="el-radio">消失</el-radio>
          </el-col>
        </el-row>
        <el-row class="patientdetail-title-main-other">
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
            <div @click="bradenAssesment">
              <span class="patientdetail-title">Braden评估</span>
              <el-input
                v-model="telinput"
                placeholder="点击选择"
                size="mini"
                class="detail-telinput-mini-zili"
                style="margin-left:16px"
              ></el-input>
            </div>
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
        </el-row>
        <el-row class="patientdetail-title-main">
          <div class="footer">
            <el-button
              round
              size="mini"
              class="assesment-save"
              :plain="true"
              @click="sendMsgToParentZ"
              style="margin-left:500px;display:inline-block"
            >保存</el-button>
            <el-button
              type="primary"
              round
              size="mini"
              :disabled="saveassesmentable"
              class="assesment-save-update"
              @click="sendMsgToParentB"
              style="margin-left:50px;display:inline-block"
            >保存并生成护理计划</el-button>
          </div>
        </el-row>
      </div>
    </el-form>

    <el-dialog :visible.sync="dialogBradenFormVisible">
      <div>
        <p
          class="methods"
          style="background:#E4E4E4;height:30px;line-height:30px;text-indent:10px;position:relative;z-index:10"
        >压疮危险因素评估-Braden 3分</p>
        <el-form :model="form" style="position:relative;top:-14px">
          <el-row>
            <el-table
              :data="bradenTableData"
              border
              style="width: 100%;user-select:none;"
              @cell-click="handle"
              @cell-dblclick="dbhandle"
            >
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

    <el-dialog :visible.sync="dialogSelfFormVisible">
      <div>
        <p
          class="methods"
          style="background:#E4E4E4;height:30px;line-height:30px;text-indent:10px;position:relative;z-index:10"
        >Barther评定量表 -- 20分 重度依赖</p>
        <el-form :model="form" style="position:relative;top:-14px">
          <el-row>
            <el-table
              :data="selfTableData"
              border
              style="width: 100%;user-select:none;"
              @cell-click="handle"
              @cell-dblclick="dbhandle"
            >
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
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      count2: 1,
      temIsDeValue: "",
      mbIsDeValue: "",
      hxIsDeValue: "",
      tempValueIsDeBad: false,
      mbValueIsDeBad: false,
      hxValueIsDeBad: false,
      saveassesmentable: true,
      radio: "",
      patientdetailData: {},
      dialogBradenFormVisible: false,
      dialogSelfFormVisible: false,
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
        birthplace: "",
        signhigh: "",
        signweight: "",
        signxyz: "",
        signxy: "",
        signhx: "",
        signmb: "",
        sightemp: "",
        zlnl: "",
        telinput: ""
      },
      a_radio: "1",
      b_radio: "2",
      c_radio: "1",
      d_radio: "3",
      e_radio: "1",
      f_radio: "2",
      g_radio: "4",
      h_radio: "2",
      i_radio: "3",
      j_radio: "1",
      k_radio: "2",
      l_radio: "1",
      m_radio: "2",
      n_radio: "1",
      o_radio: "2",

      options: [
        {
          value: "选项1",
          label: "患者本人"
        },
        {
          value: "选项2",
          label: "患者配偶"
        },
        {
          value: "选项3",
          label: "患者家人"
        },
        {
          value: "选项4",
          label: "患者朋友"
        },
        {
          value: "选项5",
          label: "患者同事"
        }
      ],
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
      value: "",
      telinput: "",
      checkList: ["选中且禁用", "复选框 A"]
    };
  },

  mounted() {},

  methods: {
    handle(row, column, event, cell) {
      console.log(row);
      console.log(column);
      console.log(cell);
      console.log(event);
      let trl = event;
      trl.style.background = "#FFC963";
      // if ((trl.style.background = "")) {
      //   trl.style.background = "#FFC963";
      //   // return;
      // }
      // if ((trl.style.background = "#FFC963")) {
      //   trl.style.background = "#fff";
      //   // return;
      // }
    },
    dbhandle(row, column, event, cell) {
      console.log(90);
      let trl = event;
      trl.style.background = "#fff";
      // trl.style.background = "#00f";
      // if ((trl.style.background = "#FFC963")) {
      // trl.style.background = "#fff";
      // return;
      // }
    },
    sendMsgToParentZ() {
      // this.$message("保存成功");
      if (this.temIsDeValue < 35 || this.temIsDeValue > 40) {
        this.tempValueIsDeBad = true;
        // console.log(0)
        // this.$message.error("请输入合理的体温值");
      } else {
        this.count2 += 1;

        this.tempValueIsDeBad = false;
        // this.$message("保存成功");
        this.saveassesmentable = false;
        // console.log(9)
      }

      if (this.mbIsDeValue < 40 || this.mbIsDeValue > 200) {
        this.mbValueIsDeBad = true;
        // console.log(0)
        // this.$message.error("请输入合理的脉搏值");
      } else {
        this.count2 += 1;

        this.mbValueIsDeBad = false;
        // this.$message("保存成功");
        this.saveassesmentable = false;
        // console.log(9)
      }
      if (this.hxIsDeValue < 10 || this.hxIsDeValue > 50) {
        this.hxValueIsDeBad = true;
        // console.log(0)
        // this.$message.error("请输入合理的呼吸值");
      } else {
        this.count2 += 1;
        this.hxValueIsDeBad = false;
        // this.$message("保存成功");
        this.saveassesmentable = false;
        // console.log(9)
      }
      if (this.count2 >= 4) {
        // this.$message("保存成功");
      } else {
        // this.$message.error("请输入合理的值");
      }
    },
    sendMsgToParentB() {
      this.$message("保存并生成护理计划成功");
      this.saveassesmentable = true;
    },
    bradenAssesment() {
      this.dialogBradenFormVisible = true;
      console.log(333);
    },
    selfAssesment() {
      this.dialogSelfFormVisible = true;
      console.log(444);
    }
  }
};
</script>

<style type="text/css" lang="scss" >
.el-input {
  font-size: 12px;
}
.el-select > .el-input {
  display: block;
  width: 100px;
  height: 38px;
}
.detail-input-mini {
  width: 100px !important;
}
.c-gap-top {
  width: 99%;
  height: 70px;
  border: 1px solid #d7d7d7;
  .little {
    position: absolute;
    width: 4px;
    height: 16px;
    background: #009ef9;
    top: 6px;
  }
  p {
    font-size: 14px;
    padding-left: 10px;
    background: rgb(255, 243, 230);
    height: 25px;
    line-height: 25px;
  }
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
    background: rgb(255, 243, 230) !important;
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
.f0 {
  font-size: 0;
  margin-left: 32px;
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
.f1 {
  margin-left: 32px;
  display: inline-block;
}

.el-radio__label {
  font-size: 12px !important;
  padding-left: 10px;
}
.el-input__inner {
  height: 27px;
}
.el-input__icon {
  line-height: 50px;
}
// .assesment-save {
//   position: fixed;
//   bottom: 20px;
//   left: 40%;
// }
// .assesment-save-update {
//   position: fixed;
//   bottom: 20px;
//   right: 40%;
// }
.little-two {
  position: absolute;
  width: 4px;
  height: 16px;
  background: #009ef9;
  top: 576px;
}
.little-three {
  position: absolute;
  width: 4px;
  height: 16px;
  background: #009ef9;
  top: 1153px;
}

.unmanagement-sleep {
  line-height: 20px;
  text-align: center;
  display: inline-block;
  width: 54px;
  height: 20px;
  border-radius: 5px;
  background: #ffcc66;
  font-size: 12px;
}
.detail-telinput-mini-zili {
  width: 200px !important;
  margin-left: 32px;
}
.patientdetail-title-main-one {
  padding: 9px;
  span {
    font-size: 12px;
    color: #666;
  }
}
.el-radio__input.is-checked + .el-radio__label {
  color: #ffc963;
}
.el-radio__input.is-checked .el-radio__inner {
  border-color: #ccc;
  background: #ffc963;
}
.el-checkbox__input.is-checked + .el-checkbox__label {
  color: #ffc963;
}
.el-checkbox__input.is-checked .el-checkbox__inner,
.el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background-color: #ffc963;
  border-color: #ccc;
}
.el-button {
  padding: 6px 10px;
  border: 1px solid #ccc !important;
}
.el-button--primary.is-disabled,
.el-button--primary.is-disabled:active,
.el-button--primary.is-disabled:focus,
.el-button--primary.is-disabled:hover {
  color: #fff;
  background-color: #ffc963;
  border-color: #ccc;
}
// .el-input__icon {
//   line-height: 0px !important;
// }
</style>
