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
                devWidth:''
            }
        },
        watch:{
        	
        },
        mothods: {
            
        },
        created: function() {
            var city = '广州';
            var that = this;
            this.$http.get('http://127.0.0.1:8081/movie/in_theaters?city=' + city).then(function(response) {
                that.imgList = response.data.subjects;
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
    position: absolute;
    background: #fff;
}

.in-theaters-title a {
    position: absolute;
    right: 0;
}

.swipe-wrap {
	overflow: hidden;
    top: 21px;
    width: 100%;
    height: 139px;
}

.swipeImg,
.in-theaters-title span {
    position: absolute;
    left: 0;
}

.swipeIntro {
    text-align: left;
    position: absolute;
    left: 110px;
}

.swipeIntro p {
	font-style: italic;
    width: 220px;  
    white-space: nowrap;  
    overflow: hidden;  
    text-overflow: ellipsis; 
}

.genres-tag{
	max-width: 6em;
	height: 20px;
	border: 1px solid #FF5722;
	border-radius: 4px;
}
</style>
