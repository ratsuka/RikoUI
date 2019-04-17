<template>
  <div>
    <div class="header between">
      <h2>家宽电视CDN智能分析系统 1.4.0</h2>
      <div class="flex">
        <span>告警:</span>
        <div class="circle"></div>
        <span>风格</span>
        <Dropdown @on-click="changeStyleType" style="width:75px">
          <a>
            {{styleType}}
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name='metro'>metro</DropdownItem>
            <DropdownItem name='dark'>dark</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <div class="test"></div>
        <span>{{username}}</span>
        <div class="test"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      styleType: "metro",
      username:1233211
    };
  },
  methods: {
    changeStyleType(e) {
      this.styleType = e;
    }
  }
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 70px;
  padding: 0 20px;
  background: #10101a;
  color: white;
  font-size: 15px;
}
.header a {
  color: white;
}
.header span{
  margin: 0 3px 0 15px;
}
.circle {
  width: 11px;
  height: 11px;
  background: -webkit-radial-gradient(
    #66ee44,
    #5ace3b,
    green
  ); /* Safari 5.1 - 6.0 */
  background: -o-radial-gradient(
    #66ee44,
    #5ace3b,
    green
  ); /* Opera 11.6 - 12.0 */
  background: -moz-radial-gradient(
    #66ee44,
    #5ace3b,
    green
  ); /* Firefox 3.6 - 15 */
  background: radial-gradient(#66ee44, #5ace3b, green); /* 标准的语法 */
  border-radius: 50%;
  animation: myfirst 2s;
  animation-iteration-count: infinite;
}
@keyframes myfirst {
  from {
    box-shadow: 0 0 10px #66ee44;
  }
  to {
  }
}
</style>