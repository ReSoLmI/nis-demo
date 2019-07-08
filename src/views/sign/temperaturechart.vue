<template>
  <!-- 体征 ==>体温单 -->

  <div class="tem">
    <img src="../../../static/image/12121/Tem.png" alt>
    <div
      style="position:absolute;right:-1px;top:200px;width: 23px;height: 126px;font-size: 14px;text-align: center;border:1px solid #ccc;    border-radius: 10px 0 0 10px;"
      @click="openArticalShow"
      v-show="sidebarShow"
    >
      录入
      <
      <
      打
      印
    </div>
    <div
      class="TemInput"
      v-show="articalShow"
      style="position:absolute;right:0;top:0;z-index:10000"
    >
      <div
        style="position:absolute;right:159px;top:213px;width: 23px;height: 126px;font-size: 14px;text-align: center;border:1px solid #ccc;    border-radius: 10px 0 0 10px;"
        @click="closeArticalShow"
      >
        录入
        >
        >
        打
        印
      </div>
      <div class="top">
        <div
          style="width:100px;height:30px;font-size:12px;line-height:30px;text-align:center;maigin-left:28px;margin-top:30px;background: #eee;margin-left: 28px;"
          @click="jump"
        >录入</div>
      </div>
      <div class="middle">
        <p style="height:30px;line-height:30px; text-align:center; font-size:12px;">缩&nbsp;&nbsp;放</p>
        <p style="height:30px;line-height:30px; text-align:center; font-size:12px;">
          系数：
          <el-select v-model="nurse" placeholder="1" style="margin-left:10px;">
            <el-option
              v-for="item in indexlist"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </p>
        <p style="height:24px;line-height:24px;  font-size:14px; margin-left:40px; font-size:10px;">
          <input type="radio">适应高度
        </p>

        <p
          style="height:24px;line-height:24px;  font-size:14px; margin-left:40px;  font-size:10px;"
        >
          <input type="radio">实际大小
        </p>
      </div>
      <div class="bottom">
        <p
          style="height:46px;line-height:46px;text-align:center;font-size:13px;border-bottom:1px solid #ccc"
        >打印</p>
        <el-tree
          :data="data2"
          show-checkbox
          node-key="id"
          :default-checked-keys="[2,3,4,5]"
          :props="defaultProps"
        ></el-tree>
        <div class="btnbottom" style="position:absolute;bottom:85px;left:0;">
          <div
            style="display:inline-block;width:40px;height:30px;line-height:30px;text-align:center;background:#ccc;border-right2px solid #fff;"
            @click="chooseAll"
          >全选</div>
          <div
            style="display:inline-block;width:114px;height:30px;line-height:30px;text-align:center;background:#ccc;"
          >打印</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from "axios";
export default {
  data() {
    return {
      nurse: "",
      articalShow: false,
      sidebarShow: true,
      indexlist: [
        {
          value: "选项1",
          label: "1"
        },
        {
          value: "选项2",
          label: "2"
        },
        {
          value: "选项3",
          label: "3"
        }
      ],
      data2: [
        {
          id: 1,
          label: "第11周"
        },
        {
          id: 2,
          label: "第10周"
        },
        {
          id: 3,
          label: "第09周   满页"
        },
        {
          id: 4,
          label: "第08周   满页"
        },
        {
          id: 5,
          label: "第07周   满页"
        },
        {
          id: 6,
          label: "第06周   缺页"
        },
        {
          id: 7,
          label: "第05周"
        },
        {
          id: 8,
          label: "第04周"
        },
        {
          id: 9,
          label: "第03周   满页"
        },
        {
          id: 10,
          label: "第02周"
        },
        {
          id: 11,
          label: "第01周"
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },

  mounted() {},

  methods: {
    openArticalShow() {
      this.articalShow = true;
      this.sidebarShow = !this.sidebarShow;
    },
    closeArticalShow() {
      this.articalShow = false;
      this.sidebarShow = !this.sidebarShow;
    },
    jump() {
      // console.log(3);
      // console.log(window.location.pathname);
      this.$emit("show-temevent");
    },
    chooseAll() {}
  }
};
</script>

<style type="text/css" lang="scss" >
.tem {
  border: 1px solid #ccc;
  height: 750px;
  // position: relative;
}
.TemInput {
  width: 160px;
  height: 800px;
  .top {
    border: 1px solid #ccc;
    width: 160px;
    height: 100px;
  }
  .middle {
    width: 160px;
    height: 110px;
    // background: #ddd;
    border: 1px solid #ccc;
    position: relative;
  }
  .bottom {
    width: 160px;
    height: 500px;
    // background: #ccc;
    border: 1px solid #ccc;
  }
  .el-tree :nth-child(6) {
    color: #f00;
  }
  .bottom .el-tree-node {
    padding: 5px !important;
  }
}
</style>
