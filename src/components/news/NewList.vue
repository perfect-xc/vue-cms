<template>
  <div>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
					<router-link :to="'/home/newsinfo/'+item.id">
						<img class="mui-media-object mui-pull-left" :src="item.img_url">
						<div class="mui-media-body">
							<h1>{{ item.title}}</h1>
							<p class='mui-ellipsis'>
                <span>发表时间&nbsp;&nbsp;: {{item.add_time | dataFormat}}}</span>
                <span>点击&nbsp;&nbsp;: {{item.click}}次</span>
              </p>
						</div>
					</router-link>
				</li>
        	<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo/12">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/45944579?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>发表时间&nbsp;&nbsp;: 2019-3-8 10:30:30</span>
                <span>点击&nbsp;&nbsp;: 0次</span>
              </p>
						</div>
					</router-link>
				</li>
					<li class="mui-table-view-cell mui-media">
					<router-link to="/home/newsinfo/13">
						<img class="mui-media-object mui-pull-left" src="https://avatars3.githubusercontent.com/u/45944579?s=40&v=4">
						<div class="mui-media-body">
							<h1>幸福</h1>
							<p class='mui-ellipsis'>
                <span>发表时间&nbsp;&nbsp;: 2019-3-8 10:30:30</span>
                <span>点击&nbsp;&nbsp;: 0次</span>
              </p>
						</div>
					</router-link>
				</li>
				

				

			</ul>
  </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default{
    data(){
      return {
        newlist:[]//新闻列表
      }
    },
    created() {
    this.getNewsList();
    },
    methods:{
      getNewsList(){
        this.$http.get('api/getnewslist').then(result=>{
          if(result.body.status===0){
            this.newlist=this.result.body.message;
          }else{
            Toast('加载失败。。。')
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .mui-table-view{
    li{
      h1{
        font-size:14px;
      }
      .mui-ellipsis{
        color:#226aff;
        display:flex;
        justify-content:space-between;
      }
    }
  }
</style>
