<template>
  <div style="background:#00013B;color: white;font-size: 11px;height:930px">
    <Row>
      <Col span="7">
        <div class="box" style="height:300px">
          <div style="height:60px" class="center">
            <span>所属节点：</span>
            <Select v-model="belongtocode" style="width:100px">
              <Option
                v-for="item in belongto"
                :value="item.value"
                :key="item.value"
              >{{ item.label }}</Option>
            </Select>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;数据更新时间：13：00</span>
          </div>
          <div class="center">
            <circles text="50%" :beans="obeans[0]" lable="CDN卡顿率"></circles>
            <circles text="50%" :beans="obeans[1]" lable="CDN调整准确率"></circles>
          </div>
          <div class="center">
            <circles text="50%" :beans="obeans[2]" lable="热播频道覆盖率" style="margin-bottom:15px;"></circles>
            <circles text="50%" :beans="obeans[3]" lable="热播频道覆盖率" style="margin-bottom:15px;"></circles>
          </div>
        </div>
        <div class="border1 border"></div>
        <div class="border2 border"></div>
        <div class="border3 border"></div>
        <div class="border4 border"></div>
        <div>
          <div class="border1 border"></div>
          <div class="border2 border"></div>
          <div class="border3 border"></div>
          <div class="border4 border"></div>
          <div class="border5 border"></div>
          <div class="border6 border"></div>
          <div class="border7 border"></div>
          <div class="border8 border"></div>
        </div>
        <div class="box" style="height:130px;">
          <div class="visitedperson">
            <span>预览用户人数：</span>
            <span>6003</span>
          </div>
          <div class="visitedperson">
            <span>在线用户人数：</span>
            <span>6003</span>
          </div>
          <div class="visitedperson">
            <span>总用户人数：</span>
            <span>6003</span>
          </div>
        </div>
      </Col>
      <Col span="10">
        <div>
          <div class="border1 border"></div>
          <div class="border2 border"></div>
          <div class="border3 border"></div>
          <div class="border4 border"></div>
        </div>
        <div class="box column align">
          <div class="boxtext">
            <span>【</span>
            <span>节点分析设备运营拓扑</span>
            <span>】</span>
          </div>
          <div class="cap">
            <img src="../../assets/img/10%-30%/huzhou.png" class="huzhou">
            <img src="../../assets/img/10%-30%/hangzhou.png" class="hangzhou">
            <img src="../../assets/img/10%-30%/hengzhou.png" class="hengzhou">
            <img src="../../assets/img/10%-30%/jiaxing.png" class="jiaxing">
            <img src="../../assets/img/10%-30%/shaoxing.png" class="shaoxing">
            <img src="../../assets/img/10%-30%/jinhua.png" class="jinhua">
            <img src="../../assets/img/10%-30%/lishui.png" class="lishui">
            <img src="../../assets/img/10%-30%/zhoushan.png" class="zhoushan">
            <img src="../../assets/img/10%-30%/ningbo.png" class="ningbo">
            <img src="../../assets/img/10%-30%/taizhou.png" class="taizhou">
            <img src="../../assets/img/10%-30%/wenzhou.png" class="wenzhou">
          </div>
          <div class="column color between">
            <div class="flex center" style="width:100%;padding:0 20px;">
              <div class="flex">
                <div class="exa" style="background:#F55D5D"></div>
                <span>&gt;90%</span>
              </div>
              <div class="flex" style="justify-content: center">
                <div class="exa" style="background:#FC8D45"></div>
                <span>60%~90%</span>
              </div>
              <div class="flex" style="justify-content: flex-end">
                <div class="exa" style="background:#F1DD4F"></div>
                <span>30%~60%</span>
              </div>
            </div>
            <div class="flex center" style="width:100%;padding:0 20px;">
              <div class="flex">
                <div class="exa" style="background:#5FF157"></div>
                <span>&lt;10%</span>
              </div>
              <div class="flex" style="justify-content: center">
                <div class="exa" style="background:#51C1F9"></div>
                <span>10%~30%</span>
              </div>
              <div class="flex" style="justify-content: flex-end">
                <div class="exa" style="background:#989898"></div>
                <span>日志未上传</span>
              </div>
            </div>
          </div>
        </div>
      </Col>
      <Col span="7">
        <div>
          <div class="border1 border"></div>
          <div class="border2 border"></div>
          <div class="border3 border"></div>
          <div class="border4 border"></div>
        </div>
        <div class="box column align">
          <div class="boxtext">
            <span>【</span>
            <span>用户卡顿趋势图</span>
            <span style="color:white;">&nbsp;&nbsp;查看更多</span>
            <span>】</span>
          </div>
          <LineTab
            :rulers="rulers"
            :content="content"
            canvaswidth="300"
            startText="2019-04-01 19：00"
            endText="2019-04-01 21：00"
          ></LineTab>
          <div class="w10 flex center">
            <div class="column" style="margin-right:30px;">
              <div class="bor">
                <div class="borline" style="background:#00AEEF"></div>
                <div class="borcir" style="background:#00AEEF"></div>
              </div>
              <span>直播卡顿率</span>
            </div>
            <div class="column">
              <div class="bor">
                <div class="borline" style="background:#40C966"></div>
                <div class="borcir" style="background:#40C966"></div>
              </div>
              <span>点播卡顿率</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="7">
        <div>
          <div class="border1 border"></div>
          <div class="border2 border"></div>
          <div class="border3 border"></div>
          <div class="border4 border"></div>
        </div>
        <div class="box column tableline">
          <div class="boxtext">
            <span>【</span>
            <span>直播频道top10榜单</span>
            <span>】</span>
          </div>
          <Table :columns="table1" :data="data1" width="280" style="margin-top:20px;"></Table>
        </div>
      </Col>
      <Col span="10">
        <div>
          <div class="border1 border"></div>
          <div class="border2 border"></div>
          <div class="border3 border"></div>
          <div class="border4 border"></div>
        </div>
        <div class="box column tableline">
          <div class="boxtext">
            <span>【</span>
            <span>Top10告警列表</span>
            <span style="color:white;">&nbsp;&nbsp;查看更多</span>
            <span>】</span>
          </div>
           <Table :columns="table1" :data="data1" width="400" style="margin-top:20px;"></Table>
        </div>
      </Col>
      <Col span="7">
        <div>
          <div class="border1 border"></div>
          <div class="border2 border"></div>
          <div class="border3 border"></div>
          <div class="border4 border"></div>
        </div>
        <div class="box column align">
          <div class="boxtext">
            <span>【</span>
            <span>在线用户趋势图</span>
            <span style="color:white;">&nbsp;&nbsp;查看更多</span>
            <span>】</span>
          </div>
          <LineTab
            :rulers="rulers2"
            :content="content2"
            canvaswidth="300"
            startText="2019-04-01 19：00"
            endText="2019-04-01 21：00"
          ></LineTab>
          <div class="w10 flex center">
            <div class="column" style="margin-right:50px;">
              <div class="bor">
                <div class="borline" style="background:#7E84E6"></div>
                <div class="borcir" style="background:#7E84E6"></div>
              </div>
              <span>直播卡顿率</span>
            </div>
            <div class="column">
              <div class="bor">
                <div class="borline" style="background:#D1763A"></div>
                <div class="borcir" style="background:#D1763A"></div>
              </div>
              <span>点播用户数</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>
