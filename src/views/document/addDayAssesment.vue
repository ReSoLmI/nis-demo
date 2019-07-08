<template>
  <!-- 文书 ==>增加每日评估单 -->
  <div class="adddayassesment">
    <div class="header" style="background:rgb(255, 243, 230)">
      <div class="dration" @click="closeadddayassesment"><</div>
      <div class="header-middle">每日评估单</div>
      <div class="header-text">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;001床&nbsp;&nbsp;&nbsp;&nbsp;张伟</div>
      <div class="header-end">
        <el-button size="mini" plain class="adddayassesment-save" :plain="true" @click="save">保存</el-button>
        <el-button
          type="primary"
          :plain="true"
          size="mini"
          :disabled="saveplanable"
          class="adddayassesment-save-update"
          @click="saveplan"
          style="background:#fff;color:#FFC963"
        >保存并生成护理计划</el-button>
      </div>
    </div>
    <div class="c-gap-main" style="height:180px">
      <div class="little-four"></div>
      <p>生命体征</p>
      <el-row class="patientdetail-title-main" style="color:#bbb">
        <el-col :span="4" :offset="1">
          <span class="patientdetail-title">体温：</span>
          <el-input size="mini" class="detail-input-mini" placeholder="请输入" v-model="temIsValue"></el-input>
          <p
            style="font-size:10px;color:#f00;background:#fff !important;height:14px;"
            v-show="tempValueIsBad"
          >体温值不在有效范围35~40之间</p>
        </el-col>
        <el-col :span="8" :offset="1">
          <span class="patientdetail-title">血压：</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.xyhigh"
          ></el-input>/
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.xylow"
          ></el-input>
        </el-col>
        <el-col :span="5" :offset="1">
          <span class="patientdetail-title">脉搏：</span>
          <el-input size="mini" class="detail-input-mini" placeholder="请输入" v-model="mbIsValue"></el-input>
          <p
            style="font-size:10px;color:#f00;background:#fff !important;height:14px;"
            v-show="mbValueIsBad"
          >脉搏录入值不在有效范围40~200之间</p>
        </el-col>
      </el-row>

      <el-row class="patientdetail-title-main" style="color:#bbb">
        <el-col :span="4" :offset="1">
          <span class="patientdetail-title">呼吸:</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="hxIsValue"
            style="margin-left: 10px;"
          ></el-input>
          <p
            style="font-size:10px;color:#f00;background:#fff !important;height:14px;"
            v-show="hxValueIsBad"
          >呼吸录入值不在有效范围10~50之间</p>
        </el-col>
        <el-col :span="8" :offset="1">
          <span class="patientdetail-title">疼痛:</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.tt"
            style="margin-left: 10px;"
          ></el-input>
        </el-col>
        <el-col :span="5" :offset="1">
          <span class="patientdetail-title">体重:</span>
          <el-input
            size="mini"
            class="detail-input-mini"
            placeholder="请输入"
            v-model="submitForm.tz"
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
            v-model="submitForm.sg"
            style="margin-left: 9px;"
          ></el-input>
        </el-col>
      </el-row>
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
              v-model="submitForm.painassesment"
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
              v-model="submitForm.bradenassesment"
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
              v-model="submitForm.fallassesment"
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
            v-model="submitForm.xya"
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
              v-model="submitForm.selfassesment"
              style="margin-left: 10px;"
            ></el-input>
          </div>
        </el-col>
      </el-row>
    </div>

    <div class="c-gap-main" style="height:auto;">
      <div class="little-four"></div>
      <p>精神系统</p>
      <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">精神系统</span>
          <div
            class="f0"
            style="margin-left:32px;float:right;padding-bottom:20px;user-select:none;"
            @click="changeStatus"
          >
            <div id="jsm-id" class="jsunmanagement">正常</div>
            <div id="jsunm-id" class="jsmanagement">异常</div>
          </div>
        </el-col>
        <div style="height:656px;border:1px solid #ccc;margin-top:33px;" v-if="jssystemShow">
          <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
            <el-col :offset="0.5" :span="7">
              <div style="width:1000px;border-bottom:1px solid #ccc;">
                <span class="patientdetail-title">精神系统</span>
                <div class="f0" style="margin-left:32px;padding-bottom:20px;user-select:none;">
                  <div class="management">正常</div>
                  <div class="unmanagement">异常</div>
                </div>
                <div
                  id="jsm-save"
                  style="width:50px;height:25px;border-radius:10px;margin-left:400px;font-size:12px;display:inline-block;border:1px solid #ccc;line-height:25px;text-align:center; background:#ffcc66"
                  @click="jsmSave"
                >保存</div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:100px;margin-top:10px;border-bottom:1px solid #ccc;padding-bottom:20px;"
              >
                <span class="patientdetail-title">异常项</span>
                <el-checkbox-group v-model="checkList" class="f1">
                  <el-checkbox label="意识"></el-checkbox>
                  <el-checkbox label="抽搐"></el-checkbox>
                  <el-checkbox label="肢体震颤"></el-checkbox>
                  <el-checkbox label="眩晕"></el-checkbox>
                  <el-checkbox label="颈项强直"></el-checkbox>
                  <el-checkbox label="颅内压增高"></el-checkbox>
                  <el-checkbox label="认知"></el-checkbox>
                  <el-checkbox label="局部感觉"></el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:170px;margin-top:20px;border-bottom:1px solid #ccc;padding-bottom:20px;"
              >
                <span class="patientdetail-title">意识</span>
                <el-radio v-model="j_radio" label="ystatus-1" class="el-radio">清醒</el-radio>
                <el-radio v-model="j_radio" label="ystatus-2" class="el-radio">模糊</el-radio>
                <el-radio v-model="j_radio" label="ystatus-3" class="el-radio">谵妄</el-radio>
                <el-radio v-model="j_radio" label="ystatus-4" class="el-radio">嗜睡</el-radio>
                <el-radio v-model="j_radio" label="ystatus-4" class="el-radio">昏睡</el-radio>
                <el-radio v-model="j_radio" label="ystatus-4" class="el-radio">昏迷</el-radio>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:170px;margin-top:10px;border-bottom:1px solid #ccc;padding-bottom:10px;"
              >
                <span class="patientdetail-title">抽搐部位</span>
                <el-input
                  size="mini"
                  class="detail-input-mini"
                  placeholder="请输入"
                  v-model="submitForm.division"
                ></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:170px;margin-top:10px;border-bottom:1px solid #ccc;padding-bottom:10px;"
              >
                <span class="patientdetail-title">肢体震颤部位</span>
                <el-input
                  size="mini"
                  class="detail-input-mini"
                  placeholder="请输入"
                  v-model="submitForm.division"
                ></el-input>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div style="width:1000px;margin-left:170px;margin-top:10px;padding-bottom:10px;">
                <p class="patientdetail-title" style="background:#fff;padding-bottom:10px;">认知</p>
                <span class="patientdetail-title">子主题</span>
                <el-radio v-model="z_radio" label="ystatus-1" class="el-radio">轻度认知功能障碍</el-radio>
                <el-radio v-model="z_radio" label="ystatus-2" class="el-radio">痴呆</el-radio>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div style="width:1000px;margin-left:170px;margin-top:10px;padding-bottom:10px;">
                <span class="patientdetail-title">子主题</span>
                <el-checkbox-group v-model="checkList" class="f1">
                  <el-checkbox label="记忆力障碍"></el-checkbox>
                  <el-checkbox label="视空间障碍"></el-checkbox>
                  <el-checkbox label="执行功能障碍"></el-checkbox>
                  <el-checkbox label="计算力障碍"></el-checkbox>
                  <el-checkbox label="失语"></el-checkbox>
                  <el-checkbox label="失用"></el-checkbox>
                  <el-checkbox label="失认"></el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:170px;margin-top:10px;padding-bottom:10px;border-bottom:1px solid #ccc;"
              >
                <span class="patientdetail-title">子主题</span>
                <el-checkbox-group v-model="checkList" class="f1">
                  <el-checkbox label="妄想"></el-checkbox>
                  <el-checkbox label="幻觉"></el-checkbox>
                  <el-checkbox label="否认身体结构功能变化"></el-checkbox>
                  <el-checkbox label="不能区分自我和非我"></el-checkbox>
                  <el-checkbox label="自我否定"></el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div style="width:1000px;margin-left:170px;margin-top:10px;padding-bottom:10px;">
                <span class="patientdetail-title">局部感觉</span>
                <el-checkbox-group v-model="checkList" class="f1">
                  <el-checkbox label="麻木"></el-checkbox>
                  <!-- <el-checkbox label="麻木"></el-checkbox> -->
                </el-checkbox-group>
                <select
                  class="split-input-select"
                  style="width:100px;height:26px;margin-left:20px;"
                >
                  <option value="vo">请选择</option>
                </select>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:170px;margin-top:10px;padding-bottom:10px;border-bottom:1px solid #ccc;"
              >
                <el-checkbox-group v-model="checkList" class="f1">
                  <!-- <el-checkbox label="麻木"></el-checkbox> -->
                  <el-checkbox label="温觉减退"></el-checkbox>
                  <el-checkbox label="痛觉减退"></el-checkbox>
                  <el-checkbox label="触觉减退"></el-checkbox>
                  <el-checkbox label="位置觉减退"></el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </div>
    <div class="c-gap-main" style="height:auto;">
      <div class="little-four"></div>
      <p>心血管系统</p>
      <el-row
        class="patientdetail-title-main-other"
        style="margin-left:30px;margin-top: 7px;padding-bottom: 26px;"
      >
        <el-col :offset="0.5" :span="7">
          <span class="patientdetail-title">心血管系统</span>
          <div class="f0" style="margin-left:32px  ;float:right" @click="changeXxgStatus">
            <div id="xxgm-id" class="jsunmanagement">正常</div>
            <div id="xxgunm-id" class="jsmanagement">异常</div>
          </div>
        </el-col>
        <div style="height:336px;border:1px solid #ccc;margin-top:33px;" v-if="xxgsystemShow">
          <el-row class="patientdetail-title-main-other" style="margin-left:30px;margin-top: 7px;">
            <el-col :offset="0.5" :span="7">
              <div style="width:1000px;border-bottom:1px solid #ccc;">
                <span class="patientdetail-title">心血管系统</span>
                <div class="f0" style="margin-left:32px;padding-bottom:20px;user-select:none;">
                  <div class="management">正常</div>
                  <div class="unmanagement">异常</div>
                </div>
                <div
                  id="xxgm-save"
                  style="width:50px;height:25px;border-radius:10px;margin-left:400px;font-size:12px;display:inline-block;border:1px solid #ccc;line-height:25px;text-align:center; background:#ffcc66"
                  @click="xxgmSave"
                >保存</div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:100px;margin-top:10px;border-bottom:1px solid #ccc;padding-bottom:20px;"
              >
                <span class="patientdetail-title">异常项</span>
                <el-checkbox-group v-model="checkList" class="f1">
                  <el-checkbox label="心血管"></el-checkbox>
                  <el-checkbox label="周边血管"></el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div style="width:1000px;margin-left:170px;margin-top:10px;padding-bottom:10px;">
                <span class="patientdetail-title">心血管</span>
                <el-checkbox-group v-model="checkList" class="f1">
                  <el-checkbox label="心率快"></el-checkbox>
                  <el-checkbox label="心率慢"></el-checkbox>
                  <el-checkbox label="血压高"></el-checkbox>
                </el-checkbox-group>
                <select
                  class="split-input-select"
                  style="width:100px;height:26px;margin-left:20px;"
                >
                  <option value="vo">请选择</option>
                </select>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:170px;margin-top:10px;padding-bottom:10px;border-bottom:1px solid #ccc;"
              >
                <el-checkbox-group v-model="checkList" class="f1">
                  <!-- <el-checkbox label="麻木"></el-checkbox> -->
                  <el-checkbox label="血压低"></el-checkbox>
                  <el-checkbox label="心悸"></el-checkbox>
                  <el-checkbox label="颈静脉怒张"></el-checkbox>
                  <el-checkbox label="杂音"></el-checkbox>
                  <el-checkbox label="心脏起搏器"></el-checkbox>
                </el-checkbox-group>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div style="width:1000px;margin-left:170px;margin-top:10px;padding-bottom:10px;">
                <span class="patientdetail-title">周边血管</span>
                <el-checkbox-group v-model="checkList" class="f1">
                  <el-checkbox label="静脉曲张"></el-checkbox>
                </el-checkbox-group>
                <select
                  class="split-input-select"
                  style="width:100px;height:26px;margin-left:20px;"
                >
                  <option value="vo">请选择部位</option>
                </select>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="0.5">
              <div
                style="width:1000px;margin-left:223px;margin-top:10px;padding-bottom:10px; border-bottom:1px solid #ccc"
              >
                <el-checkbox-group v-model="checkList" class="f1">
                  <el-checkbox label="搏动微弱"></el-checkbox>
                </el-checkbox-group>
                <select
                  class="split-input-select"
                  style="width:100px;height:26px;margin-left:20px;"
                >
                  <option value="vo">请选择部位</option>
                </select>
              </div>
            </el-col>
          </el-row>
        </div>
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
        <el-form-item :label-width="formLabelWidth"></el-form-item>
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
        <el-button
          type="primary"
          @click="dialogBradenFormVisible = false"
          style="background:#FFC963;color:#000"
        >确 定</el-button>
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
        <el-button
          type="primary"
          @click="dialogSelfFormVisible = false"
          style="background:#FFC963;color:#000"
        >确 定</el-button>
      </div>
    </el-dialog>

    <transition name="bounce">
      <addsecond
        v-show="isTShow"
        @clickEvent="isTShow = false"
        class="add-position"
        style="margin-left: 8px; margin-top:630px;position:absolute;z-index: 100000;width: 1266px !important;height:2045px !important;"
      ></addsecond>
    </transition>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";

