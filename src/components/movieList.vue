<template>
    <div id="movie-list">
    <h1>{{msg.title}}</h1>
        <section class="list">
            <div class="movie-item" v-for="(list, index) in msg.subjects" :key="list.id" @click='toDetail(list.id)'>
                <div class="rating-icon">

                </div>
                <img class="item-image" :src="list.images.medium">
                <div class="item-intro">
                    <span class="item-title">{{list.title}}</span>
                    <div class="item-star">
                        <span class="starImg" v-for="starNum in Math.round(list.rating.average/2)"></span>
                        <span class="movie-rating" v-if='list.rating.average!=0'>{{list.rating.average}}</span>
                        <span class="movie-rating" v-else>暂无评分</span>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
export default {
    name: 'movie-list',
    data() {
        return {
            msg: [{
                subjects:{
                    images:{
                        medium:''
                    }
                }
            }],
            listType: '',
            total:''
        }
    },
    created: function() {
        var that = this;
        this.listType = this.$route.params.type;
        this.$http('https://api.douban.com/v2/movie/' + that.listType+'?count='+that.total, null, function (err, response) {
          if (err) {
            console.error(err.message);
          } else {
            that.msg = response;
          }
        });
    },
    methods: {
        toDetail: function(id) {
            this.$router.push({
                path: '/movieDetail/' + id
            });
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#movie-list {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 100%;
}

h1{
    margin: 10px 0;
    font-weight: normal;
    color: #2384E8;
}

.list {
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
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

.movie-rating{
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
