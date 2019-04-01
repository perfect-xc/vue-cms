<template>
  <div class="goods-list">
      <!-- 编程式导航 -->
    <div class="goods-item" @click="getDetail(12)">
      <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-320.png" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-320.png" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-320.png" alt="">
      <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥899</span>
          <span class="old">￥999</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩60件</span>
        </p>
      </div>
    </div>

      <!-- router-link方式导航 -->
     <!-- <router-link class="goods-item" v-for="item in goodslist" :key="item.id" :to="'/home/goodsinfo'+item.id" tag="div">
      <img :src="item.img_url">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{item.sell_price}}</span>
          <span class="old">￥{{item.market_price}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.stock_quantity}}件</span>
        </p>
      </div>
     </router-link>  -->

     

     <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import {Toast} from 'mint-ui'
  export default {
    data(){
      return {
        pageIndex:1,
        goodslist:[]
      }
    },
  
    created(){
      this.getGoodsList();
    },
    methods:{
      getGoodsList(){
        this.$http.get("api/getgoods?pageindex="+this.pageIndex).then(result=>{
          if(result.body.status===0){
            this.goodslist=this.goodslist.concat(result.body.message);
          }else{
            Toast('加载失败')
          }
        })
        .catch(function(err){
          console.log(err.message)
        })
      },
      getMore(){
        this.pageIndex++;
        this.getGoodsList();
      },
      getDetail(id){
        this.$router.push({name:'goodsinfo',params:{id:id}})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goods-list{
    padding:10px 4px 0 4px;
    display:flex;
    flex-wrap:wrap;
    justify-content: space-between;
    .goods-item{
      width: 49%;
      border:1px solid #ccc;
      padding:0 4px;
      margin:4px 0;
      box-shadow:0 0 4px #999;
      min-height: 230px;
      display:flex;
      flex-direction:column;
      justify-content: space-between;
      img{
        width: 100%;
    
      }
      h1{
        font-size:14px;
      
      }
      .info{
        background-color:#eee;
        p{
          margin:0;
          padding:5px;
        }
        .price{
          .now{
            color:red;
            font-weight:bold;
            font-size:16px;
          }
          .old{
            text-decoration: line-through;
            font-size:13px;
          }
        }
        .sell{
          display:flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
