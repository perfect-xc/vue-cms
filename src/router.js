import VueRouter from 'vue-router';
import HomeComponent from './components/tabber/HomeComponnet.vue';
import MemberComponent from './components/tabber/MemberComponent.vue';
import ShopCarComponent from './components/tabber/ShopCarComponent.vue';
import SearchComponent from './components/tabber/SearchComponent.vue';
import NewList from './components/news/NewList.vue';
import NewsInfo from './components/news/NewsInfo.vue';
import PhotoList from './components/photos/photolist.vue';
import PhotoInfo from './components/photos/photoinfo.vue';
import GoodsList from './components/goods/goodslist.vue';
import GoodsInfo from './components/goods/goodsinfo.vue';
import GoodsDesc from './components/goods/goodsDesc.vue';
import GoodsComent from './components/goods/goodsComment.vue';




var router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeComponent},
    {path:'/member',component:MemberComponent},
    {path:'/shopcar',component:ShopCarComponent},
    {path:'/search',component:SearchComponent},
    {path:'/home/newlist',component:NewList},
    {path:'/home/newsinfo/:id',component:NewsInfo},
    {path:'/home/photolist',component:PhotoList},
    {path:'/home/photoinfo/:id',component:PhotoInfo},
    {path:'/home/goodslist', component:GoodsList},
    {path:'/home/goodsinfo/:id',component:GoodsInfo,name:'goodsinfo'},
    {path:'/home/goodsdesc/:id',component:GoodsDesc,name:'goodsdesc'},
    {path:'/home/goodscoment/:id',component:GoodsComent,name:'goodscoment'}


  ],
  linkActiveClass:'mui-active'
});

export default router;