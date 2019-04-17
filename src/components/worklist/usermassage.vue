<template>
  <div class="box">
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
        <Icon type="md-folder" color="#57a3f3"/>
        <span>保存</span>
      </div>
      <div>
        <Icon type="md-close" color="#57a3f3"/>
        <span>取消</span>
      </div>
      <div>
        <Icon type="md-lock" color="#57a3f3"/>
        <span>锁定</span>
      </div>
      <div>
       <Icon type="md-key" color="#57a3f3"/>
        <span>解锁</span>
      </div>
      <div>
         <Icon type="md-sync" color="#57a3f3"/>
        <span>密码重置</span>
      </div>
    </div>
    <Tableuse :columns="columns" :data="tabledata" :num="num" single=14></Tableuse>
  </div>
</template>

<script>
import Tableuse from "../table.vue";
export default {
  name: "Title",
  data() {
    return {
      columns: [
        {
          title: "",
          key: "index"
        },
        {
          title: "登录名",
          key: "name"
        },
        {
          title: "手机",
          key: "phone"
        },
        {
          title: "Email",
          key: "email"
        },
        {
          title: "失效时间",
          key: "time"
        },
        {
          title: "菜单权限",
          key: "admin"
        }
      ],
      num: 0,
      tabledata: [
        {
          index: {
            title: "1",
            selected: false,
          },
          name: {
            title: "1",
            selected: false,
          },
          age: {
            title: "2",
            selected: false,
          },
          email: {
            title: "3",
            selected: false,
          },
          time: {
            title: "4",
            selected: false,
          },
          admin: {
            title: "5",
            selected: false,
          }
        }
      ],
      issave: true
    };
  },
  methods: {
    adduser() {
      if (!this.issave) {
        this.$Message.warning({
          content: "请保存后再新增"
        });
        return;
      }
      this.num++;
      this.issave = false;
      if (this.tabledata.length > 11) {
        this.tabledata = [
          {
            index: {
              title: this.sum,
              selected: false,
              key: "index"
            },
            name: {
              title: "",
              selected: false,
              key: "name"
            },
            age: {
              title: "",
              selected: false,
              key: "phone"
            },
            email: {
              title: "",
              selected: false,
              key: "email"
            },
            time: {
              title: "",
              selected: false,
              key: "time"
            },
            admin: {
              title: "",
              selected: false,
              key: "admin"
            }
          }
        ];
        return;
      }
      this.tabledata.push({
        index: {
          title: this.num + 1,
          selected: false,
          key: "index"
        },
        name: {
          title: "",
          selected: false,
          key: "name"
        },
        age: {
          title: "",
          selected: false,
          key: "phone"
        },
        email: {
          title: "",
          selected: false,
          key: "email"
        },
        time: {
          title: "",
          selected: false,
          key: "time"
        },
        admin: {
          title: "",
          selected: false,
          key: "admin"
        }
      });
    },
    saveuser() {
      this.issave = true;
    }
  },
  components: {
    Tableuse
  }
};
</script>
<style scoped>
.box {
  width: 100%;
}
.title > div {
  width: 100px;
  display: flex;
  align-items: center;
  cursor: pointer
}
.title {
  width: 100%;
  height: 40px;
  padding-left: 15px;
  border-bottom: 1px solid #ccc;
}
.title span {
  margin-left: 5px;
}
</style>