<template>
  <!-- 文书 ==>患者待办 -->
  <div>
    <el-row>
      <div>
        <div class="header" style="display:flex;"  @initevent="initT()">
          <div style="width:60px;height:60px; line-height:60px; text-align:center;">{{bedOneData.name}}</div>
          <div style="flex:1;font-size:14px;">
            <p style="height:30px;line-height:30px;">
              <span style="margin-left:0px;font-size:16px">{{bedOneData.patIndexNo}}</span>
              <span style="margin-left:26px;font-weight:bold;font-size:18px;color:#333">{{bedOneData.sex}}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;病历号：<span style="margin-left:0px;font-size:14px">{{bedOneData.sysCode}}</span>
              <span style="font-size:10px;color:#aaa;margin-left:52px;">年龄</span>
              <span style="margin-left:0px;font-size:12px">{{bedOneData.age}}</span>
              <span style="font-size:10px;color:#aaa;margin-left:37px;">过敏史</span>
              <span style="margin-left:0px;font-size:12px">{{bedOneData.allergy}}</span>
               <span style="font-size:10px;color:#aaa;margin-left:50px;">入院时间</span>
              <span style="margin-left:0px;font-size:12px">{{bedOneData.admissionTime}}</span>
              <span style="font-size:14px;color:#FFC963;margin-left:410px;position:relative;top:13px;">打印腕带</span>
            </p>
            <p style="height:30px;">
              <ul style="display:inline-block;height: 20px;width: 215px;margin-top: 6px;">
              <li
                v-for="data ,index in bedOneData.signlist"
                style="height: 18px;width:20px;margin-top:0px;
                border: none;padding:0 3px;line-height:18px;float:left;"
                :class="{ 'class-i': data === '新', 'class-j': data === '特' ,'class-k': data=== '管' ,'class-l': data === '嘱','class-m': data === '跌','class-n': data === 'Ⅲ','class-o': data === 'Ⅰ','class-p': data=== 'Ⅱ','class-q': data === '疮','class-r': data === '束','class-s': data === '温'}"
              >{{data}}</li>
              </ul>
              <span style="font-size:10px;color:#aaa;margin-left:60px;position:relative;top:-5px;">医保费别</span>
              <span style="margin-left:0px;font-size:12px;position:relative;top:-5px;">{{bedOneData.chargeTypeName}}</span>
               <span style="font-size:10px;color:#aaa;margin-left:5px;position:relative;top:-5px;">费用合计</span>
              <span style="margin-left:0px;font-size:12px;position:relative;top:-5px;">{{bedOneData.totalCost}}</span>
               <span style="font-size:10px;color:#aaa;margin-left:70px;position:relative;top:-5px;">诊断</span>
              <span style="margin-left:0px;font-size:12px;position:relative;top:-5px;">{{bedOneData.diagnosis}}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div id="mitem" style="height:35px;border:1px solid #ccc;margin-top:3px">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            style="display:inline-block; height:34px;"
            @open="handleOpen"
          >
            <el-menu-item class="mitem-ch" index="1">文书待办</el-menu-item>
            <el-menu-item class="mitem-ch" index="2">待测体征</el-menu-item>
            <el-menu-item class="mitem-ch" index="3">医嘱执行</el-menu-item>
          </el-menu>
        </div>
        <div style="margin-top:-5px" v-if="ptableShow">
          <el-table :data="bradenTableData" border style="width: 100%">
            <el-table-column prop="date" label="计划时间" width="150"></el-table-column>
            <el-table-column prop="name" label="执行内容" width="750"></el-table-column>
            <el-table-column prop="tem" label="操作" width="170"></el-table-column>
            <el-table-column prop="bloodpressure" label="时间" width="210">
              <el-time-select
                v-model="value1"
                :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
                placeholder="选择时间"
              ></el-time-select>
            </el-table-column>
          </el-table>
        </div>
        <div style="" v-if="pcardShow">
          <p style="height:34px;text-indent:8px;line-height:40px;font-size:14px;color:#363636; margin-top:8px;">
          待测时段
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
        </div>

        <div style="margin-top:-5px" v-if="ptryShow">
          <el-table :data="tableData5" border style="width:100%">
        <el-table-column prop="drugName" label="药品" width="185"></el-table-column>
        <el-table-column prop="drugSpec" label="规格"></el-table-column>
        <el-table-column prop="dosage" label="剂量" ></el-table-column>
        <el-table-column prop="supplyName" label="用法" ></el-table-column>
        <el-table-column prop="frequencyName" label="频度" ></el-table-column>
        <el-table-column prop="orderExecuteDate" label="计划执行时间"></el-table-column>
        <el-table-column prop="startTime" label="开始" ></el-table-column>
      </el-table>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
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
      ptableShow: true,
      pcardShow: false,
      ptryShow: false,
      activeIndex: '1',
      contentdata: {},
      baseinfo: {},
      value1: '',
      bradenTableData: [
        {
          date: '09:00',
          name: '测量体温',
          tem: '提交',
          bloodpressure: '3分',
          pulse: '4分'
        },
        {
          date: '11:00',
          name: '冰袋冷敷头部',
          tem: '提交',
          bloodpressure: '轻度受限',
          pulse: '为受损害'
        },
        {
          date: '11:30',
          name: '跌倒/坠床危险因素评估',
          tem: '提交',
          bloodpressure: '偶尔潮湿',
          pulse: '很少潮湿'
        },
        {
          date: '15:30',
          name: '评估病人有无出血情况 ',
          tem: '提交',
          bloodpressure: '偶尔潮湿',
          pulse: '很少潮湿'
        }
      ],
      tableData5: [
        {
          'status': '0',
          'drugName': [
            '5%葡萄糖注射液（可立袋）',
            '0.9%氯化钠注射液（可立袋）'
          ],
          'drugSpec': [
            '250ml/瓶',
            '50ml/瓶'
          ],
          'dosage': [
            '250ml',
            '50ml'
          ],
          'supplyName': '静滴',
          'frequencyName': 'BID',
          'orderExecuteDate': '2016-10-15 16:00',
          'startTime': '未开始',
          'doctorName': '',
          'stopTime': null,
          'stopDoctorName': ''
        },
        {
          'status': '1',
          'drugName': [
            '0.9%氯化钠注射液（可立袋）'
          ],
          'drugSpec': [
            '250ml/瓶',
            '50ml/瓶'
          ],
          'dosage': [
            '250ml',
            '50ml'
          ],
          'supplyName': '静滴',
          'frequencyName': 'BID',
          'orderExecuteDate': '2016-10-15 08:00',
          'startTime': '未开始',
          'doctorName': '',
          'stopTime': null,
          'stopDoctorName': ''
        }
      ],
      bedOneData: {}
    }
  },

  beforeMount () {},

  mounted () {
    axios.get('/api/patient/backlog/query/101').then(res => {
      this.contentdata = res.data.data
      console.log(this.contentdata)
    })
    axios.get('/api/patients/info ').then(res => {
      console.log(res.data)
    })
    // this.initT();
  },
  beforeCreate () {
    // this.initT();
  },
  created () {
    this.initT()
  },

  methods: {
    showDocadviceDetail () {},
    initT () {
      axios
        .get('../../../static/bedone.json')
        .then(res => {
          console.log(res.data)
          this.bedOneData = res.data
          console.log(this.bedOneData)
        })
        .catch(e => {
          console.log(e)
        })
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, 123)
      if (key == 1) {
        this.ptableShow = true
        this.pcardShow = false
        this.ptryShow = false
      } else if (key == 2) {
        this.pcardShow = true
        this.ptableShow = false
        this.ptryShow = false
      } else {
        this.ptryShow = true
        this.pcardShow = false
        this.ptableShow = false
      }
    }
  }
}
</script>

<style type="text/css" lang="scss" scoped>
.class-i {
  color: #00af39;
}
.class-j {
  color: #f00;
}
.class-k {
  color: #c681e3;
}
.class-l {
  color: #00879b;
}
.class-m {
  color: #477dff;
}
.class-n {
  color: #e743fd;
}
.class-o {
  color: #ff7371;
}
.class-p {
  color: #ffbe00;
}
.class-q {
  color: #ff5050;
}
.class-r {
  color: #ff5aad;
}
.class-s {
  color: #ff5846;
}
.header {
  border: 1px solid #c2c2c2;
  height: 60px;
  width: 99%;
  background: #fff;
  display: inline-block;
  span {
    margin-left: 10px;
  }
}
// .el-input__icon {
//   line-height: 28px !important;
// }
#right-list{
  display: inline-block;
  li{

    display:inline-block;

    height: 30px;
    border: 1px solid #ccc;
    padding-right:31px;

    line-height: 30px;
    background:#CCC;
    user-select: none;
  }
}
#mitem .mitem-ch{
  height: 34px;
  line-height: 35px;
}
.el-menu--horizontal > .el-menu-item.is-active {
    border-bottom: 2px solid #FFC963;
    color: #303133;
}

</style>
