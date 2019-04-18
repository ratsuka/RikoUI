<template>
  <div class="content">
    <slot></slot>
  </div>
</template>
<script>
import Line from './chirden.vue'
export default {
  data() {
    return {};
  },
  components:{
    Line
  }
};
</script>
 <style scoped>
.content {
  width: 100%;
  min-height: 20px;
  display: flex;
  align-items: center;
}
</style>