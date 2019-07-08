<template>
  <!-- 护理 ==>护理记录（智能推送版本） -->

  <div>
    <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="搜索">
        <el-input v-model="formInline.search" placeholder="搜索"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>-->
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
        <!-- <span class="print">打印</span> -->
        <el-button @click="isShow=!isShow">打印</el-button>
      </div>
    </el-row>
    <el-table
      :data="tableData"
      border
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :span-method="arraySpanMethod"
      style="width: 100%"
    >
      <el-table-column prop="province" label="生成时间" width="90"></el-table-column>
      <el-table-column prop="city" label="问题" width="90"></el-table-column>
      <el-table-column prop="zone" label="目标" width="150"></el-table-column>
      <el-table-column prop="remake" label="评价" width="150">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input class="edit-input" size="small" v-model="scope.row.remake"></el-input>
          </template>
          <span v-else>{{ scope.row.remake }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="publicSubsidy" label="评价时间" width="150">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input class="edit-input" size="small" v-model="scope.row.publicSubsidy"></el-input>
          </template>
          <span v-else>{{ scope.row.publicSubsidy }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="provinceSubsidy" label="评价人" width="150">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input class="edit-input" size="small" v-model="scope.row.provinceSubsidy"></el-input>
          </template>
          <span v-else>{{ scope.row.provinceSubsidy }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="citySubsidy" label="措施" width="350">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input class="edit-input" size="small" v-model="scope.row.citySubsidy"></el-input>
          </template>
          <span v-else>{{ scope.row.citySubsidy }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="cityPeople" label="创建人" width="150">
        <template slot-scope="scope">
          <template v-if="scope.row.edit">
            <el-input class="edit-input" size="small" v-model="scope.row.cityPeople"></el-input>
          </template>
          <span v-else>{{ scope.row.cityPeople }}</span>
        </template>
      </el-table-column>
      <!-- <el-table-column align="center" label="Actions" width="200">
        <template slot-scope="scope">
          <el-button
            v-if="scope.row.edit"
            type="success"
            @click="confirmEdit(scope.row)"
            size="small"
            icon="el-icon-circle-check-outline"
          >Ok</el-button>
          <el-button
            v-if="scope.row.edit"
            class="cancel-btn"
            size="small"
            icon="el-icon-refresh"
            type="warning"
            @click="cancelEdit(scope.row)"
          >cancel</el-button>
          <el-button
            v-else
            type="primary"
            @click="scope.row.edit=!scope.row.edit"
            size="small"
            icon="el-icon-edit"
          >Edit</el-button>
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "city",
  data() {
    return {
      tableData: [], // table的数据
      originalData: [], // table数据备份
      timeArr: [], // 生成时间要合并数组 [2,0,1,3,0,0] 代表第一二行合并,第三行不变,第四五六行合并,0代表原本的那一行被合并,因此这个列被消除
      timePos: 0, // 生成时间要合并数组内容的序号
      proArr: [], // 同上 问题
      proPos: [],
      targetArr: [], // 同上 目标
      targetPos: [],
      fourArr: [],
      fourPos: [],
      fiveArr: [],
      fivePos: [],
      sixArr: [],
      sixPos: [],
      eightArr: [],
      eightPos: [],
      formInline: {
        // form表单
        search: ""
      },
      loading: false,
      pickerOptions2: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value6: "",
      value7: ""
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.loading = true;
      axios
        .get("./static/tablelist.json")
        .then(res => {
          this.loading = false;
          this.tableData = res.data.map((v, index) => {
            this.$set(v, "edit", false); // 增加一个新的属性

            // 可以修改的属性值,进行添加一个对应的原本值
            v.originalRemake = v.remake;
            v.originalPublicS = v.publicSubsidy;
            v.originalProvinceS = v.provinceSubsidy;
            v.originalCityS = v.citySubsidy;
            return v;
          });
          this.originalData = this.tableData;
          this.merage(); // 合并的方法
        })
        .catch(e => {
          console.log(e);
        });
    },
    // cancelEdit(row) {
    //   //取消编辑,把原本值进行覆盖回来
    //   row.remake = row.originalRemake;
    //   row.publicSubsidy = row.originalPublicS;
    //   row.provinceSubsidy = row.originalProvinceS;
    //   row.citySubsidy = row.originalCityS;
    //   row.edit = false;
    //   this.$message({
    //     message: "The title has been restored to the original value",
    //     type: "warning"
    //   });
    // },
    // confirmEdit(row) {
    //   row.edit = false;

    //   //把新的值,覆盖原本值,以防再次修改
    //   row.originalRemake = row.remake;
    //   row.originalPublicS = row.publicSubsidy;
    //   row.originalProvinceS = row.provinceSubsidy;
    //   row.originalCityS = row.citySubsidy;
    //   this.$message({
    //     message: "The title has been edited",
    //     type: "success"
    //   });
    // },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        // 第一列的合并方法,生成时间
        const _row_1 = this.timeArr[rowIndex];
        const _col_1 = _row_1 > 0 ? 1 : 0; // 如果被合并了_row=0则它这个列需要取消
        return {
          rowspan: _row_1,
          colspan: _col_1
        };
      } else if (columnIndex === 1) {
        // 第二列的合并方法,问题
        const _row_2 = this.proArr[rowIndex];
        const _col_2 = _row_2 > 0 ? 1 : 0;
        return {
          rowspan: _row_2,
          colspan: _col_2
        };
      } else if (columnIndex === 2) {
        // 第三列的合并方法,目标
        const _row_3 = this.targetArr[rowIndex];
        const _col_3 = _row_3 > 0 ? 1 : 0;
        return {
          rowspan: _row_3,
          colspan: _col_3
        };
      } else if (columnIndex === 3) {
        // 第四列的合并方法,评价
        const _row_4 = this.fourArr[rowIndex];
        const _col_4 = _row_4 > 0 ? 1 : 0;
        return {
          rowspan: _row_4,
          colspan: _col_4
        };
      } else if (columnIndex === 4) {
        // 第五列的合并方法,
        const _row_5 = this.fourArr[rowIndex];
        const _col_5 = _row_5 > 0 ? 1 : 0;
        return {
          rowspan: _row_5,
          colspan: _col_5
        };
      } else if (columnIndex === 5) {
        // 第六列的合并方法,
        const _row_6 = this.fourArr[rowIndex];
        const _col_6 = _row_6 > 0 ? 1 : 0;
        return {
          rowspan: _row_6,
          colspan: _col_6
        };
      } else if (columnIndex === 7) {
        // 第八列的合并方法,
        const _row_8 = this.fourArr[rowIndex];
        const _col_8 = _row_8 > 0 ? 1 : 0;
        return {
          rowspan: _row_8,
          colspan: _col_8
        };
      }
    },
    merage() {
      // 要合并的数组的方法
      this.merageInit();
      for (var i = 0; i < this.tableData.length; i++) {
        if (i === 0) {
          // 第一行必须存在
          this.timeArr.push(1);
          this.timePos = 0;

          this.proArr.push(1);
          this.proPos = 0;
          this.targetArr.push(1);
          this.targetPos = 0;
          this.fourArr.push(1);
          this.fourPos = 0;
          this.fiveArr.push(1);
          this.fivePos = 0;
          this.sixArr.push(1);
          this.sixPos = 0;
          this.eightArr.push(1);
          this.eightPos = 0;
        } else {
          // 判断当前元素与上一个元素是否相同 this.provincePos是provinceArr内容的序号

          // 生成时间
          if (this.tableData[i].province === this.tableData[i - 1].province) {
            this.timeArr[this.timePos] += 1;
            this.timeArr.push(0);
          } else {
            this.timeArr.push(1);
            this.timePos = i;
          }

          // 问题
          if (
            this.tableData[i].city === this.tableData[i - 1].city &&
            this.tableData[i].province === this.tableData[i - 1].province
          ) {
            this.proArr[this.proPos] += 1;
            this.proArr.push(0);
          } else {
            this.proArr.push(1);
            this.proPos = i;
          }

          // 目标
          if (
            this.tableData[i].zone === this.tableData[i - 1].zone &&
            this.tableData[i].city === this.tableData[i - 1].city &&
            this.tableData[i].province === this.tableData[i - 1].province
          ) {
            this.targetArr[this.targetPos] += 1;
            this.targetArr.push(0);
          } else {
            this.targetArr.push(1);
            this.targetPos = i;
          }

          // 第四列
          if (
            this.tableData[i].remake === this.tableData[i - 1].remake &&
            this.tableData[i].zone === this.tableData[i - 1].zone &&
            this.tableData[i].city === this.tableData[i - 1].city &&
            this.tableData[i].province === this.tableData[i - 1].province
          ) {
            this.fourArr[this.targetPos] += 1;
            this.fourArr.push(0);
          } else {
            this.fourArr.push(1);
            this.fourPos = i;
          }
          // 第五列
          if (
            this.tableData[i].remake === this.tableData[i - 1].publicSubsidy &&
            this.tableData[i].remake === this.tableData[i - 1].remake &&
            this.tableData[i].zone === this.tableData[i - 1].zone &&
            this.tableData[i].city === this.tableData[i - 1].city &&
            this.tableData[i].province === this.tableData[i - 1].province
          ) {
            this.fiveArr[this.targetPos] += 1;
            this.fiveArr.push(0);
          } else {
            this.fiveArr.push(1);
            this.fivePos = i;
          }
          // 第六列
          if (
            this.tableData[i].remake ===
              this.tableData[i - 1].provinceSubsidy &&
            this.tableData[i].remake === this.tableData[i - 1].publicSubsidy &&
            this.tableData[i].remake === this.tableData[i - 1].remake &&
            this.tableData[i].zone === this.tableData[i - 1].zone &&
            this.tableData[i].city === this.tableData[i - 1].city &&
            this.tableData[i].province === this.tableData[i - 1].province
          ) {
            this.sixArr[this.targetPos] += 1;
            this.sixArr.push(0);
          } else {
            this.sixArr.push(1);
            this.sixPos = i;
          }
          // 第八列
          if (
            this.tableData[i].remake === this.tableData[i - 1].cityPeople &&
            this.tableData[i].remake ===
              this.tableData[i - 1].provinceSubsidy &&
            this.tableData[i].remake === this.tableData[i - 1].publicSubsidy &&
            this.tableData[i].remake === this.tableData[i - 1].remake &&
            this.tableData[i].zone === this.tableData[i - 1].zone &&
            this.tableData[i].city === this.tableData[i - 1].city &&
            this.tableData[i].province === this.tableData[i - 1].province
          ) {
            this.eightArr[this.targetPos] += 1;
            this.eightArr.push(0);
          } else {
            this.eightArr.push(1);
            this.eightPos = i;
          }
        }
      }
    },
    merageInit() {
      // 初始化生成时间、问题、目标、......的合并行的数组
      this.timeArr = [];
      this.timePos = 0;
      this.proArr = [];
      this.proPos = 0;
      this.targetArr = [];
      this.targetPos = 0;
      this.fourArr = [];
      this.fourPos = 0;
      this.fiveArr = [];
      this.fivePos = 0;
      this.sixArr = [];
      this.sixPos = 0;
      this.eightArr = [];
      this.eightPos = 0;
    }
    // onSubmit() {
    //   const filterData = this.originalData; //每次过滤之前都要把筛选之前的tableData重置
    //   this.tableData = filterData.filter(value => {
    //     if (
    //       this.formInline.search === value.province ||
    //       this.formInline.search === value.city ||
    //       this.formInline.search === value.zone
    //     ) {
    //       return value;
    //     } else if (this.formInline.search === "") {
    //       return value;
    //     } else if (
    //       value.province.includes(this.formInline.search) ||
    //       value.city.includes(this.formInline.search) ||
    //       value.zone.includes(this.formInline.search)
    //     ) {
    //       return value;
    //     }
    //   });
    //   this.merage();
    // }
  }
};
</script>
<style  type="text/css" lang="scss"  scoped>
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
</style>
