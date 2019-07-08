<template>
  <!-- sidebar ==>床位 -->

  <div v-if="simple">
    <ul style="margin-top: -18px;">
      <li class="chut">我的患者&nbsp;4</li>
      <li class="hubt">全部患者&nbsp;26</li>
      <li class="style-right">护理等级 v</li>
      <li class="style-right">新病人2</li>
      <li class="style-right">高危压疮3</li>
      <li class="style-right">高危跌倒3</li>
      <li class="style-right">约束具3</li>
      <li class="style-right">导管2 v</li>
      <li class="style-right">新医嘱3</li>
      <li class="style-right">体温异常2</li>
    </ul>
    <img
      src="../../static/image/C1.png"
      style="position:relative;top: -26px;left: 70px;"
      class="fl-r"
      @click="changemode"
    />

    <div style="width:1334px; height:863px;">
      <div
        class="bedlist"
        style="width:1152px;height:800px;border:1px solid #ccc;position: relative;top: 0px;margin-left:40px;"
      >
        <div
          class="cardz"
          style="width:250px;height:120px;border:1px solid #ccc;margin:18px;display:inline-block;border-radius:7px ;cursor:pointer"
          v-for=" item,index in bedData"
          @click="changemodetocard"
        >
          <div
            :class="{ 'class-b': item.sign === '1', 'class-a': item.sign === '2' ,'class-c': item.sign === '3' ,'class-d': item.sign === '4'}"
            style="height:7px;border-radius:7px;"
          ></div>
          <div>
            <div
              :class="{ 'class-e': item.sign === '1', 'class-f': item.sign === '2' ,'class-g': item.sign === '3' ,'class-h': item.sign === '4'}"
              style="width:44px;height:28px;margin-top:15px;margin-left:10px;line-height:28px;text-align:center;font-size:26px;display:inline-block;"
            >{{item.patIndexNo}}</div>
            <p
              style="width:100px;height:24px;display:inline-block;position: relative;top: -7px;text-indent:10px;font-size:20px;color:#666666"
            >{{item.name}}</p>
            <p
              style="width:190px;height:16px;font-size:14px;position: relative;top: -7px;left: 59px;color:#666"
            >
              {{item.mrn}}&nbsp;&nbsp;&nbsp;{{item.sex}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.age}}
              <span
                style="font-size:10px;color:#00f;margin-left:7px;"
              >more></span>
            </p>
          </div>
          <div
            style="width:220px;height:30px;border-top:1px dashed #ccc;margin-top: 10px;margin-left: 15px;"
          >
            <ul style="height: 20px;width: 215px;margin-left: 5px;margin-top: 14px;">
              <li
                v-for="data ,index in item.signlist"
                style="height: 18px;width:20px;margin-top:0px;
                border: none;border-right:1px solid #ccc;padding:0 5px;line-height:18px;"
                :class="{ 'class-i': data === '新', 'class-j': data === '特' ,'class-k': data=== '管' ,'class-l': data === '嘱','class-m': data === '跌','class-n': data === 'Ⅲ','class-o': data === 'Ⅰ','class-p': data=== 'Ⅱ','class-q': data === '疮','class-r': data === '束','class-s': data === '温'}"
              >{{data}}</li>
            </ul>
          </div>
          <div
            style="width:28px;height:24px;background:#f00;color:#fff;line-height:15px;text-align:center;    position: relative;top: -93px;left: 223px;    border-radius: 12px 0 0 12px;"
          >4</div>
        </div>
      </div>
    </div>
  </div>

  <div v-else style="margin-left:32px">
    <ul class="else-ul" style="margin-top: -17px;">
      <li class="chut">我的患者&nbsp;4</li>
      <li class="hubt">全部患者&nbsp;26</li>
      <li class="style-right">护理等级 v</li>
      <li class="style-right">新病人2</li>
      <li class="style-right">高危压疮3</li>
      <li class="style-right">高危跌倒3</li>
      <li class="style-right">约束具3</li>
      <li class="style-right">导管2 v</li>
      <li class="style-right">新医嘱3</li>
      <li class="style-right">体温异常2</li>
    </ul>
    <img
      src="../../static/image/C1.png"
      style="position:relative;position:relative;top: -26px;left: 70px;"
      class="fl-r"
      @click="changemode"
    />
    <div @click="changemodetocard">
      <el-table
        :data="tableData3"
        height="530"
        class="table"
        :header-cell-style="{
        'text-align':'center',
        'color':'#000',
        'font-size':'12px',
        'font-weight':'300',
        'background':'#eee'
        }"
      >
        <el-table-column prop="number" label="床号↓" width="60"></el-table-column>
        <el-table-column prop="name" label="姓名" width="60"></el-table-column>
        <el-table-column prop="sex" label="性别" width="50"></el-table-column>
        <el-table-column prop="age" label="年龄" width="50"></el-table-column>
        <el-table-column prop="mrn" label="MRN" width="60"></el-table-column>
        <el-table-column prop="history" label="过敏史" width="80"></el-table-column>
        <el-table-column prop="time" label="入院时间" width="80"></el-table-column>
        <el-table-column prop="doctor" label="主治医生" width="80"></el-table-column>
        <el-table-column prop="level" label="护理级别" width="80"></el-table-column>
        <el-table-column prop="diagnose" label="诊断" width="180"></el-table-column>
        <el-table-column prop="food" label="饮食" width="180"></el-table-column>
        <el-table-column prop="insurance" label="医保费别" width="80"></el-table-column>
        <el-table-column prop="fees" label="预缴款项" width="80"></el-table-column>
        <el-table-column prop="total" label="费用合计" width="100"></el-table-column>
        <el-table-column prop="tel" label="联系电话" width="100"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script type="text/javascript">
