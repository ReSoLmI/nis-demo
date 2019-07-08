<template>
  <div>
    <navbar>
      <i class="iconfont icon-category" @click="isShow=!isShow"></i>
    </navbar>
    <sidebar :show="isShow" @kerwinevent="isShow=false"></sidebar>
    <!-- 路由容器 -->

    <section>
      <router-view></router-view>
    </section>
  </div>
</template>

<script type="text/javascript">
import navbar from "./views/common/navbar";
import sidebar from "./views/common/sidebar";
// ES6的方式 导出
export default {
  data() {
    return {
      isShow: false
    };
  },
  components: {
    navbar,
    sidebar
  }
};
</script>

<style lang="scss" >
.kerwinactive {
  background-color: rgb(107, 179, 221);
}

* {
  margin: 0px;
  padding: 0px;
}

html,
body {
  height: 100%;
}

ul {
  list-style: none;
}

section {
  position: relative;
  top: 50px;
}
</style>
