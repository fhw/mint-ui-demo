<template>
  <div class="card-item">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'card-item'
  }
</script>

<style lang="scss" scoped>
  .card-item {
    margin: 0.8rem 0 0.4rem;
    padding: 0.4rem 0.8rem;
    /*border: 1px solid rgba(38, 162, 255, .2);*/
    /*border-radius: 3px;*/
    box-shadow: 0 1px 4px 0 rgba(0,0,0,0.14);
    background: #fff;
    overflow: hidden;
    .title{
      padding: 0 0 0.625rem;
    }
  }
</style>
