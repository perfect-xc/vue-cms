<template>

  <div class="mui-numbox" data-numbox-min='1' style="height:30px">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countchanged" ref="numbox" readonly/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js"
export default {
  data(){
    return {
      
    }
  },
  props:['initcount','goodsid'],
  mounted(){
      // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
    
  },
  methods:{
    countchanged(){
      this.$store.commit("updateGoodsInfo",{id:this.goodsid,count:this.$refs.numbox.value})
    }
  },
  
}
</script>

<style lang="scss" scoped>

</style>
