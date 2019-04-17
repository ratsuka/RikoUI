<template>
  <div class="layout">
    <Header></Header>
    <div class="between" style="height:650px">
      <div class="layout-content leftbox" :class="{'getback':isfull,'getout':isgetback}">
        <div class="lefttitle between" @click="changefull">
          <div class="center">
            <Icon type="md-filing" color="#92580E" style="margin-right:5px"/>
            <div>系统菜单</div>
          </div>
          <Icon :type="isfull?'ios-arrow-back':'ios-arrow-forward'"/>
        </div>
        <Menu active-key="1-2" width="auto" :open-keys="['1']" v-if="!isfull" @on-select="cons">
          <Submenu key="1" name="first">
            <template slot="title">系统管理</template>
            <Menu-item key="1-1" name="1-1">
              <Icon type="md-people"/>用户管理
            </Menu-item>
            <Menu-item key="1-2" name="1-2">
              <Icon type="md-menu"/>菜单管理
            </Menu-item>
            <Menu-item key="1-3" name="1-3">
              <Icon type="ios-settings"/>告警配置
            </Menu-item>
            <Menu-item key="1-4" name="1-4">
              <Icon type="ios-copy"/>操作日志
            </Menu-item>
          </Submenu>
          <Submenu key="2" name="secend">
            <template slot="title">OTT视频卡顿分析</template>
            <Menu-iten Key="2-1" name="secendlist1">
              <Menu :open-keys="['2-1-1']" width="auto" @on-select="cons">
                <Submenu key="2-1-1" name="secend1">
                  <template slot="title">
                    <Icon type="md-folder"/>视频卡顿实时分析
                  </template>
                  <Menu-item key="2-1-1" name="2-1-1">
                    <Icon type="ios-paper-outline"/>关键指标监控
                  </Menu-item>
                  <Menu-item key="2-1-2" name="2-1-2">
                    <Icon type="ios-paper-outline"/>智能调度
                  </Menu-item>
                  <Menu-item key="2-1-3" name="2-1-3">
                    <Icon type="ios-paper-outline"/>CDN服务器质量监控
                  </Menu-item>
                  <Menu-item key="2-1-4" name="2-1-4">
                    <Icon type="ios-paper-outline"/>实时卡顿用户分析
                  </Menu-item>
                  <Menu-item key="2-1-5" name="2-1-5">
                    <Icon type="ios-paper-outline"/>实时综合分析
                  </Menu-item>
                </Submenu>
              </Menu>
            </Menu-iten>
            <Menu-iten v-for="(t,i) in count" :key="i" name="secendlist">
              <Menu :open-keys="['2-'+(i+2)+'-1']" width="auto" @on-select="cons">
                <Submenu :key="'2-'+(i+2)+'-1'" name="secend1">
                  <template slot="title">
                    <Icon type="md-folder"/>
                    视频卡顿日志分析（{{t}}）
                  </template>
                  <Menu-item :key="'2-'+(i+2)+'-1'" :name="'2-'+(i+2)+'-1'">
                    <Icon type="ios-paper-outline"/>综合卡顿分析
                  </Menu-item>
                  <Menu-item :key="'2-'+(i+2)+'-2'" :name="'2-'+(i+2)+'-2'">
                    <Icon type="ios-paper-outline"/>终端卡顿分析
                  </Menu-item>
                  <Menu-item :key="'2-'+(i+2)+'-3'" :name="'2-'+(i+2)+'-3'">
                    <Icon type="ios-paper-outline"/>内容卡顿分析
                  </Menu-item>
                  <Menu-item :key="'2-'+(i+2)+'-4'" :name="'2-'+(i+2)+'-4'">
                    <Icon type="ios-paper-outline"/>CDN节点卡顿分析
                  </Menu-item>
                  <Menu-item :key="'2-'+(i+2)+'-5'" :name="'2-'+(i+2)+'-5'">
                    <Icon type="ios-paper-outline"/>区域卡顿分析
                  </Menu-item>
                  <Menu-item :key="'2-'+(i+2)+'-6'" :name="'2-'+(i+2)+'-6'">
                    <Icon type="ios-paper-outline"/>盒子厂商卡顿分析
                  </Menu-item>
                  <Menu-item :key="'2-'+(i+2)+'-7'" :name="'2-'+(i+2)+'-7'">
                    <Icon type="ios-paper-outline"/>内容厂商卡顿分析
                  </Menu-item>
                </Submenu>
              </Menu>
            </Menu-iten>
          </Submenu>
        </Menu>
      </div>
      <div class="content" :class="{'isbig':isfull,'issmall':isgetback}">
        <div class="contentTit flex">
          <span>{{listindex[0]}}</span>
          <Icon type="ios-arrow-forward"/>
          <span>{{listindex[1]}}</span>
          <Icon type="ios-arrow-forward" v-if="listindex[2]"/>
          <span>{{listindex[2]}}</span>
        </div>
        <User v-if="listindex[1]=='用户管理'"></User>
        <MenuMsg v-else-if="listindex[1]=='菜单管理'"></MenuMsg>
        <ErrorMsg v-else-if="listindex[1]=='告警配置'"></ErrorMsg>
        <WorkMsg v-else-if="listindex[1]=='操作日志'"></WorkMsg>
        <StopNow v-else-if="listindex[2]=='实时卡顿用户分析'"></StopNow>
        <Adjust v-else-if="listindex[2]=='智能调度'"></Adjust>
        <IndexTable v-else></IndexTable>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import User from "../components/worklist/usermassage.vue";
