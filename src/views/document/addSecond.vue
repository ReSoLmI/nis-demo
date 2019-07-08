<template>
  <!-- 文书 ==>增加护理问题 -->
  <div id="addsecond">
    <div style="border-bottom:1px solid #ccc">
      <div class="dration" @click="closeadddayassesment"><</div>
      <div class="header-middle">每日评估单</div>
      <div class="header-text">|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;001床&nbsp;&nbsp;&nbsp;&nbsp;张伟</div>
      <div class="header-end">
        <el-button size="mini" class="adddayassesment-save" :plain="true" @click="saveplan">完成</el-button>
      </div>
    </div>
    <p style="padding:10px 0;font-size:14px;color:#989898;text-indent:30px;">
      <span style="color:#000">评估完成!</span>
      <span style="margin-left:20px;">请选择问题并为问题选择目标</span>
      <el-button size="mini" class="header-end" :plain="true" @click="dialogJump">+护理问题</el-button>
    </p>
    <div
      style="height:200px;border-bottom:1px solid #E0E0E0;border-top:1px solid #E0E0E0; margin-top:10px;color:#363636;font-size:14px;"
    >
      <div>
        <div
          style="width:250px;height:40px;border-bottom:1px solid #E0E0E0;border-right:1px solid #E0E0E0;float:left;line-height:40px;text-align:center;"
        >问题</div>
        <div
          style="height:40px;border-bottom:1px solid #E0E0E0;line-height:40px;text-align:center;margin-left:250px;"
        >目标</div>
      </div>
      <div style="background:#fff;">
        <div
          style="width:250px;height:80px;border-bottom:1px solid #E0E0E0;border-right:1px solid #E0E0E0;float:left;line-height:80px; font-size:14px;
          text-indent:30px;"
        >
          <p>
            <input type="checkbox">
            <span>心动过速</span>
          </p>
        </div>
        <div style="height:80px;border-bottom:1px solid #E0E0E0;margin-left:250px;">
          <div style="height:20px;padding-top:10px;text-indent:320px">
            <input type="checkbox">
            <span>影响病人心动过速的因素及程度能减少</span>
          </div>
          <div style="height:20px;text-indent:320px">
            <input type="checkbox">
            <span>病人能在适当活动下，呼吸困难、头晕或胸痛等不适症状无加重</span>
          </div>
          <div style="height:20px;text-indent:320px">
            <input type="checkbox">
            <span>病人心率维持在适当范围</span>
          </div>
        </div>
      </div>
      <div style="background:#fff;">
        <div
          style="width:250px;height:80px;border-bottom:1px solid #E0E0E0;border-right:1px solid #E0E0E0;float:left;line-height:80px; font-size:14px;
          text-indent:30px;"
        >
          <p>
            <input type="checkbox">
            <span>发热</span>
          </p>
        </div>
        <div style="height:80px;border-bottom:1px solid #E0E0E0;margin-left:250px;">
          <div style="height:20px;padding-top:20px;text-indent:320px">
            <input type="checkbox">
            <span>生命体征维持在正常范围</span>
          </div>
          <div style="height:20px;text-indent:320px">
            <input type="checkbox">
            <span>半小时内降温到正常范围</span>
          </div>
        </div>
      </div>
    </div>
    <p style="padding:10px 0;font-size:14px;color:#989898;text-indent:30px;">请选择护理活动</p>

    <div
      style="height:120px;width:1216px;margin-left:15px;border:1px solid #E0E0E0;border-top:1px solid #E0E0E0; margin-top:10px;color:#363636;font-size:14px;"
    >
      <div
        style="border-bottom:1px solid  #E0E0E0; height:40px; background:#F8F8F8;color:#000;line-height:40px;text-indent:20px;"
      >心律失常管理</div>
      <div
        class="vhover"
        style="border-bottom:1px solid  #E0E0E0;height:40px;"
        @click="changeColor"
      >
        <span
          style="display:inline-block;padding:10px 60px;width:650px;"
        >√ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;评估观察心动过速的症状。</span>
        <div style="display:inline-block;">
          <select class="split-input-select" style="width:100px;height:26px;margin-left:40px;">
            <option value="vo">st</option>
            <option value="v1">q1h</option>
            <option value="v2">q2h</option>
            <option value="v3">q3h</option>
            <option value="v4">q4h</option>
            <option value="v5">q5h</option>
            <option value="v6">q6h</option>
          </select>
          <select class="split-input-select" style="width:100px;height:26px; width:150px;">
            <option value="to">08:00</option>
            <option value="t1">q1h</option>
            <option value="t2">q2h</option>
            <option value="t3">q3h</option>
            <option value="t4">q4h</option>
            <option value="t5">q5h</option>
            <option value="t6">q6h</option>
          </select>
        </div>
      </div>
      <div
        class="vhover"
        style="border-bottom:1px solid  #E0E0E0;height:40px;"
        @click="changeColor"
      >
        <span
          style="display:inline-block;padding:10px 60px;width:650px;"
        >√ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;对病人实施心电监护，并设定报警参数。</span>
        <div style="display:inline-block;">
          <select class="split-input-select" style="width:100px;height:26px;margin-left:40px;">
            <option value="vo">st</option>
            <option value="v1">q1h</option>
            <option value="v2">q2h</option>
            <option value="v3">q3h</option>
            <option value="v4">q4h</option>
            <option value="v5">q5h</option>
            <option value="v6">q6h</option>
          </select>
          <select class="split-input-select" style="width:100px;height:26px; width:150px;">
            <option value="to">08:00/16:00</option>
            <option value="t1">q1h</option>
            <option value="t2">q2h</option>
            <option value="t3">q3h</option>
            <option value="t4">q4h</option>
            <option value="t5">q5h</option>
            <option value="t6">q6h</option>
          </select>
        </div>
      </div>
    </div>

    <div
      style="height:120px;width:1216px;margin-left:15px;border:1px solid #E0E0E0;border-top:1px solid #E0E0E0; margin-top:40px;color:#363636;font-size:14px;"
    >
      <div
        style="border-bottom:1px solid  #E0E0E0; height:40px; background:#F8F8F8;color:#000;line-height:40px;text-indent:20px;"
      >心脏病护理</div>
      <div
        class="vhover"
        style="border-bottom:1px solid  #E0E0E0;height:40px;"
        @click="changeColor"
      >
        <span
          style="display:inline-block;padding:10px 60px;width:650px;"
        >√ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;适当时根据医嘱给予抗心律失常治疗（如抗心律失常药物、心脏复律或除颤）。</span>
        <div style="display:inline-block;">
          <select class="split-input-select" style="width:100px;height:26px;margin-left:40px;">
            <option value="yo">st</option>
            <option value="y1">q1h</option>
            <option value="y2">q2h</option>
            <option value="y3">q3h</option>
            <option value="y4">q4h</option>
            <option value="y5">q5h</option>
            <option value="y6">q6h</option>
          </select>
          <select class="split-input-select" style="width:100px;height:26px; width:150px;">
            <option value="zo">08:00</option>
            <option value="z1">q1h</option>
            <option value="z2">q2h</option>
            <option value="z3">q3h</option>
            <option value="z4">q4h</option>
            <option value="z5">q5h</option>
            <option value="z6">q6h</option>
          </select>
        </div>
      </div>
      <div
        class="vhover"
        style="border-bottom:1px solid  #E0E0E0;height:40px;"
        @click="changeColor"
      >
        <span
          style="display:inline-block;padding:10px 60px;width:650px;"
        >√ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;监测病人服用抗心律失常药物后的反应。</span>
        <div style="display:inline-block;">
          <select class="split-input-select" style="width:100px;height:26px;margin-left:40px;">
            <option value="vo">st</option>
            <option value="v1">q1h</option>
            <option value="v2">q2h</option>
            <option value="v3">q3h</option>
            <option value="v4">q4h</option>
            <option value="v5">q5h</option>
            <option value="v6">q6h</option>
          </select>
          <select class="split-input-select" style="width:100px;height:26px; width:150px;">
            <option value="to">08:00/16:00</option>
            <option value="t1">q1h</option>
            <option value="t2">q2h</option>
            <option value="t3">q3h</option>
            <option value="t4">q4h</option>
            <option value="t5">q5h</option>
            <option value="t6">q6h</option>
          </select>
        </div>
      </div>
    </div>
    <div
      style="height:120px;width:1216px;margin-left:15px;border:1px solid #E0E0E0;border-top:1px solid #E0E0E0; margin-top:40px;color:#363636;font-size:14px;"
    >
      <div
        style="border-bottom:1px solid  #E0E0E0; height:40px; background:#F8F8F8;color:#000;line-height:40px;text-indent:20px;"
      >降温处理</div>
      <div
        class="vhover"
        style="border-bottom:1px solid  #E0E0E0;height:40px;"
        @click="changeColor"
      >
        <span
          style="display:inline-block;padding:10px 60px;width:650px;"
        >√ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;冰袋冷敷头部。</span>
        <div style="display:inline-block;">
          <select class="split-input-select" style="width:100px;height:26px;margin-left:40px;">
            <option value="yo">st</option>
            <option value="y1">q1h</option>
            <option value="y2">q2h</option>
            <option value="y3">q3h</option>
            <option value="y4">q4h</option>
            <option value="y5">q5h</option>
            <option value="y6">q6h</option>
          </select>
          <select class="split-input-select" style="width:100px;height:26px; width:150px;">
            <option value="zo">08:00</option>
            <option value="z1">q1h</option>
            <option value="z2">q2h</option>
            <option value="z3">q3h</option>
            <option value="z4">q4h</option>
            <option value="z5">q5h</option>
            <option value="z6">q6h</option>
          </select>
        </div>
      </div>
      <div
        class="vhover"
        style="border-bottom:1px solid  #E0E0E0;height:40px;"
        @click="changeColor"
      >
        <span
          style="display:inline-block;padding:10px 60px;width:650px;"
        >√ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 药物或物理降温半小时后，应测量体温，并作好记录。</span>
        <div style="display:inline-block;">
          <select class="split-input-select" style="width:100px;height:26px;margin-left:40px;">
            <option value="vo">st</option>
            <option value="v1">q1h</option>
            <option value="v2">q2h</option>
            <option value="v3">q3h</option>
            <option value="v4">q4h</option>
            <option value="v5">q5h</option>
            <option value="v6">q6h</option>
          </select>
          <select class="split-input-select" style="width:100px;height:26px; width:150px;">
            <option value="to">08:00/16:00</option>
            <option value="t1">q1h</option>
            <option value="t2">q2h</option>
            <option value="t3">q3h</option>
            <option value="t4">q4h</option>
            <option value="t5">q5h</option>
            <option value="t6">q6h</option>
          </select>
        </div>
      </div>
    </div>

    <div
      style="height:120px;width:1216px;margin-left:15px;border:1px solid #E0E0E0;border-top:1px solid #E0E0E0; margin-top:40px;color:#363636;font-size:14px;"
    >
      <div
        style="border-bottom:1px solid  #E0E0E0; height:40px; background:#F8F8F8;color:#000;line-height:40px;text-indent:20px;"
      >加强观察</div>
      <div
        class="vhover"
        style="border-bottom:1px solid  #E0E0E0;height:40px;"
        @click="changeColor"
      >
        <span
          style="display:inline-block;padding:10px 60px;width:650px;"
        >√ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每隔4小时测温一次，体温恢复正常3日后，改为每日1～2次。</span>
        <div style="display:inline-block;">
          <select class="split-input-select" style="width:100px;height:26px;margin-left:40px;">
            <option value="so">st</option>
            <option value="s1">q1h</option>
            <option value="s2">q2h</option>
            <option value="s3">q3h</option>
            <option value="s4">q4h</option>
            <option value="s5">q5h</option>
            <option value="s6">q6h</option>
          </select>
          <select class="split-input-select" style="width:100px;height:26px; width:150px;">
            <option value="oo">08:00</option>
            <option value="o1">q1h</option>
            <option value="o2">q2h</option>
            <option value="o3">q3h</option>
            <option value="o4">q4h</option>
            <option value="o5">q5h</option>
            <option value="o6">q6h</option>
          </select>
        </div>
      </div>
      <div
        class="vhover"
        style="border-bottom:1px solid  #E0E0E0;height:40px;"
        @click="changeColor"
      >
        <span
          style="display:inline-block;padding:10px 60px;width:650px;"
        >√ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 监测病人体温，并作好记录。</span>
        <div style="display:inline-block;">
          <select class="split-input-select" style="width:100px;height:26px;margin-left:40px;">
            <option value="mo">st</option>
            <option value="m1">q1h</option>
            <option value="m2">q2h</option>
            <option value="m3">q3h</option>
            <option value="m4">q4h</option>
            <option value="m5">q5h</option>
            <option value="m6">q6h</option>
          </select>
          <select class="split-input-select" style="width:100px;height:26px; width:150px;">
            <option value="no">08:00/16:00</option>
            <option value="n1">q1h</option>
            <option value="n2">q2h</option>
            <option value="n3">q3h</option>
            <option value="n4">q4h</option>
            <option value="n5">q5h</option>
            <option value="n6">q6h</option>
          </select>
        </div>
      </div>
    </div>

    <el-dialog title="新增问题" :visible.sync="dialogVisible" width="1027px">
      <div style="width:985px;height:714px;border:1px solid #ccc;display:flex;">
        <div style="width:200px;border-right:1px solid #ccc">
          <ul>
            <li>
              <input type="text" placeholder="搜索问题" style="text-indent:58px;height:30px;">
            </li>
            <li>心动过速</li>
            <li>有感染风险</li>
            <li>大便失禁</li>
            <li>体温过高</li>
          </ul>
        </div>
        <div style="flex:1">
          <div style="height:40px;background:#F8F8F8;">
            <span
              style="display:inline-block;width:5px;height:20px;background:#FFC963;margin-top:10px;"
            ></span>
            <span
              style="display:inline-block;line-height:40px;text-indent:40px;font-size:15px;font-weight:bold"
            >目标</span>
            <input
              type="text"
              placeholder="搜索添加目标"
              style="text-indent:50px;height:25px;margin-left:510px;"
            >
          </div>
          <div style="height:120px;border-bottom:1px solid #ccc;">
            <p style="padding:15px 40px;">
              <input type="checkbox">
              <span>&nbsp;&nbsp;影响病人心动过速的因素及程度能减少</span>
            </p>
            <p style="padding:10px 40px;">
              <input type="checkbox">
              <span>&nbsp;&nbsp;病人能在适当活动下，呼吸困难、头晕或胸痛等不适症状无加重</span>
            </p>
            <p style="padding:10px 40px;">
              <input type="checkbox">
              <span>&nbsp;&nbsp;病人心率维持在适当范围</span>
            </p>
          </div>
          <div style="height:40px;background:#F8F8F8;">
            <span
              style="display:inline-block;width:5px;height:20px;background:#FFC963;margin-top:10px;"
            ></span>
            <span
              style="display:inline-block;line-height:40px;text-indent:40px;font-size:15px;font-weight:bold"
            >护理措施及活动</span>
            <input
              type="text"
              placeholder="搜索添加目标"
              style="text-indent:50px;height:25px;margin-left:434px;"
            >
          </div>

          <div
            style="border-bottom:1px solid  #E0E0E0; height:40px;color:#000;line-height:40px;text-indent:20px;font-weight:bold;margin-top:15px;"
          >心律失常管理</div>
          <div
            class="vhover"
            style="border-bottom:1px solid  #E0E0E0;height:40px;"
            @click="changeColor"
          >
            <span
              style="display:inline-block;padding:10px 60px;width:333px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
            >
              <input type="checkbox"> &nbsp;&nbsp;评估观察心动过速的症状：心悸、胸闷、眩晕；评估病人有无心输出量减少如心律不齐、低血压、出冷汗、躁动不安、呼吸困难等
            </span>
            <div style="display:inline-block;">
              <select
                class="split-input-select"
                style="width:100px;height:26px;margin-left:40px;position: relative;top: -10px;"
              >
                <option value="vo">st</option>
                <option value="v1">q1h</option>
              </select>
              <select
                class="split-input-select"
                style="width:100px;height:26px; width:150px;position: relative;top: -10px;"
              >
                <option value="to">08:00</option>
                <option value="t1">q1h</option>
              </select>
            </div>
          </div>
          <div
            class="vhover"
            style="border-bottom:1px solid  #E0E0E0;height:40px;"
            @click="changeColor"
          >
            <span
              style="display:inline-block;padding:10px 60px;width:333px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
            >
              <input type="checkbox"> &nbsp;&nbsp;对病人实施心电监护，并设定报警参数
            </span>
            <div style="display:inline-block;">
              <select
                class="split-input-select"
                style="width:100px;height:26px;margin-left:40px;position: relative;top: -10px;"
              >
                <option value="vo">st</option>
                <option value="v1">q1h</option>
              </select>
              <select
                class="split-input-select"
                style="width:100px;height:26px; width:150px;position: relative;top: -10px;"
              >
                <option value="to">08:00</option>
                <option value="t1">q1h</option>
              </select>
            </div>
          </div>

          <div
            style="border-bottom:1px solid  #E0E0E0; height:40px;color:#000;line-height:40px;text-indent:20px;font-weight:bold;margin-top:15px;"
          >心脏病护理</div>
          <div
            class="vhover"
            style="border-bottom:1px solid  #E0E0E0;height:40px;"
            @click="changeColor"
          >
            <span
              style="display:inline-block;padding:10px 60px;width:333px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
            >
              <input type="checkbox"> &nbsp;&nbsp;适当时根据医嘱给予抗心律失常治疗（如抗心律失常药物、心脏复律或除颤）
            </span>
            <div style="display:inline-block;">
              <select
                class="split-input-select"
                style="width:100px;height:26px;margin-left:40px;position: relative;top: -10px;"
              >
                <option value="vo">st</option>
                <option value="v1">q1h</option>
              </select>
              <select
                class="split-input-select"
                style="width:100px;height:26px; width:150px;position: relative;top: -10px;"
              >
                <option value="to">08:00</option>
                <option value="t1">q1h</option>
              </select>
            </div>
          </div>
          <div
            class="vhover"
            style="border-bottom:1px solid  #E0E0E0;height:40px;"
            @click="changeColor"
          >
            <span
              style="display:inline-block;padding:10px 60px;width:333px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
            >
              <input type="checkbox"> &nbsp;&nbsp;监测病人服用抗心律失常药物后的反应
            </span>
            <div style="display:inline-block;">
              <select
                class="split-input-select"
                style="width:100px;height:26px;margin-left:40px;position: relative;top: -10px;"
              >
                <option value="vo">st</option>
                <option value="v1">q1h</option>
              </select>
              <select
                class="split-input-select"
                style="width:100px;height:26px; width:150px;position: relative;top: -10px;"
              >
                <option value="to">08:00</option>
                <option value="t1">q1h</option>
              </select>
            </div>
          </div>

          <div
            style="border-bottom:1px solid  #E0E0E0; height:40px;color:#000;line-height:40px;text-indent:20px;font-weight:bold;margin-top:15px;"
          >其他</div>
          <div
            class="vhover"
            style="border-bottom:1px solid  #E0E0E0;height:40px;"
            @click="changeColor"
          >
            <span
              style="display:inline-block;padding:10px 60px;width:333px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
            >
              <input type="checkbox"> &nbsp;&nbsp;协助病人采取安全舒适卧位
            </span>
            <div style="display:inline-block;">
              <select
                class="split-input-select"
                style="width:100px;height:26px;margin-left:40px;position: relative;top: -10px;"
              >
                <option value="vo">st</option>
                <option value="v1">q1h</option>
              </select>
              <select
                class="split-input-select"
                style="width:100px;height:26px; width:150px;position: relative;top: -10px;"
              >
                <option value="to">08:00</option>
                <option value="t1">q1h</option>
              </select>
            </div>
          </div>
          <div
            class="vhover"
            style="border-bottom:1px solid  #E0E0E0;height:40px;"
            @click="changeColor"
          >
            <span
              style="display:inline-block;padding:10px 60px;width:333px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
            >
              <input type="checkbox"> &nbsp;&nbsp;协助病人采取安全舒适卧位
            </span>
            <div style="display:inline-block;">
              <select
                class="split-input-select"
                style="width:100px;height:26px;margin-left:40px;position: relative;top: -10px;"
              >
                <option value="vo">st</option>
                <option value="v1">q1h</option>
              </select>
              <select
                class="split-input-select"
                style="width:100px;height:26px; width:150px;position: relative;top: -10px;"
              >
                <option value="to">08:00</option>
                <option value="t1">q1h</option>
              </select>
            </div>
          </div>
          <div
            class="vhover"
            style="border-bottom:1px solid  #E0E0E0;height:40px;"
            @click="changeColor"
          >
            <span
              style="display:inline-block;padding:10px 60px;width:333px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;"
            >
              <input type="checkbox"> &nbsp;&nbsp;实施高级心脏复苏支持
            </span>
            <div style="display:inline-block;">
              <select
                class="split-input-select"
                style="width:100px;height:26px;margin-left:40px;position: relative;top: -10px;"
              >
                <option value="vo">st</option>
                <option value="v1">q1h</option>
              </select>
              <select
                class="split-input-select"
                style="width:100px;height:26px; width:150px;position: relative;top: -10px;"
              >
                <option value="to">08:00</option>
                <option value="t1">q1h</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <!-- <div style="text-align:left !important;position:relative;top:20px;">
          <span>时间</span>
          <el-date-picker v-model="value1" type="datetime" placeholder="选择日期时间"></el-date-picker>
        </div>-->

        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      dialogVisible: false
    };
  },

  mounted() {},

  methods: {
    saveplan() {
      let _self = this;
      if (true) {
        _self.$emit("clickEvent");
        _self.$emit("clickevent");
        _self.$message("保存并生成护理计划成功");
        axios.get("/api/temperatureMock").then(res => {
          console.log(res.data);
          _self.planList = res.data;
          console.log(_self.planList);
        });
      } else {
        return false;
      }
      // _self.$refs["submitForm"].validate(valid => {

      // });
    },
    closeadddayassesment() {
      this.$emit("clickevent");
    },
    dialogJump() {
      this.dialogVisible = true;
    },
    changeColor() {
      // document.getElementsByClassName(".vhover").addclass("class", "chover");
    }
  }
};
</script>

<style type="text/css" lang="scss" scoped>
#addsecond {
  width: 100%;
  height: 100%;
  border: 1px solid #000;
  background: #f3f3f3;
  overflow: scroll;
}
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
.vhover {
  background: #fff;
}
.vhover:hover {
  background: #fff3e6;
}
.chover {
  background: #ffc963;
}
ul {
  li {
    height: 40px;
    border-bottom: 1px solid #ccc;
    font-size: 12px;
    line-height: 40px;
    text-align: center;
  }
}
</style>
