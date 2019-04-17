<template>
  <div class="box">
    <Menu active-key="1-2" width="auto" :open-keys="['1']" v-if="!isfull">
      <Submenu key="1" name="first">
        <template slot="title">系统管理</template>
        <Menu-item key="1-1" name="1-1" class="secendlist">
          <Icon type="md-people"/>用户管理
        </Menu-item>
        <Menu-item key="1-2" name="1-2" class="secendlist">
          <Icon type="md-menu"/>菜单管理
        </Menu-item>
        <Menu-item key="1-3" name="1-3" class="secendlist">
          <Icon type="ios-settings"/>告警配置
        </Menu-item>
        <Menu-item key="1-4" name="1-4" class="secendlist">
          <Icon type="ios-copy"/>操作日志
        </Menu-item>
      </Submenu>
      <Submenu key="2" name="secend">
        <template slot="title">OTT视频卡顿分析</template>
        <Menu-iten Key="2-1" name="secendlist1">
          <Menu :open-keys="['2-1-1']" width="auto">
            <Submenu key="2-1-1" name="secend1">
              <template slot="title">
                <div class="secendlist">
                  <Icon type="md-folder"/>
                  视频卡顿实时分析
                </div>
              </template>
              <Menu-item key="2-1-1" name="2-1-1" class="thirdlist">
                <Icon type="ios-paper-outline"/>关键指标监控
              </Menu-item>
              <Menu-item key="2-1-2" name="2-1-2" class="thirdlist">
                <Icon type="ios-paper-outline"/>智能调度
              </Menu-item>
              <Menu-item key="2-1-3" name="2-1-3" class="thirdlist">
                <Icon type="ios-paper-outline"/>CDN服务器质量监控
              </Menu-item>
              <Menu-item key="2-1-4" name="2-1-4" class="thirdlist">
                <Icon type="ios-paper-outline"/>实时卡顿用户分析
              </Menu-item>
              <Menu-item key="2-1-5" name="2-1-5" class="thirdlist">
                <Icon type="ios-paper-outline"/>实时综合分析
              </Menu-item>
            </Submenu>
          </Menu>
        </Menu-iten>
        <Menu-iten v-for="(t,i) in count" :key="i" name="secendlist">
          <Menu :open-keys="['2-'+(i+2)+'-1']" width="auto" @on-select="cons">
            <Submenu :key="'2-'+(i+2)+'-1'" name="secend1">
              <template slot="title">
                <div class="secendlist">
                  <Icon type="md-folder"/>
                  视频卡顿日志分析（{{t}}）
                </div>
              </template>
              <Menu-item :key="'2-'+(i+2)+'-1'" :name="'2-'+(i+2)+'-1'" class="thirdlist">
                <Icon type="ios-paper-outline"/>综合卡顿分析
              </Menu-item>
              <Menu-item :key="'2-'+(i+2)+'-2'" :name="'2-'+(i+2)+'-2'" class="thirdlist">
                <Icon type="ios-paper-outline"/>终端卡顿分析
              </Menu-item>
              <Menu-item :key="'2-'+(i+2)+'-3'" :name="'2-'+(i+2)+'-3'" class="thirdlist">
                <Icon type="ios-paper-outline"/>内容卡顿分析
              </Menu-item>
              <Menu-item :key="'2-'+(i+2)+'-4'" :name="'2-'+(i+2)+'-4'" class="thirdlist">
                <Icon type="ios-paper-outline"/>CDN节点卡顿分析
              </Menu-item>
              <Menu-item :key="'2-'+(i+2)+'-5'" :name="'2-'+(i+2)+'-5'" class="thirdlist">
                <Icon type="ios-paper-outline"/>区域卡顿分析
              </Menu-item>
              <Menu-item :key="'2-'+(i+2)+'-6'" :name="'2-'+(i+2)+'-6'" class="thirdlist">
                <Icon type="ios-paper-outline"/>盒子厂商卡顿分析
              </Menu-item>
              <Menu-item :key="'2-'+(i+2)+'-7'" :name="'2-'+(i+2)+'-7'" class="thirdlist">
                <Icon type="ios-paper-outline"/>内容厂商卡顿分析
              </Menu-item>
            </Submenu>
          </Menu>
        </Menu-iten>
      </Submenu>
    </Menu>
  </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      count: [
        "全部",
        "衢州",
        "杭州",
        "宁波",
        "绍兴",
        "金华",
        "湖州",
        "温州",
        "台州",
        "嘉兴",
        "丽水",
        "舟山"
      ]
    };
  }
};
</script>
<style scoped>
.lefttitle {
  width: 100%;
  height: 30px;
  padding: 0 12px;
  margin-top: 20px;
}
.getback {
  animation: myfirst 1s;
  animation-fill-mode: forwards;
}
.getout {
  animation: other 1s;
  animation-fill-mode: forwards;
}
.content {
  width: 85%;
  height: 100%;
  background: white;
}
.leftbox {
  position: relative;
  height: 650px;
}
.isbig {
  transform: scale(1.15, 1);
  transition: all 1s;
  position: relative;
  animation: bebig 1s;
  animation-fill-mode: forwards;
}
.issmall {
  transform: scale(1, 1);
  transition: all 1s;
  position: relative;
  animation: besmall 1s;
  animation-fill-mode: forwards;
}
.contentTit {
  width: 100%;
  height: 40px;
  padding: 0 10px;
  border-bottom: 1px solid #aaa;
}
.secendlist {
  margin-left: 25px;
}
.thirdlist {
  margin-left: 50px;
}
.box {
  padding: 20px 40px;
}
</style>
<style>
.ivu-menu-submenu-title {
  padding: 14px 5px !important;
}
/* .ivu-menu-submenu-title .ivu-menu-submenu-title-icon {
  display: none;
} */
.ivu-menu-item {
  padding-left: 10px !important;
}
</style>
