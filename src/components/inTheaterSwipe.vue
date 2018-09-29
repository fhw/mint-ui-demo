<template>
  <div id="in-theater-swipe">
    <card-item>
      <div slot="title" class="in-theaters-title">
        <span class="fg-1 f-bold">{{imgList.title}}</span>
        <router-link :to='{path:"movie/movieList/in_theaters"}' class="more"></router-link>
      </div>
      <div class="swipe-wrap">
        <mt-swipe :auto="4000000">
          <mt-swipe-item v-for='(item,itemIndex) in imgList.subjects' :key='itemIndex' v-if='itemIndex<5'>
            <router-link class="swipe-item" :to="{path:'/movieDetail/'+item.id}">
              <div class="swipeImg">
                <img v-lazy="item.images.medium" :alt="item.title">
              </div>
              <div class="swipeIntro">
                <p>{{item.title}}</p>
                <p>{{item.original_title}}</p>
                <div class="grade-wrap">
                  <div class="star" v-for="(starNum,index) in Math.round(item.rating.average/2)" :key="index"></div>
                  <span v-if='item.rating.average!=0'>{{item.rating.average}}分</span>
                  <span v-else>暂无评分</span>
                </div>
                <div class="flex mt-10">
                  <mt-badge size="small" type="success" class="genres-tag" v-for='(tags,index) in item.genres'
                            :key="index">
                    {{tags}}
                  </mt-badge>
                </div>
              </div>
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </card-item>
  </div>
</template>
<script type="text/javascript">
import api from './../api/api'
import cardItem from '@/components/common/CardItem'

export default {
  data () {
    return {
      imgList: [],
      count: 5
    }
  },
  components: {
    cardItem
  },
  created: function () {
    let that = this
    // var city='广州';
    api.inTheaters({params: {count: this.count}}).then((data) => {
      that.imgList = data.data
    }).catch((err) => {
      console.error(err.message)
    })
  }
}
</script>
<style lang="scss" scoped>
  #in-theater-swipe {
    width: 100%;
    overflow: hidden;
  }

  .in-theaters-title {
    text-align: left;
    display: flex;
    span {
      display: inline-block;
      width: 90%;
    }
  }

  .swipe-wrap {
    height: 120px;
    .swipe-item {
      display: flex;
    }
    .swipeIntro {
      margin-left: 0.625rem;
      color: #000;
      .grade-wrap {
        display: flex;
        margin-top: 0.625rem;
        span {
          margin-left: 0.625rem;
        }
      }
      p {
        margin: 0;
        font-size: 0.875rem;
      }
      p:nth-child(2) {
        font-size: 0.625rem;
        text-align: left;
      }
    }
  }

  .swipeImg {
    img {
      height: 120px;
    }
    img[lazy=loading] {
      width: 86px;
      height: 120px;
      margin: auto;
      background: url("./../assets/images/load-c.png") no-repeat center;
      background-size: 36px 36px;
      animation: infiniteCircle 500ms infinite ease-in-out;
    }
  }

  .genres-tag {
    margin: 0 5px;
  }

  .more {
    width: 1.2rem;
    /*height: 0.625rem;*/
    background: url("./../assets/images/more.png") no-repeat center;
    background-size: contain;
  }

  .star {
    width: 15px;
    line-height: 1.15;
    background: url("../../static/images/ratingStar.png") no-repeat center;
    background-size: 0.8rem;
  }

  .bs-wrap {
    /*width: 100%;*/
    height: 300px;
    overflow: hidden;
  }
  .bs-wrap-item{
    display: inline-block;
  }
</style>
