<template>
  <div>
     <!-- 顶部滑动条区域 -->
    <div id="slider" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">

          <a :class="['mui-control-item',item.id===0?'mui-active':'']"  
          data-wid="tab-top-subpage-1.html"
          v-for="item in cates" :key="item.id"
          @tap=getPhotoListByCateId(item.id)
          >
            {{item.title}}
          </a>

          <a class="mui-control-item  mui-active"  
          data-wid="tab-top-subpage-1.html"
          
          @click=getPhotoListByCateId(1)
          >
           推荐 
          </a>
          <a class="mui-control-item"  data-wid="tab-top-subpage-2.html">
            热点
          </a>
          <a class="mui-control-item"  data-wid="tab-top-subpage-3.html">
            北京
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-4.html">
            社会
          </a>
          <a class="mui-control-item" data-wid="tab-top-subpage-5.html">
            娱乐
          </a>
       </div>
		 </div>
    </div>

     <!-- 图片列表区域 -->
    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-body">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
    <ul class="photolist">
      <router-link to="/home/photoinfo/12" tag='li'>
        <img src="../../image/1.jpg" alt="">
        <div class="info">
          <h1 class="info-title">哈哈哈</h1>
          <div class="info-zhaiyao">吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼
            吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼
            吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼吼
          </div>
        </div>
      </router-link>
       <li>
        <img src="../../image/1.jpg" alt="">
        <div class="info">
          <h1 class="info-title">哈哈哈</h1>
          <div class="info-zhaiyao">吼吼</div>
        </div>
      </li>
       <li>
        <img src="../../image/1.jpg" alt="">
        <div class="info">
          <h1 class="info-title">哈哈哈</h1>
          <div class="info-zhaiyao">吼吼</div>
        </div>
      </li>
       <li>
        <img src="../../image/1.jpg" alt="">
        <div class="info">
          <h1 class="info-title">哈哈哈</h1>
          <div class="info-zhaiyao">吼吼</div>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js';
import {Toast} from 'mint-ui';

  export default{
    data(){
      return {
        cates:[],//存放图片分类
        list:[]
      }
    },
    created(){
      this.getimgcategory();
      this.getPhotoListByCateId(0);
    },
    mounted(){
       mui('.mui-scroll-wrapper').scroll({
	      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    methods:{
     getimgcategory(){
       this.$http.get("api/getimgcategory").then(result=>{
         if(result.body.status===0){
           result.body.message.unshift({ title:"全部", id:0});
            this.cates=result.body.message;
         }
       })
     },
      // 根据 分类Id，获取图片列表
      getPhotoListByCateId(cateId){
        this.$http.get("api/getimages/" + cateId).then(result => {
          if (result.body.status === 0) {
            this.list = result.body.message;
          }else{
            Toast('获取图片失败')
          }
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  *{
    touch-action: pan-y;
  }
  .photolist{
    list-style:none;
    margin:0;
    padding:10px 10px 0 10px;
  
    li{
      background-color:#ccc;
      text-align:center;
      margin-bottom:10px;
      box-shadow:0 0 6px #999;
      position:relative;
      img{
        width: 100%;
        vertical-align: middle;
        //去掉图片自带的3像素
      }
      img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
      }
      .info{
        width: 100%;
        color:#fff;
        text-align:left;
        max-height:80px;
        //防止字体过多，info的高度增大
        position:absolute;
        bottom:0;
        background-color:rgba(0,0,0,0.4);
        .info-title{
          font-size:14px;
        }
        .info-zhaiyao{
          font-size:13px;
        }
      }
    }
    li:last-of-type{
      margin-bottom:0;
    }
  }
</style>