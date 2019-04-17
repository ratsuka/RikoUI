<template>
  <div class="box">
    <Form :model="formItem" style="border-bottom:1px solid #ccc;" :label-width="80">
      <FormItem label="IP地址：">
        <Input v-model="formItem.ip" placeholder="" style="width:200px"/>
      </FormItem>
      <FormItem label="用户名：">
        <Input v-model="formItem.user" placeholder="" style="width:200px"/>
      </FormItem>
      <FormItem label="时间段:">
        <DatePicker type="datetime" placeholder="选择起始时间" v-model="formItem.startTime"/>
        <span>&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <DatePicker type="datetime" placeholder="选择结束时间" v-model="formItem.endTime"/>
      </FormItem>
      <FormItem>
        <Button icon="ios-search">查询</Button>
        <Button style="margin-left: 8px" icon="ios-sync">重置</Button>
        <Button style="margin-left: 8px" icon="ios-search">模糊查询</Button>
        <Button style="margin-left: 8px" icon="ios-folder">导出结果</Button>
      </FormItem>
    </Form>
    <Tab :columns="columns" :data="data" :num="num" :single="5" readonly></Tab>
  </div>
</template>
<script>
import Tab from "../table.vue";
export default {
  data() {
    return {
      formItem: {
        ip: "",
        user: "",
        startTime: "",
        endTime: ""
      },
      columns: [
        {
          title: "用户名",
          key: "user"
        },
        {
          title: "客户端IP",
          key: "ip"
        },
        {
          title: "操作时间",
          key: "timer"
        },
        {
          title: "操作",
          key: "work"
        }
      ],
      num: 0,
      data: [
        {
          user: {
            title: "1",
            selected: false,
            key: "user"
          },
          ip: {
            title: "1",
            selected: false,
            key: "ip"
          },
          time: {
            title: "2",
            selected: false,
            key: "timer"
          },
          work: {
            title: "3",
            selected: false,
            key: "work"
          }
        }
      ]
    };
  },
  components: {
    Tab
  },
  methods: {}
};
</script>
<style scoped>
.box {
  margin: 0.5rem;
}
</style>
