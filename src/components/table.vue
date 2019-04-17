<template>
  <div class="box" @click="closeall">
    <table>
      <tr style="height:40px">
        <th v-for="(tem,num) in columns" :key="num" :class="tem.key=='index'?'moresmall':''">{{tem.title}}</th>
      </tr>
      <tr v-for="(t,i) in data" :key="i" @click.stop="changecase(i)">
        <td v-for="(item,k) in t" :key="k" @dblclick="changemsg(i,k,true)" :class="item.key=='index'?'moresmall':''">
          <DatePicker
            v-if="k=='time'"
            class="titleipt"
            v-model="item.title"
            type="datetime"
            format="yyyy-MM-dd HH:mm"
            :disabled="item.selected?false:true"
          ></DatePicker>
          <div v-else-if="k=='index'||readonly">{{item.title}}</div>
          <div v-else-if="k=='admin'">
            <div class="center">
              <Button type="primary">设置权限</Button>
              <Button type="primary" style="margin-left:5px">地市权限</Button>
            </div>
            <!-- <span>最高权限</span> -->
          </div>
          <Input
            v-else
            v-model="item.title"
            class="titleipt"
            :class="k"
            :disabled="item.selected?false:true"
            @on-blur="changemsg(i,k,false)"
            @dblclick="changemsg(i,k,true)"
          />
        </td>
      </tr>
    </table>
    <div style="position:absolute;bottom:10px;right:20px">
      <div style="float: right;">
        <Page :total="num" :current="Math.floor(num/single)+1"></Page>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    changemsg(i, k, j) {
      this.data[i][k].selected = j;
    },
    closeall() {
      for (let i = 0; i < this.data.length; i++) {
        for (let k in this.data[i]) {
          this.data[i][k].selected = false;
        }
      }
      let tr = document.getElementsByTagName("tr");
      for (let j = 1; j < tr.length; j++) {
        tr[j].style.cssText = "background:white";
      }
    },
    changecase(i) {
      this.$emit('choiced',i);
      let tr = document.getElementsByTagName("tr");
      for (let j = 1; j < tr.length; j++) {
        if (j == i + 1) {
          tr[j].style.cssText = "background:#ebf7ff";
        } else {
          tr[j].style.cssText = "background:white";
        }
      }
    }
  },
  props: {
    columns: Array,
    data: Array,
    num: Number,
    single:Number,
    readonly:{
      type:Boolean,
      default:()=>{
        return false
      }
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  margin: 5px 0!important;
}
table {
  width: 100%;
  border-collapse: collapse;
}
table,
td,
th {
  border: 1px solid #e8eaec;
}
.moresmall{
  width: 50px;
}
td {
  text-align: center;
  height: 40px;
  font-size: 12px;
  color: #2c3e50;
}
.titleipt {
  width: 95%;
  padding-left: 10px;
  text-align: center;
}
tr:first-child {
  background: white !important;
}
</style>
<style>
.ivu-input[disabled] {
  pointer-events: none;
  background: none !important;
  border: 1px solid rgba(255, 255, 255, 0);
  color: #515a6e !important;
}
</style>

