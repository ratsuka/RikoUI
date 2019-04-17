<template>
  <div>
    <Steps :current="current" style="margin:20px 80px">
      <Step title="手动|自动"></Step>
      <Step title="调度策略"></Step>
      <Step title="调度成功确认"></Step>
    </Steps>
    <div class="continer column" v-if="current==0">
      <div class="flex center intoarea">
        <span>调出节点：</span>
        <Select v-model="belongtocode" style="width:200px">
          <Option v-for="item in belongto" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <RadioGroup v-model="ip" style="margin-left:30px">
          <Radio label="1">
            <span>流量占比</span>
            <Input style="width:40px;margin:0 5px"/>
            <span>%</span>
          </Radio>
          <Radio label="2">
            <span>全部地址段</span>
          </Radio>
        </RadioGroup>
      </div>
      <div class="flex center intoarea">
        <span>调入节点：</span>
        <CheckboxGroup v-model="intoip">
          <Checkbox label="1">省中心</Checkbox>
          <Checkbox label="2">杭州</Checkbox>
          <Checkbox label="3">宁波</Checkbox>
          <Checkbox label="4">嘉兴</Checkbox>
          <Checkbox label="5">绍兴</Checkbox>
          <Checkbox label="6">丽水</Checkbox>
          <Checkbox label="7">温州</Checkbox>
          <Checkbox label="8">金华</Checkbox>
          <Checkbox label="9">舟山</Checkbox>
          <Checkbox label="10">衢州</Checkbox>
          <Checkbox label="11">台州</Checkbox>
          <Checkbox label="12">湖州</Checkbox>
        </CheckboxGroup>
      </div>
      <Button type="primary" style="width:500px;" @click="changecarrunt(1)">下一步</Button>
    </div>
    <div class="continer center" v-else-if="current==1">
      <Button style="width:200px;" @click="changecarrunt(0)">上一步</Button>
      <Button type="primary" style="width:200px;margin-left:8px" @click="changecarrunt(2)">完成</Button>
      <Button style="width:200px;margin-left:8px">调度策略表</Button>
    </div>
    <Tab :columns="arealist" :num="num" :single="5" style="height:400px;" v-if="current<2"></Tab>
  </div>
</template>
<script>
import Tab from "../table.vue";
export default {
  data() {
    return {
      current: 0,
      ip: "",
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
      intoip: [],
      arealist: [
        {
          title: "时间",
          key: "timer"
        },
        {
          title: "地市",
          key: "area"
        },
        {
          title: "上行流量（GB）",
          key: "up"
        },
        {
          title: "下行流量（GB）",
          key: "down"
        },
        {
          title: "待调出流量（GB）",
          key: "upd"
        },
        {
          title: "可流入流量（GB）",
          key: "downd"
        }
      ],
      num: 0
    };
  },
  components: {
    Tab
  },
  methods: {
    changecarrunt(i) {
      this.current = i;
    }
  },
  mounted() {}
};
</script>
 <style scoped>
.continer {
  width: 100%;
  margin: 25px 0;
}
.intoarea {
  margin: 25px 0;
}
</style>