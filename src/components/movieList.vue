<template>
    <div id="movie-list">
        <h1>{{msg.title}}</h1>
        <!--         <section class="list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10"> -->
        <section class="list">
            <div class="movie-item" v-for="(list, index) in msg.subjects" :key="index" @click='toDetail(list.id)'>
                <img class="item-image" :src="list.images.medium">
                <div class="item-intro">
                    <span class="item-title">{{list.title}}</span>
                    <div class="item-star">
                        <span class="starImg" v-for="(starNum, index) in Math.round(list.rating.average/2)" :key="index"></span>
                        <span class="movie-rating" v-if='list.rating.average!=0'>{{list.rating.average}}</span>
                        <span class="movie-rating" v-else>暂无评分</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import api from './../api/api'
export default {
  name: 'movie-list',
  data () {
    return {
      msg: [{
        subjects: {
          images: {
            medium: ''
          }
        }
      }],
      listType: '',
      total: 20
    }
  },
  watch: {
    '$route': 'getData'
  },
  created: function () {
    this.getData()
  },
  methods: {
    toDetail: function (id) {
      this.$router.push({
        path: '/movieDetail/' + id
      })
    },
    getData: function () {
      var that = this
      this.listType = this.$route.params.type

      if (that.listType == null) {

      } else {
        const params = {
          listType: that.listType,
          count: that.total
        }
        api.getMovieList(params).then(res => {
          const resData = res.data
          console.log(resData)
          if (resData.total > 0) {
            this.msg = resData
          } else {
            console.error('接口报错')
          }
        })
      }
    }
  }
}
</script>
<style scoped>
#movie-list {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 100%;
}

h1 {
    margin: 10px 0;
    font-weight: normal;
    color: #2384E8;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    height: 100%;
}

.movie-item {
    display: block;
    width: 100px;
    height: 200px;
    margin: 10px auto;
}

span.item-title {
    width: 100%;
    margin-top: 5px;
    display: inline-block;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.item-image {
    display: block;
    width: 100%;
    height: 148px;
    margin: auto;
}

.item-star {
    margin-top: -10px;
}

.movie-rating {
    color: #888;
}

span.starImg {
    display: inline-block;
    background-image: url('../../static/images/ratingStar.png');
    background-size: 10px 10px;
    height: 10px;
    width: 10px;
}
</style>
