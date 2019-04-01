<template>

<!-- 问题： 我们不知道什么时候能够拿到 max 值，但是，总归有一刻，会得到一个真正的 max 值 -->
<!-- 我们可以 使用 watch 属性监听，来 监听 父组件传递过来的 max 值，不管 watch 会被触发几次，
但是，最后一次，肯定是一个 合法的 max 数值 -->
  <div class="mui-numbox" data-numbox-min='1' >
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChanged"  ref='numbox'/>
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
  props:["max"],
  mounted(){
      // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
  },
  methods:{
    countChanged(){
      this.$emit('getcount',parseInt(this.$refs.numbox.value))
      // console.log(this.$refs.number.value)
      console.log(this.max);
    }
  },
  watch:{
    max:function(newVal,oldVal){
      //newVal 表示max的最新值
      //通过mui的numbox组件的jsAPI 来设置最大值
      mui(".mui-numbox").numbox().setOption("max", newVal)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
