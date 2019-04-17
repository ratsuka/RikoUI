<template>
  <div class="box">
    <Form :model="formItem" style="border-bottom:1px solid #ccc;" :label-width="80">
      <FormItem label="告警标题：">
        <Input v-model="formItem.title" placeholder="OTT告警"/>
      </FormItem>
      <FormItem label="告警内容：" style="margin-top:-10px">
        <CheckboxGroup v-model="formItem.checkbox">
          <Checkbox label="质差时间点"></Checkbox>
          <Checkbox label="所属节点"></Checkbox>
          <Checkbox label="质差服务器IP"></Checkbox>
          <Checkbox label="质差盒子数占比"></Checkbox>
          <Checkbox label="影响区域占比"></Checkbox>
          <Checkbox label="CDN服务器合格率"></Checkbox>
          <Checkbox label="CDN节点合格率"></Checkbox>
          <Checkbox label="卡顿用户数"></Checkbox>
          <Checkbox label="总卡顿次数"></Checkbox>
          <Checkbox label="直播卡顿次数"></Checkbox>
          <Checkbox label="点播卡顿次数"></Checkbox>
          <Checkbox label="播放失败次数"></Checkbox>
          <Checkbox label="回看卡顿次数"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem>
        <Button type="primary">保存</Button>
        <Button style="margin-left: 8px">取消</Button>
      </FormItem>
    </Form>
    <div class="penwrite">
      <Button type="primary" icon="md-create" style="position:absolute;right:20px;top:10px;" @click="changesend">编辑发送人信息</Button>
    </div>
    <div class="title flex">
      <div @click="adduser">
        <Icon type="md-add" color="#57a3f3"/>
        <span>新增</span>
      </div>
      <div>
        <Icon type="md-remove" color="#57a3f3"/>
        <span>删除</span>
      </div>
      <div @click="saveuser">
        <Icon type="md-create" color="#57a3f3"/>
        <span>修改</span>
      </div>
    </div>
    <Tab :columns="columns" :data="data" :num="num" :single="3"></Tab>
    <Modal v-model="isusershow" title="新增" ok-text="保存" @on-ok="addemail">
      <h4>收件人信息</h4>
      <Form :model="user">
        <FormItem label="地区：">
          <Input v-model="user.address"/>
        </FormItem>
        <FormItem label="告警邮箱：">
          <Input v-model="user.email" placeholder="多个邮箱地址，用英文逗号分开"/>
        </FormItem>
      </Form>
    </Modal>
    <Modal v-model="issendshow" title="编辑发件人信息" ok-text="保存" @on-ok="addsendpeo">
      <h4>发件人信息</h4>
      <Form :model="send">
        <FormItem label="发件人邮箱地址：">
          <Input v-model="send.email"/>
        </FormItem>
        <FormItem label="发件人邮箱密码:">
          <Input v-model="send.psw" type="password"/>
        </FormItem>
        <FormItem label="发送邮箱服务器:">
          <Input v-model="send.potato" />
        </FormItem>
        <FormItem label="端口:">
          <Input v-model="send.d" style="width:60px"/>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>
<script>
import Tab from "../table.vue";
export default {
  data() {
    return {
      formItem: {
        checkbox: [],
        title: ""
      },
      user: {
        address: "",
        email: ""
      },
      columns: [
        {
          title: "地区",
          key: "address"
        },
        {
          title: "告警邮箱地址",
          key: "email"
        }
      ],
      send:{
        email:'',
        psw:'',
        potato:'',
        d:''
      },
      num: 0,
      data: [
        {
          address: {
            title: "杭州",
            selected: false,
            key: "address"
          },
          email: {
            title: "999@123.cc",
            selected: false,
            key: "email"
          }
        }
      ],
      issave: true,
      isusershow: false,
      issendshow:false
    };
  },
  components: {
    Tab
  },
  methods: {
    adduser() {
      this.isusershow = true;
      return;
    },
    addemail() {
      if(!this.user.address){
         this.$Message.error('地区为必填项');
         return;
      }
      if(!this.user.email){
         this.$Message.error('告警邮箱为必填项');
         return;
      }
      this.data.push({
        address: {
          title: this.user.address,
          selected: false,
          key: "address"
        },
        email: {
          title: this.user.email,
          selected: false,
          key: "email"
        }
      });
      this.user = {};
    },
    saveuser() {
      this.issave = true;
    },
    changesend(){
      this.issendshow=true
    },
    addsendpeo(){
      
    }
  }
};
</script>
<style scoped>
.box {
  margin: 0.5rem;
}
.penwrite {
  height: 100px;
  width: 100%;
  position: relative;
  border-bottom: 1px solid #ccc;
}
.title > div {
  width: 80px;
  display: flex;
  align-items: center;
}
.title {
  width: 100%;
  height: 40px;
  padding-left: 15px;
}
.title span {
  margin-left: 3px;
}
</style>
