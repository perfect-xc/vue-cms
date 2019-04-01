<template>
  <div class="photoinfo-container">

    <!-- <h1>{{photoinfo.title}}</h1>
    <p class="subtitle">
      <span>发表时间 :{{photoinfo.add_time|dataFormat}}</span>
      <span>点击 :{{photoinfo.click}}次</span>
    </p> -->


    <h1>很美的落地大书柜  可以放很多书</h1>
    <p class="subtitle">
      <span>发表时间 :2011-11-11 11:11:11</span>
      <span>点击 :0次</span>
    </p>

    <hr>

    <!-- 缩略图区域 -->

    <div class="thumbs">
      <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" 
	  @click="$preview.open(index, list)" :key="item.src">
    </div>




    <!-- 图片内容区域 -->
      <div class="content">我是图片内容详情我是图片内容详情我是图片内容详情我是图片内容详情
        我是图片内容详情我是图片内容详情我是图片内容详情我是图片内容详情我是图片内容详情我是图片内容详情
        我是图片内容详情我是图片内容详情我是图片内容详情我是图片内容详情
        我是图片内容详情
      </div>
    <!-- <div class="content" v-html="photoinfo.content"></div> -->

    <!-- 放置一个现成的 评论子组件 -->
      <cmt-box :id="id"></cmt-box>
  </div>
</template>

<script>
import comment from '../subcomponents/comment.vue'
export default {
  data(){
    return {
      id:this.$route.params.id,
      photoinfo:{},
      list:[
        {"src":'../../image/1.jpg','w':600,'h':400},
        {"src":'../../image/11.jpg','w':600,'h':400},
        {"src":'../../image/12.jpg','w':600,'h':400},
        {"src":'../../image/2.jpg','w':600,'h':400},
        {"src":'../../image/1.jpg','w':600,'h':400},
        {"src":'../../image/15.jpg','w':600,'h':400},



      ]
    }
  },
  created(){
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods:{
    getPhotoInfo(){
      this.$http.get('api/getimageInfo/'+this.id).then(res=>{
        if(res.body.status===0){
          this.photoinfo=res.body.message[0];
        }
      })
    },
    //获取缩略图
    getThumbs(){
      this.$http.get('api/getthumbs/'+this.id).then(result=>{
        if(this.result.status===0){
          result.body.message.foreach(item=>{
            item.w=600,
            item.h=400
          })
          this.list=result.body.message;
        }
      })
    }
  },
  components:{
    "cmt-box":comment
  }
}
</script>

<style lang="scss" scoped>
  .photoinfo-container{
    padding:3px;
    h1{
      font-size:18px;
      color:#226aff;
      text-align:center;
      margin:15px 0;
    }
    .subtitle{
      display:flex;
      justify-content: space-between;
      font-size:13px;
    }
    .content{
      font-size:13px;
      line-height:30px;
    }
    .thumbs{
      img{
        margin:10px;
        box-shadow:0 0 6px #999;
        }
      
    }
  }
</style>