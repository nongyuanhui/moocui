
<template>
  <div class="m-card" :style="width ? { width: width + 'px' } : {}">
    <div
      class="m-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <div v-if="summary" class="m-card-summary">{{ summary }}</div>
    <div v-else class="m-card-summary"><slot></slot></div>
    <slot name="footer"></slot>
  </div>
</template>
      
<script>
export default {
  name: "CardPage",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>
      
 <style lang="scss">
 @import './card.scss';
</style>
 <!-- <style>
.m-card {
  width: 270px;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.15);
  padding-bottom: 8px;
}
.m-card-img {
  height: 152px;
 
}
img {
    width: 100%;
    height: 100%;
  }
.m-card-summary {
  padding: 8px;
  text-align: left;
  font-size: 14px;
}
</style> -->