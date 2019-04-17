<template>
  <div class="flex column">
    <canvas :class="rondon" width="100" height="100" ></canvas>
    <span style="color:white;margin-top:-10px">
      {{lable}}
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      width: 35,
      linewidth: 10,
      rondon:"re"+Math.floor(Math.random()*100)
    };
  },
  methods: {},
  mounted() {
    let count = 0,
      base = Math.PI * 1.25;
    let canavsEle = document.getElementsByClassName(this.rondon)[0];
    let context = canavsEle.getContext("2d");
    let dreamCir = obj => {
      context.strokeStyle = obj.color;
      context.lineWidth = this.linewidth;
      context.beginPath();
      let num = obj.angle * 2;
      context.arc(
        50,
        45,
        this.width,
        base,
        base + Math.PI * obj.angle * 2 - 0.1
      );
      base = base + Math.PI * obj.angle * 2;
      context.stroke();
      context.closePath();
    };
    for (let i = 0; i < this.beans.length; i++) {
      count += this.beans[i].total - 0;
    }
    for (let j = 0; j < this.beans.length; j++) {
      this.beans[j].angle = this.beans[j].total / count;
      dreamCir(this.beans[j]);
    }
    context.font = "20px Arial";
    context.fillStyle="white";
    context.fillText(this.Text, 32, 53);
  },
  props: {
    Text: String,
    beans:Array,
    lable:String
  }
};
</script>
 <style scoped>
</style>