<template>
  <div>

      <!-- 轮播图 -->
     <!-- <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url" >1
        <img :src="item.img" alt="" :class={full:isfull}>
      </mt-swipe-item>
     
    </mt-swipe> -->


    <mt-swipe :auto="2000">
      <mt-swipe-item >1
        <!-- <img :src="" alt=""> -->
      </mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  data(){
    return {
      props:['lunbotuList','isfull']
    }
  }
}
</script>

<style lang="scss" scoped>
   .mint-swipe{
    height:200px;
    .mint-swipe-item {
      text-align:center;
      img{
        // width: 100%;
        height: 100%;
      }
      &:nth-child(1){
        background-color: yellow;
      }
      &:nth-child(2){
        background-color:hotpink;
      }
      &:nth-child(3){
        background-color:cyan;
      }
    }
    // .mint-swipe-item:nth-child(1){
    //    background-color: yellow;
    // }
    .full{
      width:100%;
    }
  }
</style>