<script>
import circles from "../table/circle.vue";
import LineTab from "../table/line.vue";
export default {
  data() {
    return {
      obeans: [
        [
          {
            total: "30",
            color: "#F4A121"
          },
          {
            total: "70",
            color: "#D0D0D0"
          }
        ],
        [
          {
            total: "30",
            color: "#B500FB"
          },
          {
            total: "70",
            color: "#D0D0D0"
          }
        ],
        [
          {
            total: "30",
            color: "#4DA5F6"
          },
          {
            total: "70",
            color: "#D0D0D0"
          }
        ],
        [
          {
            total: "30",
            color: "#34D160"
          },
          {
            total: "70",
            color: "#D0D0D0"
          }
        ]
      ],
      rulers: ["0", "0.1%", "0.2%", "0.3%", "0.4%", "0.5%", "0.6%"],
      rulers2: ["0", "5000", "10000", "15000", "20000", "25000"],
      content: [
        {
          color: "#40C966",
          data: [3, 1, 2, 5, 0, 5, 3]
        },
        {
          color: "#00AEEF",
          data: [2, 3, 0, 2, 1, 3, 4]
        }
      ],
      content2: [
        {
          color: "#7E84E6",
          data: [3, 1, 2, 5, 0, 5, 3]
        },
        {
          color: "#D1763A",
          data: [2, 3, 0, 2, 1, 3, 4]
        }
      ],
      canvaswidth: 300,
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
      table1: [
        {
          title: "序号",
          key: "index"
        },
        {
          title: "内容名称",
          key: "name"
        },
        {
          title: "观看次数",
          key: "times"
        }
      ],
      data1: [
        {
          index: 1,
          name: "CCTV",
          times: 5
        },
        {
          index: 2,
          name: "CCTV1",
          times: 51
        }
      ]
    };
  },
  methods: {},
  mounted() {},
  components: {
    circles,
    LineTab
  }
};
</script>
 <style scoped>
