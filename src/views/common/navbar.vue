<template>
  <!-- 抬头行 -->
  <nav style="height:22px;line-height:22px;font-size:14px;">
    <div class="left">
      <slot></slot>
      <span>智慧医疗</span>
    </div>

    <div class="right">
      <span class="right-time">时间：2019年06月01日 12:29:22</span>
      <span class="right-departments">消化内科&nbsp;∨</span>

      <span class="right-time">张护士&nbsp;∨</span>
    </div>
  </nav>
</template>

<script type="text/javascript">
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},

  methods: {
    closePatient() {
      this.$router.push({
        path: "/home"
      });
    }
  }
};
</script>

<style type="text/css" lang="scss" scoped>
nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 40px;
  background: orange;
  line-height: 40px;
  color: white;
  z-index: 10;
  .left {
    float: left;
    margin-left: 50px;
  }

  .right {
    float: right;
  }
  .right-time {
    margin-right: 20px;
  }
  .right-departments {
    margin-right: 40px;
  }
}
</style>
