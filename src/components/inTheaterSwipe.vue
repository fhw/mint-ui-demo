<template>
    <div id="in-theater-swipe">
        <header class="in-theaters-title">
            <span>{{imgList.title}}</span>
            <router-link :to='{path:"movie/movieList/in_theaters?city="+this.city}'>更多</router-link>
        </header>
        <div class="swipe-wrap">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for='(item,itemIndex) in imgList.subjects' :key='item.id' v-if='itemIndex<5'>
                    <router-link :to="{path:'/movieDetail/'+item.id}">
                        <div class="swipeImg">
                            <img v-lazy="item.images.medium" :alt="item.title">
                        </div>
                        <div class="swipeIntro">
                            <h3>{{item.title}}</h3>
                            <p>({{item.original_title}})</p>
                            <mt-cell>
                                <span v-if='item.rating.average!=0'>{{item.rating.average}}分</span>
                                <span v-else>暂无评分</span>
                                <img v-for="starNum in Math.round(item.rating.average/2)" slot="icon" src="../../static/images/ratingStar.png" width="18" height="18">
                            </mt-cell>
                            <div class="genres-tag" v-for='tags in item.genres'>
                                {{tags}}
                            </div>
                        </div>
                    </router-link>
                </mt-swipe-item>
            </mt-swipe>
        </div>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
            return {
                imgList: [],
                city: '广州',
            }
        },
        beforeCreate: function() {
          var that = this;
          this.$http('https://api.douban.com/v2/movie/in_theaters?city=' + that.city, null, function (err, response) {
            if (err) {
              console.error(err.message);
            } else {
              that.imgList = response;
            }
          });
        }
}
</script>
<style scoped>
#in-theater-swipe {
    width: 100%;
    background: #fff;
}

.swipe-wrap,
.in-theaters-title {
    width: 100%;
    background: #fff;
}

.in-theaters-title {
    height: 32px;
    font-size: 20px;
}

.in-theaters-title span {
    letter-spacing: 2px;
    font-family: YouYuan;
    color: #000;
    margin: 5px 10px;
    float: left;
}

.in-theaters-title a {
    margin: 5px 5px;
    float: right;
}

.swipe-wrap {
    overflow: hidden;
    top: 21px;
    width: 100%;
    height: 150px;
    margin: 0 10px;
}

.swipeImg {
    float: left;
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