.ivu-col-span-8 {
  height: 460px;
  margin-bottom: 10px;
}
.box {
  margin: 10px;
  border: 1px solid #3755da;
  height: 440px;
}
.border {
  width: 10px;
  height: 10px;
  margin: -1px;
}
.border1 {
  position: absolute;
  top: 11px;
  left: 11px;
  border-left: 2px solid #01dee9;
  border-top: 2px solid #01dee9;
}
.border2 {
  position: absolute;
  top: 11px;
  right: 11px;
  border-right: 2px solid #01dee9;
  border-top: 2px solid #01dee9;
}
.border3 {
  position: absolute;
  bottom: 11px;
  left: 11px;
  border-left: 2px solid #01dee9;
  border-bottom: 2px solid #01dee9;
}
.border4 {
  position: absolute;
  bottom: 11px;
  right: 11px;
  border-right: 2px solid #01dee9;
  border-bottom: 2px solid #01dee9;
}
.border5 {
  position: absolute;
  top: 321px;
  left: 11px;
  border-left: 2px solid #01dee9;
  border-top: 2px solid #01dee9;
}
.border6 {
  position: absolute;
  top: 321px;
  right: 11px;
  border-right: 2px solid #01dee9;
  border-top: 2px solid #01dee9;
}
.border7 {
  position: absolute;
  bottom: 151px;
  left: 11px;
  border-left: 2px solid #01dee9;
  border-bottom: 2px solid #01dee9;
}
.border8 {
  position: absolute;
  bottom: 151px;
  right: 11px;
  border-right: 2px solid #01dee9;
  border-bottom: 2px solid #01dee9;
}
.cap {
  width: 250px;
  height: 250px;
  margin: 30px auto;
  position: relative;
}
.boxtext {
  color: #004d97;
  margin-top: -8px;
}
.boxtext span:nth-child(2) {
  color: #03fafd;
}
.cap img {
  position: absolute;
}
.huzhou {
  top: 2px;
  left: 66px;
  width: 56px;
}
.hangzhou {
  top: 36px;
  left: 25px;
  width: 108px;
}
.hengzhou {
  width: 63px;
  top: 103px;
  left: 7px;
}
.jiaxing {
  width: 60px;
  left: 112px;
  top: 7px;
}
.shaoxing {
  width: 62px;
  left: 95px;
  top: 53px;
}
.jinhua {
  width: 71px;
  top: 91px;
  left: 64px;
}
.lishui {
  width: 81px;
  top: 135px;
  left: 38px;
}
.zhoushan {
  width: 66px;
  left: 166px;
  top: 24px;
}
.ningbo {
  width: 63.5px;
  left: 139px;
  top: 44px;
}
.taizhou {
  width: 77px;
  top: 110px;
  left: 114px;
}
.wenzhou {
  width: 77px;
  top: 154px;
  left: 82px;
}
.color {
  width: 100%;
  height: 80px;
}
.exa {
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
.color > div > div {
  width: 100px;
  text-align: center;
}
.bor {
  width: 50px;
  height: 30px;
  position: relative;
}
.borline {
  width: 100%;
  height: 1px;
  margin-top: 14px;
}
.borcir {
  width: 15px;
  height: 15px;
  position: absolute;
  border-radius: 50%;
  top: 7px;
  left: 18px;
}
.visitedperson {
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.visitedperson span:nth-child(2) {
  color: #eef287;
  font-size: 20px;
  margin-left: 10px;
}
</style>
<style>
.tableline tr:nth-child(odd) {
  background: #104283 !important;
}
.tableline tr:nth-child(even),
.tableline .ivu-table th,
.ivu-table-wrapper {
  background: #00176a !important;
}
.tableline .ivu-table td {
  background: none;
}
.tableline tr {
  color: white;
}
.tableline .ivu-table td,
.tableline .ivu-table th,
.tableline .ivu-table-wrapper,
.tableline .ivu-table::before{
  margin: 0;
  padding: 0;
}
</style>
