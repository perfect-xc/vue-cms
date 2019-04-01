<template>
  <div class="shopcar-container">

     <div class="goods-list" v-for="(item,index) in goodslist" :key="item.id">
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change='selectedChanged(item.id,$store.getters.getGoodsSelected[item.id])'></mt-switch>
            <img :src="item.thumb_path" alt="">
            <div class="info">
              <h1>小米手机真垃圾，哈哈</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid='item.id'></numbox>
                <a href="#" @click.prevent='remove(item.id,index)'>删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
     </div>

      <div class="mui-card">
            <div class="mui-card-content">
              <div class="mui-card-content-inner jiesuan">
                <div class="left">
                  <p>总计(不含运费)</p>
                  <p>已勾选商品 <span class="red">{{$store.getters.getAllCountAndPrice.count}} 
                    </span>件,总计<span class="red">￥{{$store.getters.getAllCountAndPrice.price}}</span>
                  </p>
                </div>
                <mt-button type="danger">去结算</mt-button>
              </div>
            </div>
      </div>

        <p>{{$store.getters.getGoodsSelected}}</p>

  </div>
</template>

<script>
  import numbox from '../subcomponents/shopcar_numbox.vue'
  export default {
    data(){
      return {
        goodslist:[
          {
            id:12,
            coul:1,
            sell_price:800,
            thumb_path:'https://i1.mifile.cn/f/i/g/2015/cn-index/mi9-320.png'
          }
          ]
      }
    },
    components:{
      numbox
    },
    created(){
      this.getGoodsList();
      
    },
    methods:{
      getGoodsList(){
        var idStr=[];
        //从公共仓库中获取加入购物车商品的id，根据id从数据库或中获取数据
        this.$store.state.car.forEach(item=>
          idStr.push(item.id)
        )
        // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
        if(idStr.length<=0){
          return
        }
        this.$http.get('api/goods/getshopcarlist/'+idStr.join(',')).then(result=>{
          if(result.body.status===0){
            this.goodslist=result.body.message;
          }
        })
      },
      remove(id,index){
        //从页面删除这条数据
        this.goodslist.splice(index,1);
        //从store中删除这条数据
        this.$store.commit('removeFromCar',id);
      },
      selectedChanged(id,val){
        console.log(id+'----'+val)
        this.$store.commit('updateGoodsSeleced',{id:id,selected:val})
      }
    }
  }
</script>

<style lang="scss" scoped>
  .shopcar-container{
    background-color: #eee;
    overflow:hidden;
    .goods-list{
      .mui-card-content-inner{
        display:flex;
        align-items:center;
      }
      img{
        width: 60px;
      }
      p{
        margin:0;
      }
      h1{
        font-size:13px
      }
      .info{
        display:flex;
        flex-direction: column;
        justify-content:space-between;
        .price{
          color:red;
          font-weight:bold
        }
      }
    }
    .jiesuan{
      display: flex;
      align-items:center;
      justify-content: space-between;
      .red{
        color:red;
        font-size:16px;
        font-weight:bold;
      }
    }
  }
</style>