import "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";

import { Indicator } from "mint-ui";

import axios from "axios"; //
export default {
  data() {
    return {
      simple: true,
      list: [],
      bedData: [],
      tableData3: [
        {
          number: "001",
          name: "张伟",
          sex: "男",
          age: "60岁",
          mrn: "90821234",
          history: "头孢",
          time: "06-1",
          doctor: "李医生",
          level: "二级",
          diagnose: "累及循环和呼吸系统特指症状和体征。",
          food: "清淡为主",
          insurance: "医保病人",
          fees: "8000",
          total: "6634.23",
          tel: "176-1208-1520"
        },
        {
          number: "002",
          name: "王伟",
          sex: "男",
          age: "50岁",
          mrn: "87651234",
          history: "青霉素",
          time: "06-26",
          doctor: "赵医生",
          level: "三级",
          diagnose: "特指症状和体征。",
          food: "清淡为主，忌辛辣、生冷",
          insurance: "医保病人",
          fees: "1000",
          total: "534.23",
          tel: "188-6008-1000"
        },
        {
          number: "003",
          name: "王芳",
          sex: "女",
          age: "18岁",
          mrn: "12345678",
          history: "头孢",
          time: "04-15",
          doctor: "陈医生",
          level: "一级",
          diagnose: "系统特指症状和体征。",
          food: "清淡为主，忌辛辣、生冷",
          insurance: "医保病人",
          fees: "9000",
          total: "9534.23",
          tel: "180-6888-1990"
        },
        {
          number: "004",
          name: "李伟",
          sex: "男",
          age: "69岁",
          mrn: "90049362",
          history: "青霉素",
          time: "06-10",
          doctor: "王医生",
          level: "一级",
          diagnose: "累及循环和呼吸系统特指症状和体征。",
          food: "清淡为主，忌辛辣、生冷",
          insurance: "医保病人",
          fees: "3000",
          total: "2534.23",
          tel: "186-6808-1520"
        },
        {
          number: "005",
          name: "王秀英",
          sex: "男",
          age: "69岁",
          mrn: "90049362",
          history: "青霉素",
          time: "06-10",
          doctor: "王医生",
          level: "一级",
          diagnose: "累及循环和指症状和体征。",
          food: "清淡为主，忌辛辣、生冷",
          insurance: "医保病人",
          fees: "3000",
          total: "2534.23",
          tel: "186-6808-1520"
        },
        {
          number: "006",
          name: "李娜",
          sex: "男",
          age: "69岁",
          mrn: "90049362",
          history: "青霉素",
          time: "06-10",
          doctor: "王医生",
          level: "一级",
          diagnose: "累及循环和呼吸系统特指症状和体征。",
          food: "清淡为主，忌辛辣、生冷",
          insurance: "医保病人",
          fees: "3000",
          total: "2534.23",
          tel: "186-6808-1520"
        },
        {
          number: "007",
          name: "张秀英",
          sex: "女",
          age: "10岁",
          mrn: "90049362",
          history: "青霉素",
          time: "06-10",
          doctor: "王医生",
          level: "一级",
          diagnose: "累及循环和呼吸系统特指症状和体征。",
          food: "清淡为主，忌辛辣、生冷",
          insurance: "医保病人",
          fees: "3000",
          total: "2534.23",
          tel: "186-6808-1520"
        },
        {
          number: "08",
          name: "刘伟",
          sex: "男",
          age: "99岁",
          mrn: "90044462",
          history: "青霉素",
          time: "06-10",
          doctor: "任医生",
          level: "四级",
          diagnose: "累及循环和呼吸系统特指症状和体征。",
          food: "清淡为主，忌辛辣、生冷",
          insurance: "医保病人",
          fees: "3000",
          total: "2534.23",
          tel: "186-6808-1520"
        }
      ]
    };
  },

  components: {
    swipe: Swipe,
    "swipe-item": SwipeItem // 组件注册
  },

  mounted() {
    this.$store.commit("myChangeTitle", "");
  },
  created() {
    this.init();
  },
  methods: {
    changemode() {
      console.log(123);
      this.simple = !this.simple;
    },
    changemodetocard() {
      this.$emit("initevent");
      this.$router.push({
        path: "/card/"
      });
    },
    init() {
      axios
        .get("../../static/bedlist.json")
        .then(res => {
          this.loading = false;
          this.bedData = res.data;
          console.log(this.bedData);
        })
        .catch(e => {
          console.log(e);
        });
    }
  }
};
</script>

<style type="text/css" lang="scss" scoped>
.class-a {
  background: #ffbe00;
}
.class-b {
  background: #f00;
}
.class-c {
  background: #e9d395;
}
.class-d {
  background: #b823fd;
}
.class-e {
  color: #ffbe00;
}
.class-f {
  color: #f00;
}
.class-g {
  color: #e9d395;
}
.class-h {
  color: #b823fd;
}
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

ul {
  float: left;
  display: flex;
  margin-left: 32px;
  li {
    width: 100px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border: 1px solid #eee;
    font-size: 14px;
    margin-top: -10px;
  }
}

.chut {
  background: #eee;
}
.hubt {
  color: #ffc963;
}
.style-right {
  color: #bbb;
}
.else-ul {
  margin-left: 0px;
}
.cardz:hover {
  box-shadow: 0px 0px 8px 8px #ccc;
}
</style>
