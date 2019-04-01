<template>
  <div class="app-container">

    <!-- Header区域 -->
    <!-- 绝对定位脱离了标准文档流，父元素要padding-top -->
    <mt-header fixed title="黑马程序员.vue项目">
      <span slot="left" @click="getback" v-show="flag">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>
    <!-- 路由router-view区域 -->

    <transition >
      <router-view></router-view>
    </transition>
    
    <!-- Tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <!-- Mint-UI有个高亮的属性mui-active
      a标签上还有个mui-active属性（路由改造改为了router-link），去掉加到了router-link的激活类上了，
      来实现路由的高亮显示 -->
			<router-link class="mui-tab-item1 " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/member">
				<span class="mui-icon mui-icon-contact">
        </span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id='badge'>{{$store.getters.getAllCount}}</span>
        </span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item1" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        flag:false
      }
    },
    created(){
      this.flag=this.$route.path==='/home'?false:true
    },
    methods:{
      getback(){
        this.$router.go(-1);
      }
    },
    watch:{
      '$route.path':function(newVal){
        if(newVal==='/home'){
          this.flag=false;
        }else{
          this.flag=true;
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
.app-container{
  padding-top: 40px;
  padding-bottom:50px;
  overflow-x: hidden;//处理组件切换字体跑出去
  .mint-header{
     z-index:99;
  }
 
}
.v-enter{
  opacity:0;
  transform: translateX(100%)
}
.v-leave-to{
  opacity:0;
  transform:translateX(-100%);
  position:absolute;
}
.v-enter-active,
.v-leave-active{
  transition:all 0.5s ease;
}
 
.mui-bar-tab .mui-tab-item1.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item1 .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
