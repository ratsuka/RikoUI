<template>
  <div>
    <canvas :class="rondon" :width="canvaswidth" :height="canvaswidth"></canvas>
  </div>
</template>
<script>
export default {
  data() {
    return {
      rondon: "re" + Math.floor(Math.random() * 100)
    };
  },
  props: {
    rulers: Array,
    content: Array,
    canvaswidth: Number,
    startText: String,
    endText: String
  },
  mounted() {
    let startPic = this.canvaswidth * 0.9,
      movePic = this.canvaswidth * 0.9,
      lineheight = startPic / this.rulers.length;
    let canavsEle = document.getElementsByClassName(this.rondon)[0];
    let context = canavsEle.getContext("2d");
    context.strokeStyle = "#0092FE";
    context.lineWidth = "2";
    context.font = "15px";
    context.fillStyle = "white";
    context.beginPath();
    context.moveTo(50, 20);
    context.lineTo(50, startPic);
    context.lineTo(startPic + 20, startPic);
    context.stroke();
    context.fillText(this.startText, 50, startPic + 15);
    context.textAlign="right";
    context.fillText(this.endText,startPic + 15,startPic+ 15)
    context.textAlign="left";
    for (let i = 0; i < this.rulers.length; i++) {
      context.fillText(this.rulers[i], 20, movePic);
      movePic -= lineheight;
    }

    for (let i = 0; i < this.content.length; i++) {
      let linewidth = startPic / this.content[i].data.length,
        oringinalHeight = 50;
      context.strokeStyle = this.content[i].color;
      context.beginPath();
      context.moveTo(
        oringinalHeight,
        startPic - this.content[i].data[0] * lineheight
      );
      for (let k = 1; k < this.content[i].data.length; k++) {
        let moveheight = startPic - this.content[i].data[k] * lineheight - 5;
        oringinalHeight += linewidth;
        context.lineTo(oringinalHeight, moveheight);
      }
      context.stroke();
    }
  },
  components: {}
};
</script>
 <style scoped>
</style>