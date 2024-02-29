<template>
  <div class="content">
    <circle-progress :percent="percent"
                     empty-color='FFFFFF'
                     fill-color="rgba(229,45,39,0.6)"
                     size="60"
                     border-width="5"

    />
    <p class="percent-text">{{percent}}%</p>
  </div>
</template>

<script>

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";

export default {
  props: ['percent'],
  name: "percent-component",
  components: {CircleProgress}
}
</script>

<style scoped>
.content {
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 60px;
  height: 60px;
}
.percent-text {
  position: absolute;
  font-size: 16px;
  font-family: Brains-bold, system-ui;
  color: rgba(229,45,39,0.6);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>