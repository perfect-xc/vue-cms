
import Vue from 'vue';
import app from './App.vue'

import VueRouter from 'vue-router';
Vue.use(VueRouter);
import router from './router';

import VueResource from 'vue-resource';
Vue.use(VueResource);
Vue.http.options.root='http://vue.studyit.io';
Vue.http.options.emulateJSON="true";

import VuePreview from 'vue-preview';
Vue.use(VuePreview)

// import {Header, Swipe, SwipeItem,Button} from 'mint-ui';
// Vue.component(Header.name,Header);
// Vue.component(Swipe.name,Swipe);
// Vue.component(SwipeItem.name,SwipeItem);
// Vue.component(Button.name,Button);

//图片懒加载必须使用全部的Mint-UI引入，不能按需引入
import MintUI from 'mint-ui';
Vue.use(MintUI);

import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
//格式化时间插件
import moment from 'moment';

import Vuex from 'vuex';
Vue.use(Vuex);

// 每次刚进入 网站，肯定会 调用 main.js 在刚调用的时候，先从本地存储中，把 购物车的数据读出来，放到 store 中
//把数据存到本地，从本地获取数据都是 存储/获取的为字符串,没有获取到的话给一个空数组

const car = JSON.parse(localStorage.getItem('car')||'[]');
const store=new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
    addToCar(state,goodsinfo){
       // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

      // 假设 在购物车中，没有找到对应的商品
      var flag=false;
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count+=parseInt(goodsinfo.count);
          flag=true;
          return true;
        }
      })
      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if(!flag){
        state.car.push(goodsinfo)
      }
      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsInfo(state,goodsinfo){
      state.car.some(item=>{
        if(item.id==goodsinfo.id){
          item.count=goodsinfo.count;
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    removeFromCar(state,id){
      //some有三个参数，参数一：item,参数二：index，参数三：数组本身
      state.car.some((item,index)=>{
        if(item.id==id){
          state.car.splice(index,1)
          return true;
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car))
    },
    updateGoodsSeleced(state,info){
      state.car.some(item=>{
        if(item.id==info.id){
          item.selected=info.selected;
          return true
        }
      })
      localStorage.setItem('car',JSON.stringify(state.car));
    }
  },
  getters:{
    getAllCount(state){
      var countSum=0;
      state.car.forEach(item=>{
        countSum+=parseInt(item.count);
      })
      return countSum;
    },
    getGoodsCount(state){
      //把商品的id与数量作为键值对存储到对象中
      var o={};
      state.car.forEach(item=>{
        o[item.id]=item.count;
      })
      return o
    },
    getGoodsSelected(state){
      //将商品的id与状态作为键值对存储到对象中
      var o={}
      state.car.forEach(item=>{
        o[item.id]=item.selected;
      })
      return o;
    },
    getAllCountAndPrice(state){
       
      var count=0;
      var  price=0;
      
      state.car.forEach(item=>{
        if(item.selected){
          count+=item.count;
          price+=item.price*item.count;
        }
      })
      return {count:parseInt(count),price:parseInt(price)}
    }

  }
});


Vue.filter('dateFormat',function(dataStr,pattern='yyyy-mm-dd HH:mm:ss'){
  return moment(dataStr).format(pattern.toLocaleUpperCase());
  //format中年月日格式需为：YYYY-MM-DD
})

const vm = new Vue({
  el:"#app",
  render:c=>c(app),
  router,
  store
});