<template>
    <div id="in-theater-swipe">
        <div class="in-theaters-title">
            <span>影院热映</span>
            <router-link to=''>更多</router-link>
        </div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for='(item,itemIndex) in imgList' :key='item.id' v-if='itemIndex<3'>
                <div class="swipe-wrap">
                    <div class="swipeImg">
                        <img :src="item.images.medium" :alt="item.title">
                    </div>
                    <div class="swipeIntro">
                        <strong>{{item.title}}</strong>
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
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
            return {
                imgList: [],
                devWidth: ''
            }
        },
        watch: {

        },
        mothods: {

        },
        beforeCreate: function() {
            var city = '广州';
            var that = this;
            this.$http.get('http://127.0.0.1:8081/movie/in_theaters?city=' + city).then(function(response) {
                that.imgList = response.data.subjects;
                // console.log(that.$router.currentRoute);
            }).catch(function(error) {
                console.log(error);
            })
        }
}
</script>
<style type="text/css">
#in-theater-swipe {
    position: absolute;
    top: 40px;
    width: 100%;
    height: 150px;
}

.swipe-wrap,
.in-theaters-title {
    width: 100%;
    /*position: absolute;*/
    background: #fff;
}

.in-theaters-title {
    height: 32px;
    font-size: 20px;
}

.in-theaters-title span {
    color: #000;
    margin: 5px 25px;
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
    height: 139px;
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
    width: 220px;
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
