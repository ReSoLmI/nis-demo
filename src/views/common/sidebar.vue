<template>
  <!-- 左侧大菜单 -->
  <!-- <transition name="bounce"> -->
  <aside class="aside">
    <ul @click="handleClick()" id="asideUL" style="margin-top: -17px;">
      <router-link to="/home" tag="li" activeClass="kerwinactive">床位</router-link>
      <!-- 床位 -->
      <router-link to="/card" tag="li" activeClass="kerwinactive">患者</router-link>
      <!-- 患者 -->
      <router-link to="/film" tag="li" activeClass="kerwinactive">病区</router-link>
      <!-- 病区 -->
      <router-link
        to="/cish"
        tag="li"
        activeClass="kerwinactive"
        style=" padding: 9px;border-right: 1px solid #ccc;width: 13px;height: 78px !important;line-height: 78px;background: #eee;border-bottom:1px solid #eee;"
      ></router-link>
      <router-link
        to="/bish"
        tag="li"
        activeClass="kerwinactive"
        style=" padding: 9px;border-right: 1px solid #ccc;width: 13px;height: 78px !important;line-height: 78px;background: #eee;border-bottom:1px solid #eee;"
      ></router-link>
      <router-link
        to="/bish"
        tag="li"
        activeClass="kerwinactive"
        style=" padding: 9px;border-right: 1px solid #ccc;width: 13px;height: 78px !important;line-height: 78px;background: #eee;border-bottom:1px solid #eee;"
      ></router-link>
    </ul>
  </aside>
  <!-- </transition> -->
</template>

<script type="text/javascript">
export default {
  props: ["show"],
  methods: {
    handleClick() {
      this.$emit("kerwinevent"); // 触发kerwinevent;
      // 床号、患者、病区、管理、统计、提醒
    }
  }
};
</script>

<style type="text/css" lang="scss" scoped>
aside {
  position: fixed;
  margin-top: 0px;
  width: 5%;
  height: 100%;
  top: 40px;
  left: 0px;
  color: #000;
  z-index: 100;
  text-align: center;
  li {
    padding: 9px;
    border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    width: 13px;
    height: 78px !important;
    line-height: 39px;
    background: #eee;
  }
  .kerwinactive {
    background: rgb(255, 204, 102);
  }
}
</style>