import addsecond from "./addSecond.vue";

export default {
  components: {
    addsecond
  },
  data() {
    return {
      // isnpShow: false,
      isTShow: false,
      jssystemShow: false,
      xxgsystemShow: false,
      saveplanable: true,
      temIsValue: "",
      mbIsValue: "",
      hxIsValue: "",
      tempValueIsBad: false,
      mbValueIsBad: false,
      hxValueIsBad: false,
      dialogPainFormVisible: false,
      dialogBradenFormVisible: false,
      dialogFallFormVisible: false,
      dialogSelfFormVisible: false,
      radio: "1",
      telinput: "",
      submitForm: {
        xyhigh: "",
        xylow: "",
        mb: "",
        tt: "",
        hx: "",
        tz: "",
        sg: "",
        selfassesment: "",
        xya: "",
        fallassesment: "",
        bradenassesment: "",
        painassesment: "",
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
      planList: {},
      checkList: ["选中且禁用", "复选框 A"],
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
      z_radio: "1",
      count1: 1
    };
  },

  mounted() {},

  methods: {
    handle(row, column, event, cell) {
      let trl = event;
      trl.style.background = "#FFC963";
    },
    dbhandle(row, column, event, cell) {
      let trl = event;
      trl.style.background = "#fff";
    },
    changeStatus() {
      this.jssystemShow = true;

      $("#jsm-id").addClass("jsmanagement");
      $("#jsm-id").removeClass("jsunmanagement");
      $("#jsunm-id").addClass("jsunmanagement");
      $("#jsunm-id").removeClass("jsmanagement");
    },
    jsmSave() {
      this.jssystemShow = false;
      $("#jsm-id").addClass("jsunmanagement");
      $("#jsm-id").removeClass("jsmanagement");
      $("#jsunm-id").addClass("jsmanagement");
      $("#jsunm-id").removeClass("jsunmanagement");
      this.$message.success("保存成功");
    },
    xxgmSave() {
      this.xxgsystemShow = false;
      $("#xxgm-id").addClass("jsunmanagement");
      $("#xxgm-id").removeClass("jsmanagement");
      $("#xxgunm-id").addClass("jsmanagement");
      $("#xxgunm-id").removeClass("jsunmanagement");
      this.$message.success("保存成功");
    },
    changeXxgStatus() {
      this.xxgsystemShow = true;
      $("#xxgm-id").addClass("jsmanagement");
      $("#xxgm-id").removeClass("jsunmanagement");
      $("#xxgunm-id").addClass("jsunmanagement");
      $("#xxgunm-id").removeClass("jsmanagement");
    },
    saveplan() {
      this.isTShow = !this.isTShow;

      this.$message.success("保存并生成护理计划成功");
      this.saveplanable = true;
      axios.get("/api/temperatureMock").then(res => {
        console.log(res.data);
        this.planList = res.data;
        console.log(this.planList);
      });
    },
    save() {
      if (this.temIsValue < 35 || this.temIsValue > 40) {
        this.tempValueIsBad = true;
      } else {
        this.count1 += 1;
        this.tempValueIsBad = false;
        this.saveplanable = false;
      }
      if (this.mbIsValue < 40 || this.mbIsValue > 200) {
        this.mbValueIsBad = true;
      } else {
        this.count1 += 1;
        this.mbValueIsBad = false;
        this.saveplanable = false;
      }
      if (this.hxIsValue < 10 || this.hxIsValue > 50) {
        this.hxValueIsBad = true;
      } else {
        this.count1 += 1;
        this.hxValueIsBad = false;
        this.saveplanable = false;
      }
      if (this.count >= 4) {
        this.$message("保存成功");
      } else {
      }
    },
    closeadddayassesment() {
      this.$emit("clickevent");
    },
    painAssesment() {
      this.dialogPainFormVisible = true;
    },
    bradenAssesment() {
      this.dialogBradenFormVisible = true;
    },
    fallAssesment() {
      this.dialogFallFormVisible = true;
    },
    selfAssesment() {
      this.dialogSelfFormVisible = true;
    }
  }
};
</script>

<style type="text/css" lang="scss" >
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

      .jsmanagement {
        text-align: center;
        line-height: 20px;
        display: inline-block;
        width: 40px;
        height: 20px;
        border-radius: 5px;
        background: #f2f2f2;
        font-size: 12px;
      }
      .jsunmanagement {
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

.header {
  height: 36px;
  background: #ebf6ff;
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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
