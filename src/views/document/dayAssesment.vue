<template>
  <!-- 文书 ==>每日评估单 -->
  <div>
    <el-form :model="dayassesmentData" ref="dayassesmentData">
      <el-row>
        <div class="block">
          <el-date-picker
            v-model="value7"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions2"
          ></el-date-picker>
        </div>
        <ul class="dayassesment-ul">
          <li>当前</li>
          <li>一周</li>
          <li>住院至今</li>
        </ul>
        <div class="dayassesment-div">
          <span class="print">打印</span>
          <el-button @click="isShow=!isShow">新增评估</el-button>
        </div>
      </el-row>
      <el-row>
        <el-table :data="tableData" border style="width: 100%" v-if="iscreated">
          <el-table-column prop="date" label="日期时间" width="180"></el-table-column>
          <el-table-column prop="name" label="评估人"></el-table-column>
          <el-table-column prop="tem" label="体温"></el-table-column>
          <el-table-column prop="bloodpressure" label="血压"></el-table-column>
          <el-table-column prop="pulse" label="脉搏"></el-table-column>
          <el-table-column prop="breathing" label="呼吸"></el-table-column>
          <el-table-column prop="pain" label="疼痛"></el-table-column>
          <el-table-column prop="address" label="神经系统"></el-table-column>
          <el-table-column prop="address" label="心血管系统"></el-table-column>
          <el-table-column prop="address" label="血液系统"></el-table-column>
          <el-table-column prop="address" label="呼吸系统"></el-table-column>
          <el-table-column prop="address" label="消化系统"></el-table-column>
          <el-table-column prop="address" label="感觉语言系统"></el-table-column>
          <el-table-column prop="address" label="内分泌代谢系统"></el-table-column>
          <el-table-column prop="address" label="生殖生育系统"></el-table-column>
          <el-table-column prop="address" label="泌尿系统"></el-table-column>
          <el-table-column prop="address" label="骨骼肌肉运动系统"></el-table-column>
          <el-table-column prop="address" label="皮肤体统"></el-table-column>
          <el-table-column prop="address" label="神经系统"></el-table-column>
          <el-table-column prop="address" label="活动与参与"></el-table-column>
          <el-table-column prop="address" label="环境因素"></el-table-column>
          <el-table-column prop="address" label="其他"></el-table-column>
        </el-table>
      </el-row>
      <transition name="bounce">
        <adddayassesment
          v-show="isShow"
          @clickevent="isShow=false"
          style="margin-top:-320px;margin-left:0px;position:relative;z-index:10000;"
        ></adddayassesment>
      </transition>

      <!-- <transition name="bounce">
        <nursingproblem
          v-show="isnpShow"
          @clickEvent="isnpShow=true"
          style="margin-top: -4px;margin-left:0px;position:relative;z-index:1000000;"
        ></nursingproblem> -->
      </transition>
    </el-form>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
import adddayassesment from './addDayAssesment.vue'
// import nursingproblem from './nursingproblem.vue'

export default {
  components: {
    adddayassesment,
    // nursingproblem
  },
  data () {
    return {
      isShow: false,
      isnpShow: false,
      dayassesmentData: {},
      pickerOptions2: {
        shortcuts: [
          {
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          },
          {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }
        ]
      },
      value6: '',
      value7: '',
      iscreated: false
      // tableData: [
      //   {
      //     date: "2018-05-25 15:04",
      //     name: "李小护",
      //     tem: "36.8",
      //     bloodpressure: "120/90",
      //     pulse: "60",
      //     breathing: "60",
      //     pain: "5分",
      //     address: "正常"
      //   },
      //   {
      //     date: "2018-05-25 15:04",
      //     name: "李小护",
      //     tem: "36.8",
      //     bloodpressure: "120/90",
      //     pulse: "60",
      //     breathing: "60",
      //     pain: "5分",
      //     address: "正常"
      //   },
      //   {
      //     date: "2018-05-25 15:04",
      //     name: "李小护",
      //     tem: "36.8",
      //     bloodpressure: "120/90",
      //     pulse: "60",
      //     breathing: "60",
      //     pain: "5分",
      //     address: "正常 1"
      //   }
      // ]
    }
  },

  mounted () {
    axios.get('/api/nurse/evaluation').then(res => {
      this.tableData = res.data
      console.log(1111)
      console.log(res.data)
      this.iscreated = true
      // this.total = res.data.data.page.total;
      // this.datalist = res.data.data.films;
    })
  },

  methods: {}
}
</script>

<style type="text/css" lang="scss" >
.el-date-editor .el-range__icon {
  margin-top: -11px;
}
.el-date-editor .el-range-separator {
  margin-top: -12px;
}
.block {
  display: inline-block;
}
.dayassesment-ul {
  display: inline-block;
  margin-left: 20px;
  li {
    float: left;
    padding-right: 15px;
    padding-left: 15px;
    border-right: 1px solid #ccc;
    background-color: white;
    font-size: 12px;
  }
}
.dayassesment-ul :nth-child(2) {
  color: #ffc963;
}
.dayassesment-div {
  display: inline-block;
  float: right;
  margin-right: 35px;
  .print {
    padding-right: 18px;
    font-size: 12px;
    color: #666;
  }
}
.el-button {
  padding: 6px 10px;
  border: 1px solid #1875d1;
}
.el-table .cell,
.el-table th div,
.el-table--border td:first-child .cell,
.el-table--border th:first-child .cell {
  // padding-left: 26px;
  font-size: 10px;
}

.el-table th {
  padding: 0px;
}
.el-table td {
  padding: 10px 0;
}
.el-table--border {
  margin-top: 16px;
}

// adddayassesment 过度动画
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    // transform: translateX(0px);
    opacity: 0;
  }
  100% {
    // transform: translateX(-100%);
    opacity: 1;
  }
}
</style>
