<template>
  <div class="cmt-container">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容(最多输入120字)" maxlength="120" v-model="textareaMsg"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <!-- 评论列表 -->
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, i) in comments" :key="item.add_time">
        <div class="cmt-title">
          第{{ i+1 }}楼&nbsp;&nbsp;用户：{{ item.user_name }}&nbsp;&nbsp;发表时间：{{ item.add_time | dateFormat }}
        </div>
        <div class="cmt-body">
          {{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}
        </div>
      </div>
      <div class="cmt-item" >
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：哈哈 发表时间：2011-11-11 11:11:11
        </div>
        <div class="cmt-body">
         吼吼
        </div>
      </div>
        <div class="cmt-item" >
        <div class="cmt-title">
          第1楼&nbsp;&nbsp;用户：哈哈 发表时间：2011-11-11 11:11:11
        </div>
        <div class="cmt-body">
         吼吼
        </div>
      </div>

    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui';
  export default{
    data(){
      return {
         pageIndex: 1, // 默认展示第一页数据
         comments: [] ,// 所有的评论数据
         textareaMsg:'',
      }
    },
    props:['id'],
    created(){
      this.getComments();
    },
    methods:{
      getComments(){
         this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            // this.comments = result.body.message;
            // 每当获取新评论数据的时候，不要把老数据清空覆盖，而是应该以老数据，拼接上新数据
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论失败！");
          }
        });
      },
      getMore(){
        this.pageIndex++;
        this.getComments();
      },
      postComment(){
      
        if(this.textareaMsg.length==0){
          return Toast('提交的数据不能为空');
        }
        this.$http.post('api/postcomment/'+this.id,{content:this.textareaMsg.trim()})
        .then(result=>{
          if(result.body.status===0){
            //手动拼接一个对象，把评论放到当前页面，为了让评论实时的显示到页面
            let cmt={
              user_name:'匿名用户',
              add_time:Date.now(),
              content:this.textareaMsg.trim()
            };
            this.comments.unshift(cmt);
            this.textareaMsg="";
          }
        }).catch(function(err){
          console.log(err.message);
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .cmt-container {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
    //禁止改变尺寸，去掉右下角的拉伸三角
    resize:none;
  }

  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>

