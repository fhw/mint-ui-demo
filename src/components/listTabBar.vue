<template>

</template>
<script>
export default{
    data(){
        return {
            selected:'tab-container1'
        }
    },
  watch:{
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定
      console.log(val)
    }
  }
}
</script>
<style>
#list-tab-bar{
  height:100%;
  padding-top:40px;
}
</style>
