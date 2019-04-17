<template>
  <div class="box">
    <Tabs v-model="listname">
      <TabPane label="实时卡顿用户分析"></TabPane>
      <TabPane label="重点机顶盒监控"></TabPane>
    </Tabs>
    <Row>
      <Col span="5">
        <div>
          <span>时间：</span>
          <br>
          <DatePicker type="date"/>
        </div>
        <div>
          <span>模式：</span>
          <br>
          <i-switch size="large" v-model="type">
            <span slot="open">普通查询</span>
            <span slot="close" style="color:#515a6e">实时更新</span>
          </i-switch>
        </div>
      </Col>
      <Col span="5">
        <div>
          <span>机顶盒号:</span>
          <Input
            type="textarea"
            :autosize="{minRows: 4,maxRows: 4}"
            placeholder="样例：
    机顶盒号1
    机顶盒号2
    机顶盒号3"
            style="width:200px"
          />
        </div>
      </Col>
      <Col span="5" class-name="column">
        <div>
          <span>卡顿原因：</span>
          <Select v-model="reasoncode" style="width:200px" :disabled="!type">
            <Option v-for="item in reason" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <div>
          <span>所属节点：</span>
          <Select v-model="belongtocode" style="width:200px" :disabled="!type">
            <Option v-for="item in belongto" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
      </Col>
      <Col span="5">
        <div>
          <Button icon="ios-search" size="large">查询</Button>
        </div>
        <div>
          <Button
            icon="ios-settings"
            size="large"
            type="primary"
            @click="pullsetting"
            v-if="listname"
          >配置</Button>
        </div>
      </Col>
    </Row>
    <Tab :columns="columns" :data="data" :num="num" :single="5" readonly @choiced="bechoiced"></Tab>
    <Modal v-model="istableshow" title="新增" footer-hide width="1000">
      <div class="modeltitle flex">
        <div class="flex">
          <span>时间：</span>
          <DatePicker type="date" style="width:200px"/>
        </div>
        <div class="flex">
          <span>内容名称：</span>
          <Input style="width:200px"/>
        </div>
        <Button icon="ios-search" type="primary" style="margin-left: 20px">查询</Button>
        <Button style="margin-left: 8px" icon="ios-search" type="primary">模糊查询</Button>
      </div>
      <Tab :columns="timecolumns" :num="num" :single="5" readonly style="height:400px;"></Tab>
    </Modal>
    <Modal v-model="settinglistshow" title="重点机顶盒监视列表" footer-hide width="1000">
      <div class="modeltitle flex">
        <div class="flex">
          <span>所属节点：</span>
          <Select v-model="belongtocode" style="width:200px">
            <Option v-for="item in belongto" :value="item.value" :key="item.value">{{ item.label }}</Option>
          </Select>
        </div>
        <Button icon="md-add" type="primary" style="margin-left: 20px">增加</Button>
        <Button style="margin-left: 8px" icon="md-create" type="primary">修改</Button>
        <Button style="margin-left: 8px" icon="md-remove" type="primary">删除</Button>
      </div>
      <Tab :columns="settinglist" :num="num" :single="5" style="height:400px;"></Tab>
    </Modal>
  </div>
</template>
<script>
import Tab from "../table.vue";
export default {
  data() {
    return {
      type: false,
      listname: 0,
      reason: [
        {
          value: 1,
          label: "全部"
        },
        {
          value: 2,
          label: "CDN服务器故障"
        },
        {
          value: 3,
          label: "其他网络或终端原因"
        }
      ],
      reasoncode: "",
      belongto: [
        {
          value: 1,
          label: "全部"
        },
        {
          value: 2,
          label: "杭州"
        },
        {
          value: 3,
          label: "绍兴"
        },
        {
          value: 4,
          label: "宁波"
        },
        {
          value: 5,
          label: "湖州"
        },
        {
          value: 6,
          label: "丽水"
        },
        {
          value: 7,
          label: "衢州"
        },
        {
          value: 8,
          label: "金华"
        },
        {
          value: 9,
          label: "温州"
        },
        {
          value: 10,
          label: "舟山"
        },
        {
          value: 11,
          label: "嘉兴"
        },
        {
          value: 12,
          label: "台州"
        }
      ],
      belongtocode: "",
      settinglistshow: false,
      columns: [
        {
          title: "机顶盒号",
          key: "card"
        },
        {
          title: "所属节点",
          key: "ip"
        },
        {
          title: "所属厂商",
          key: "shop"
        },
        {
          title: "所属区域",
          key: "area"
        },
        {
          title: "卡顿次数",
          key: "times"
        },
        {
          title: "卡顿原因定位建议",
          key: "reason"
        },
        {
          title: "最新卡顿/播放失败的时间",
          key: "errortime"
        }
      ],
      data: [
        {
          card: {
            title: "1",
            selected: false
          },
          ip: {
            title: "2",
            selected: false
          },
          shop: {
            title: "2",
            selected: false
          },
          area: {
            title: "3",
            selected: false
          },
          times: {
            title: "4",
            selected: false
          },
          reason: {
            title: "5",
            selected: false
          },
          errortime: {
            title: "5",
            selected: false
          }
        }
      ],
      num: 0,
      istableshow: false,
      timecolumns: [
        {
          title: "时间",
          key: "timer"
        },
        {
          title: "内容名称",
          key: "content"
        },
        {
          title: "所属厂商",
          key: "shop"
        },
        {
          title: "视频类型",
          key: "type"
        },
        {
          title: "错误类型",
          key: "errortype"
        },
        {
          title: "访问的服务器IP",
          key: "ip"
        }
      ],
      settinglist: [
        {
          title: "所属节点",
          key: "ip"
        },
        {
          title: "重点监控机顶盒",
          key: "important"
        }
      ]
    };
  },
  components: {
    Tab
  },
  methods: {
    bechoiced(i) {
      console.log(i);
      this.istableshow = true;
    },
    pullsetting() {
      this.settinglistshow = true;
    }
  },
  mounted() {}
};
</script>
 <style scoped>
.box {
  padding-top: 10px;
  width: 100%;
  height: 100%;
}
.column {
  flex-direction: column !important;
}
.modeltitle > div {
  margin-left: 10px;
}
</style>
<style>
.ivu-switch,
.ivu-switch-inner {
  width: 80px !important;
}
.ivu-switch-large.ivu-switch-checked::after {
  left: 60px !important;
}
.ivu-col-span-5 > div {
  padding: 5px 10px;
}
.ivu-tabs-tabpane {
  height: 1px;
}
</style>
