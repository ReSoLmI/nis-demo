<template>
  <!-- 体征 ==>体征录入 -->

  <div class="sign-input">
    <div
      class="sign-input-header"
      style="height:24px;background:rgb(238, 238, 238);font-size:12px;line-height:24px;"
    >
      <div
        class="sign-input-record"
        style="display:inline-block;width:200px;text-indent:14px;font-weight:bold"
      >记录</div>
      <div class="sign-input-delete" style="display:inline-block;color:#FFC963;">删除</div>
      <div
        class="sign-input-block"
        style="width:14px;height:14px;background:#FFC963;margin-top:5px;display:inline-block;margin-left:20px;"
      ></div>
      <div
        class="sign-input-word"
        style="display:inline-block;width:180px;text-align:center;border-right:1px solid #000;height:20px;"
      >体征录入</div>
      <div
        class="sign-input-select"
        style="display:inline-block;line-height:24px;width:180px;text-align:center;"
      >
        <!-- <el-select v-model="nurse" placeholder="2019-06-20" style="margin-left:10px;">
          <el-option
            v-for="item in timeoptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>-->
        2019-06-20&nbsp;&nbsp;
      </div>
      <div
        class="sign-input save"
        style="margin-left: 485px;display:inline-block;margin-right:80px;color:#FFC963;"
        @click="signinputSave"
      >保&nbsp;&nbsp;&nbsp;&nbsp;存</div>
    </div>
    <div class="sign-input-bottom" style="overflow:hidden">
      <div class="sign-input-left" style="width:400px;position:relative;top:5px;float:left">
        <el-table
          :data="tableSignInputData"
          height="530"
          class="table"
          :header-cell-style="{
        'color':'#000',
        'font-size':'12px',
        'font-weight':'300',
        'background':'#eee',
        }"
        >
          <el-table-column prop="time" label="时间"></el-table-column>
          <el-table-column prop="sign" label="体征/事件"></el-table-column>
          <el-table-column prop="value" label="值"></el-table-column>
          <el-table-column prop="operationName" label="录入人"></el-table-column>
        </el-table>
      </div>
      <div
        class="sign-input-right"
        style="display:inline-block;border-left:2px solid #ccc; height:600px;width:800px;"
      >
        <p style="height:40px;text-indent:40px;line-height:40px;font-size:14px;color:#363636; margin-top:14px;">
          录入时间

          <ul id='right-list'>
            <li>2</li>
            <li>6</li>
            <li>10</li>
            <li>14</li>
            <li>18</li>
            <li>22</li>
            <li>11:05</li>
          </ul>
        </p>
        <p style="height:40px;text-indent:40px;line-height:40px;font-size:14px;color:#363636">
          事件名称
          <select class="sign-input-select" style="width:160px;height:26px;margin-left:40px;">
            <option value="volvo">无</option>
            <option value="saab">入院</option>
            <option value="opel">转科</option>
            <option value="audi">手术</option>
            <option value="audi">死亡</option>
            <option value="audi">分娩</option>
          </select>
        </p>
        <div style="height:20px;line-height:20px;background:#F3F3F3;text-indent:30px;margin-top:10px;color:#FFC963">TPRBP</div>
        <div style="height:200px;">
              <p style="padding-top:20px;">
            <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;color:#FFC963;">体温(℃)
              <input  v-model="temValue" id="txt" type='text' placeholder="37.1"  style="margin-left:50px;margin-right:19px;text-indent:70px;">
              <span style="text-align:cneter;border:1px solid #ccc;background:#FAFAFA;color:#E1E1E1;font-size:12px;">降温后</span>
              <p style="font-size:10px;color:#f00;text-indent:158px;" v-show="tempValuebad">体温值不在有效范围35~40之间</p>
            </div>
            <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;color:#FFC963">脉搏(次/分)
              <input  v-model="mbValue" type='text' placeholder="81"style="margin-left:42px;text-indent:70px;">
              <span style="text-align:cneter;color:#f00;font-size:12px;padding-left:15px;">短绌</span>
              <p style="font-size:10px;color:#f00;text-indent:158px;"v-show="mbValuebad">脉搏录入值不在有效范围40~200之间</p>
            </div>
          </p>
          <p style="padding-top:15px;">
             <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;color:#FFC963">呼吸(次/分)
              <!-- <input type='text' style="margin-left:30px;text-indent:70px;"> -->
                <select class="sign-input-select" style="width:80px;height:20px;margin-left:30px;">
                  <option value="volvo">请选择</option>
                  <option value="saab">自主呼吸</option>
                  <option value="opel">呼吸机</option>
                </select>
                <!-- <div style="width:80px; height:18px;font-size:12px;line-height:18px;text-indent:32px;border:1px solid #ccc;display:inline-block;position:relative;top:-1px;color:#363636;">95</div> -->
                 <input  v-model="hxValue" type='text' placeholder="95"style=" margin-left: 10px;text-indent: 26px; width: 72px;">
              <p style="font-size:10px;color:#f00;text-indent:158px;"v-show="hxValuebad">呼吸录入值不在有效范围40~200之间</p>
            </div>
            <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;color:#FFC963">血压(mmHg)
              <input type='text' placeholder="128    /    79" style="margin-left:30px;text-indent:47px;">
              <p style="font-size:10px;color:#fff;text-indent:158px;">间</p>
            </div>
          </p>

            <p style="padding-top:20px;">
            <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;">心率(次/分)
              <!-- <input type='text' style="margin-left:30px;text-indent:70px;">
               -->
                <select class="sign-input-select" style="width:80px;height:20px;margin-left:30px;">
                  <option value="volvo">请选择</option>
                  <option value="saab">拒测</option>
                  <option value="opel">外出</option>
                </select>
                 <!-- <div style="width:80px; height:18px;font-size:12px;line-height:18px;text-indent:32px;border:1px solid #ccc;display:inline-block;position:relative;top:-1px;">95</div> -->
                  <input  v-model="xlValue" type='text' placeholder="95"style=" margin-left: 10px;text-indent: 26px; width: 72px;">
                     <p style="font-size:10px;color:#f00;text-indent:158px;"v-show="xlValuebad">心率录入值不在有效范围10~50之间</p>
            </div>
            <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;">疼痛评分
              <input type='text' placeholder="7" style="margin-left:57px;text-indent:75px;">
              <p style="font-size:10px;color:#fff;text-indent:158px;">间</p>
            </div>
          </p>
          <p style="padding-top:15px;">
             <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;">疼痛缓解
              <input type='text' placeholder="5" style="margin-left:45px;text-indent:75px;">
            </div>
          </p>

        </div>
        <div style="height:20px;line-height:20px;background:#F3F3F3;text-indent:30px;margin-top:30px;color:#FFC963">出入量</div>
        <div style="height:120px;">
          <p style="padding-top:20px;">
            <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;">大便(次/日)
              <input type='text' style="margin-left:30px;text-indent:70px;">
            </div>
            <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;">小便(ml)
              <input type='text' style="margin-left:30px;text-indent:70px;">
            </div>
          </p>
          <p style="padding-top:15px;">
             <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;">出量(ml)
              <input type='text' style="margin-left:46px;text-indent:70px;">
            </div>
            <div style="height:30px;width:49.6%;display:inline-block;text-indent:50px;color:#363636;font-size:14px;">入量(ml)
              <input type='text' style="margin-left:30px;text-indent:70px;">
            </div>
          </p>
        </div>
        <div style="height:20px;line-height:20px;background:#F3F3F3;text-indent:30px;margin-top:10px;color:#FFC963">其他</div>
        <div style="height:60px;">
          <p>
            <div style="display:inline-block;width:50px;height:30px;line-height:30px;text-align:center;border:1px solid #ccc;font-size:14px;margin-top:30px;margin-left:250px;">+体重</div>
            <div style="display:inline-block;width:50px;height:30px;line-height:30px;text-align:center;border:1px solid #ccc;font-size:14px;margin-top:30px;margin-left:40px;">+身高</div>
            <!-- <div style="display:inline-block;width:70px;height:30px;line-height:30px;text-align:center;border:1px solid #ccc;font-size:14px;">+自定义</div> -->
              <select class="sign-input-select" style="display:inline-block;width:85px;height:30px;line-height:30px;text-align:center;border:1px solid #ccc;font-size:14px;margin-top:30px;margin-left:40px;">
            <option value="volvo">+自定义</option>
            <option value="saab">肺活量</option>
            <option value="opel">体前屈</option>
            <option value="opel">引体向上</option>
          </select>
          </p>
        </div>

      </div>

    </div>
  </div>
