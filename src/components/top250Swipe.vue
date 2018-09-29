<template>
  <div id="top250-swipe">
    <div class="top250-title">
      <span>{{imgList.title}}</span>
      <router-link :to='{path:"movie/movieList/top250"}'>更多</router-link>
    </div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for='(item,itemIndex) in imgList.subjects' :key='item.id' v-if='itemIndex<5'>
        <router-link :to="{path:'/movieDetail/'+item.id}">
          <div class="swipe-wrap">
            <div class="swipeImg">
              <img v-lazy="item.images.medium" :alt="item.title">
            </div>
            <div class="swipeIntro">
              <h3>{{item.title}}</h3>
              <p>({{item.original_title}})</p>
              <mt-cell>
                <span v-if='item.rating.average!=0'>{{item.rating.average}}分</span>
                <span v-else>暂无评分</span>
                <img v-for="(starNum, index) in Math.round(item.rating.average/2)" :key="index" slot="icon"
                     src="../../static/images/ratingStar.png" width="18" height="18">
              </mt-cell>
              <div class="genres-tag" v-for='(tags, index) in item.genres' :key="index">
                {{tags}}
              </div>
            </div>
          </div>
        </router-link>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script type="text/javascript">
import api from '../api/api'
export default {
  data () {
    return {
      imgList: [],
      total: 5
    }
  },
  created: function () {
    const params = {
      listType: 'top250',
      count: this.total
    }
    api.getMovieList(params).then(res => {
      const resData = res.data
      console.log(resData)
      if (resData.total > 0) {
        this.imgList = resData
      } else {
        console.error('接口报错')
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  #top250-swipe {
    width: 100%;
    height: 150px;
    background: #fff;
  }

  .swipe-wrap,
  .top250-title {
    width: 100%;
    background: #fff;
  }

  .top250-title {
    height: 32px;
    font-size: 20px;
  }

  .top250-title span {
    letter-spacing: 2px;
    color: #000;
    margin: 5px 10px;
    float: left;
  }

  .top250-title a {
    margin: 5px 5px;
    float: right;
  }

  .swipe-wrap {
    overflow: hidden;
    top: 21px;
    width: 100%;
    height: 139px;
  }

  .swipeImg {
    float: left;
    img{
      width: 100px;
    }
  }

  .swipeIntro {
    float: left;
    margin-left: 10px;
    text-align: left;
  }

  .swipeIntro p {
    font-style: italic;
    width: 210px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .genres-tag {
    margin-left: 5px;
    padding: 1px 2px;
    display: inline-block;
    max-width: 6em;
    height: 20px;
    border: 1px solid #FF5722;
    border-radius: 4px;
  }
</style>
