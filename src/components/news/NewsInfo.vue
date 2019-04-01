<template>
<!-- 从数据库获取的信息 -->
  <!-- <div class="newsinfo-container"> -->
    <!-- <h1>新闻详情页--{{id}}</h1> -->
    <!-- 大标题 -->
    <!-- <h3 class="title">{{newsinfo.title}}</h3> -->
    <!-- 子标题 -->
    <!-- <p class="subtitle">
      <span>发表时间&nbsp;&nbsp;: {{newsinfo.add_time | dateFormat}}</span>
      <span>点击&nbsp;&nbsp;: {{newsinfo.click}}}次</span>
    </p>
    <hr> -->
    <!-- 内容区域  -->
    <!-- <div class="content" v-html="newsinfo.content"></div> -->
    

    <!-- 评论区域 -->
    <!-- <cmt-box :id="id"></cmt-box>
  </div> -->


  <div class="newsinfo-container">
    <!-- <h1>新闻详情页--{{id}}</h1> -->
    <!-- 大标题 -->
    <h3 class="title">大标题</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间&nbsp;&nbsp;: 2011-11-11 11:11:11</span>
      <span>点击&nbsp;&nbsp;: 20次</span>
    </p>
    <hr>
    <!-- 内容区域  -->
    <div class="content"></div>
    

    <!-- 评论区域 -->
    <cmt-box :id="id"></cmt-box>
  </div>

</template>

<script>
import {Toast} from 'mint-ui';
import comment from '../subcomponents/comment.vue'
export default {
  data(){
    return {
      id:this.$route.params.id,
      newsinfo:{}//存储新闻详情信息
    }
  },
  created(){
    this.getNewsInfo();
  },
  methods:{
    getNewsInfo(){
      this.$http.get("api/getnew/" + this.id).then(result=>{
        if(result.body.status===0){
          this.newsinfo=result.body.message[0];
        }else{
          Toast('获取新闻失败');
        }
      })
    }
  },
  components:{
    'cmt-box':comment
  }
}
</script>
<style lang="scss" scoped>
  .newsinfo-container{
    padding:0 4px;
    .title{
      font-size:16px;
      text-align:center;
      margin:15px 0;
      color:red;
    }
    .subtitle{
      font-size:13px;
      color:#226aff;
      display:flex;
      justify-content: space-between;
    }
    img{
      width: 100px;
    }
  
  }
</style>
