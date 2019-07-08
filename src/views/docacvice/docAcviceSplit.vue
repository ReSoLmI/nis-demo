<template>
  <!-- 病区 ==> 医嘱拆分 -->
  <div>
    <div style="height:40px;background:#F3F3F3;border:1px solid #ccc">
      <div
        style="display:inline-block;width:80px;height:24px;margin-top:2px;margin-left:10px;background:#363636;color:#fff;border-radius:20px;text-align:center;line-height:24px;"
      >医嘱拆分</div>
      <div
        style="display:inline-block;width:140px;height:20px;margin-top:10px;margin-left:10px;border-right:1px solid #ccc; text-align:center;line-height:20px;font-size:12px;"
      >
        您拆分出了标签
        <span style="color:#f00">102</span> 张
      </div>
      <div
        style="display:inline-block;width:100px;height:20px;margin-top:10px;margin-left:10px;line-height:20px;font-size:12px;"
      >
        <span style="color:#FFC963;padding-right:20px">今日</span>
        明日
      </div>
      <div class="split-block" style="display:inline-block;">
        <el-date-picker
          v-model="split_block_value"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </div>
      <div class="split-select" style="display:inline-block;">
        <select class="split-input-select" style="width:100px;height:26px;margin-left:20px;">
          <option value="volvo">未打印</option>
          <option value="saab">已打印</option>
        </select>
        <select class="split-input-select" style="width:100px;height:26px;">
          <option value="volvo">静滴</option>
          <option value="saab">皮下注射</option>
          <option value="saab">静推</option>
          <option value="saab">肌注</option>
        </select>
      </div>
      <div
        style="display:inline-block;width:140px;height:20px;margin-top:10px;margin-left:10px;border-right:1px solid #ccc; text-align:center;line-height:20px;font-size:12px;"
      >
        共有标签
        <span style="color:#f00">102</span> 张
      </div>
      <div
        style="display:inline-block;width:80px;height:24px;margin-left:10px;background:#F3F3F3;border:1px solid #ccc;border-radius:20px;text-align:center;line-height:24px;"
      >全部打印</div>
    </div>
    <div class="split-main" style="display:flex">
      <div
        class="split-main-left"
        style="width:150px;border:1px solid #ccc;height:600px;background:#E4E4E4"
      >
        <div
          style="height:30px;border-bottom:1px solid #ccc;font-size:12px;line-height:30px;text-align:center;background:#F0F2F5;"
        >全部患者</div>
        <ul>
          <li style="font-weight:600">001床 张伟</li>
          <li>002床 王伟</li>
          <li>003床 王芳</li>
          <li>004床 李伟</li>
          <li>005床 王秀英</li>
        </ul>
      </div>
      <div class="split-main-right" style="flex:1;border:1px solid #ccc;height:679px;">
        <div class="split-main-right-mini" v-for="item,index in patientList">
          <p
            style="margin-top:10px;text-indent:10px"
          >{{item.deptName}} &nbsp;&nbsp;&nbsp;&nbsp;{{item.bedNo}}床</p>
          <img src="../../../static/image/12121/erweima.png" alt>
          <p
            style="text-indent:10px;margin-top:10px;margin-bottom:10px"
          >{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.visitCardNo}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.supplyName}}</p>
          <hr>
          <div class="split-main-right-mini-bottom">
            <div v-for="dataitem,index in item.drug" style>
              <p
                style="margin-top:10px;text-indent:10px"
              >
              <div style="display:inline-block;width:150px;text-indent:10px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{dataitem.drugDescr}}</div>
              <div style="display:inline-block;width:50px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{dataitem.dosage}} {{dataitem.dosageUnit}}</div>
              <div style="display:inline-block;width:30px;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;">{{dataitem.frequencyCode}}</div>
             </p>
            </div>
          </div>

          <hr style>
          <p
            style="margin-top:10px;text-indent:10px"
          >{{item.startTime}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.remark}}</p>
        </div>
        <!-- <img src="../../static/image/12121/list.png" alt style="margin-left:20px;margin-top:20px;"> -->
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import axios from 'axios'
export default {
  data () {
    return {
      split_block_value: [
        new Date(2019, 5, 15, 0, 0),
        new Date(2019, 5, 16, 23, 50)
      ],
      patientList: [] // 医嘱拆分列表
    }
  },

  mounted () {
    axios.get('/api/nurse/advice').then(res => {
      this.patientList = res.data
      console.log(this.patientList)
    })
  },

  methods: {}
}
</script>

<style type="text/css" lang="scss" scoped>
.split-main-left {
  ul {
    li {
      height: 40px;
      border-bottom: 1px solid #ccc;
      font-size: 12px;
      line-height: 40px;
      text-align: center;
    }
  }
}
.split-main-right {
  font-size: 12px;
  .split-main-right-mini {
    float: left;
    margin: 10px;
    width: 240px;
    height: 200px;
    border: 1px solid #ccc;
    position: relative;
    img {
      position: absolute;
      right: 13px;
      top: 9px;
    }
    .split-main-right-mini-bottom {
      height: 84px;
    }
  }
}
</style>
