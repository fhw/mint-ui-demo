<template>
  <div id="in-theater-swipe">
    <div class="in-theaters-title">
      <span>{{imgList.title}}</span>
      <router-link :to='{path:"movie/movieList/in_theaters"}'>更多</router-link>
    </div>
    <div class="swipe-wrap">
      <mt-swipe :auto="4000000">
        <mt-swipe-item v-for='(item,itemIndex) in imgList.subjects' :key='item.id' v-if='itemIndex<5'>
          <router-link class="swipe-item" :to="{path:'/movieDetail/'+item.id}">
            <div class="swipeImg">
              <img v-lazy="item.images.medium" :alt="item.title">
            </div>
            <div class="swipeIntro">
              <p>{{item.title}}<span>({{item.original_title}})</span></p>
              <mt-cell>
                <span v-if='item.rating.average!=0'>{{item.rating.average}}分</span>
                <span v-else>暂无评分</span>
                <img v-for="starNum in Math.round(item.rating.average/2)" slot="icon"
                     src="../../static/images/ratingStar.png" width="18" height="18" :key="item.rating.average">
              </mt-cell>
              <mt-badge size="small" type="success" class="genres-tag" v-for='tags in item.genres' :key="item.genres">
                {{tags}}
              </mt-badge>
            </div>
          </router-link>
        </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<script type="text/javascript">
  import api from './../api/api'
  export default {
    data() {
      return {
        imgList: [],
        count: 5
      };
    },
    created: function () {
      let that = this;
      // var city='广州';
      api.inTheaters({params:{count:this.count}}).then((data) => {
        that.imgList = data.data;
      }).catch((err) => {
        console.error(err.message);
      })
    }
  };
</script>
<style lang="scss" scoped>
  #in-theater-swipe {
    width: 100%;
    background: #fff;
    overflow: hidden;
  }

  .in-theaters-title{
    text-align: left;
  }

  .swipe-wrap{
    height: 150px;
    .swipe-item{
      display: flex;
    }
    .swipeIntro{
      margin-left: 10px;
    }
  }

  .swipeImg{
    img{
      height: 150px;
    }
  }

  .genres-tag{
    margin: 0 5px;
  }
</style>
