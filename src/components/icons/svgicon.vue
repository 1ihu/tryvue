<template>
  <!-- <div> -->
      <svg class="icon" aria-hidden="true">
        <use :xlink:href="iconName"></use>
      </svg>
  <!-- </div> -->
</template>
<script>
export default {
  props: {
    iconClss: {
      type: String,
      required: true
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClss}`;
    }
  }
};
</script>
<style scoped>
.icon {
  width: 24px;
  height: 18px;
  vertical-align: -0.35em;
  fill: currentColor;
  overflow: hidden;
  display: inline-block;
  /* margin: 0 5px; */
}
</style>