import MenuMsg from "../components/worklist/munemassage.vue";
import ErrorMsg from "../components/worklist/errormassage.vue";
import WorkMsg from "../components/worklist/workmassage.vue";
import StopNow from "../components/OTTvideo/vediostopnow.vue";
import Adjust from "../components/OTTvideo/adjustment.vue";
import IndexTable from "../components/OTTvideo/index.vue"
export default {
  name: "home",
  components: {
    Header,
    User,
    MenuMsg,
    ErrorMsg,
    WorkMsg,
    StopNow,
    Adjust,
    IndexTable
  },
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
      ],
      isfull: false,
      isgetback: false,
      listindex: ["OTT视频卡顿分析", "视频卡顿实时分析", "关键指标监控"]
    };
  },

  methods: {
    changefull() {
      this.isgetback = this.isfull ? true : false;
      this.isfull = this.isfull ? false : true;
    },
    cons(k) {
      let arr = k.split("-");
      console.log(arr);
      let arr1 = ["用户管理", "菜单管理", "告警配置", "操作日志"],
        arr2 = [
          "综合卡顿分析",
          "终端卡顿分析",
          "内容卡顿分析",
          "CDN节点卡顿分析",
          "区域卡顿分析",
          "盒子厂商卡顿分析",
          "内容厂商卡顿分析"
        ],
        arr3 = [
          "关键指标监控",
          "智能调度",
          "CDN服务器质量监控",
          "实时卡顿用户分析",
          "实时综合分析"
        ];
      if (arr[0] == 1) {
        this.listindex = ["系统管理", arr1[arr[1] - 1]];
        return;
      }
      if (arr[1] == 1) {
        this.listindex = [
          "OTT视频卡顿分析",
          "视频卡顿实时分析",
          arr3[arr[2] - 1]
        ];
        return;
      }
      this.listindex = [
        "OTT视频卡顿分析",
        `视频卡顿日志分析（${this.count[arr[1] - 2]})`,
        arr2[arr[2] - 1]
      ];
    }
  }
};
</script>
<style scoped>
.layout-content {
  height: 100%;
  overflow-y: auto;
  position: relative;
  overflow-x: hidden;
  background: #fff;
  width: 250px;
  border-right: 1px solid #aaa;
}
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
@keyframes myfirst {
  from {
    left: 0px;
  }
  to {
    left: -220px;
  }
}
@keyframes other {
  from {
    left: -220px;
  }
  to {
    left: 0px;
  }
}
@keyframes bebig {
  from {
    left: 0px;
  }
  to {
    left: -125px;
  }
}
@keyframes besmall {
  from {
    left: -125px;
  }
  to {
    left: 0px;
  }
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
  position: relative;
  animation: bebig 1s;
  animation-fill-mode: forwards;
}
.issmall {
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
</style>
<style>
.ivu-menu-submenu-title {
  padding: 14px 5px !important;
}
.ivu-menu-item {
  padding-left: 10px !important;
}
.ivu-dropdown-item {
  width: 30px;
}
.ivu-dropdown-item:hover {
  background: white !important;
}
</style>