</template>

<script type="text/javascript">
// 输入框失去焦点时
import axios from 'axios'
$('#txt').on('blur', function () {
  if (($('#txt').val() == '')) {
    // $(".cancle_ico").addClass('hide');
    alter('体温不能为空')
  } else {
    // $(".cancle_ico").removeClass('hide');
    if (val < 35 || val > 40) {
      // alert(' not between 50-100');

    }
  }
})

//  test1()
//       {
//           var v=document.getElementById("txt").value;
//           if (isNaN(v))
//           {
//               alert('not a number');
//               return;
//           }
//           var i=parseInt(v);
//           if(v<35 || v>40)
//           {
//               alert(' not between 50-100');
//               return;
//           }
//       }

$(document).ready(function () {
  $('#right-list li').click(function () {
    var color = $(this).css('background-color')
    if (color != 'transparent' && color != 'rgba(0, 0, 0, 0)') {
      $(this).css('background-color', 'transparent')
    } else {
      $(this).css('background-color', '#CCC')
    }
  })
})
export default {
  data () {
    return {
      count: 1,
      tempValuebad: false,
      mbValuebad: false,
      hxValuebad: false,
      xlValuebad: false,
      temValue: '',
      mbValue: '',
      hxValue: '',
      xlValue: '',
      event: '',
      // timeoptions: []
      tableSignInputData: [],
      eventoptions: []
    }
  },
  computed: {
  },

  mounted () {
    axios.get('/api/nurse/sign').then(res => {
      this.tableSignInputData = res.data
      console.log(this.tableSignInputData)
    })
  },

  methods: {
    signinputSave () {
      console.log(this.temValue)
      console.log(this.mbValue)
      console.log(this.hxValue)

      if (this.temValue < 35 || this.temValue > 40) {
        this.tempValuebad = true
        //  this.$message.error("请输入合理值");
      } else {
        this.count += 1
        console.log(this.count)
        this.tempValuebad = false
        //  this.$message("体征录入成功");
      }

      if (this.mbValue < 40 || this.mbValue > 200) {
        this.mbValuebad = true
        //  this.$message.error("请输入合理值");
      } else {
        this.count += 1
        console.log(this.count)
        this.mbValuebad = false
        //  this.$message("体征录入成功");
      }
      if (this.hxValue < 40 || this.hxValue > 200) {
        this.hxValuebad = true
        //  this.$message.error("请输入合理值");
      } else {
        this.count += 1
        console.log(this.count)

        this.hxValuebad = false
        //  this.$message("体征录入成功");
      }
      if (this.xlValue < 10 || this.xlValue > 50) {
        this.xlValuebad = true
        //  this.$message.error("请输入合理值");
      } else {
        this.count += 1
        console.log(this.count)
        this.xlValuebad = false
        //  this.$message("体征录入成功");
      }
      // if((10<this.xlValue<50) && (40 <this.hxValue<200) && (40<this.mbValue < 200) && (35 < this.temValue < 40)){
      //    this.$message("体征录入成功");

      // }
      if (this.count >= 5) {
        this.$message.success('体征录入成功')
      } else {
        this.$message.error('请输入合理值')
      }
    },
    // hideP(){
    //   this.tempValuebad = false;
    //   },
    checkInput (input) {
      if (input.value > 35 && input.value < 40) {
        input.setCustomValidity('输入内容不得少于20个字符')
      } else {
        input.setCustomValidity('')
      }
    }
  //  test1()
  //       {
  //           var v=document.getElementById("txt").value;
  //           if (isNaN(v))
  //           {
  //               alert('not a number');
  //               return;
  //           }
  //           var i=parseInt(v);
  //           if(v<35 || v>40)
  //           {
  //               alert(' not between 50-100');
  //               return;
  //           }
  //       }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
#right-list{
  display: inline-block;
  // float: left;
  li{
    // float: left;
    display:inline-block;
    // width: 40px;
    height: 30px;
    border: 1px solid #ccc;
    padding-right:31px;
    // text-align: center;
    line-height: 30px;
    background:#CCC;
    user-select: none;
  }
}
</style>
