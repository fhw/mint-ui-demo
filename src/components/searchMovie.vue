<template>
    <div id="search-movie">
        <mt-search v-model="value" :result.sync="result">
            <!--             <mt-cell v-for="item in result" :key="item.id" :title="item.title" :to="{path:'/movieDetail/'+item.id}">
                <span>{{item.rating.average}}</span>
                <img slot="icon" :src="item.images.small" width="64" height="103">
            </mt-cell> -->
            <ul>
                <li class="search-li" v-for="item in result" :key="item.id" @click='toDetail(item.id)'>
                    <img slot="icon" :src="item.images.small" width="64" height="103">
                    <span class="search-title">{{item.title}}</span>
                    <span class="search-rating" v-if='item.rating.average!=0'>{{item.rating.average}}分</span>
                    <span class="search-rating" v-else>暂无评分</span>
                </li>
            </ul>
        </mt-search>
    </div>
</template>
<script type="text/javascript">
export default {
    data() {
            return {
                result: [],
                value: ''
            }
        },
        watch: {
            value: function() {
                var that = this;
                this.$http('/douban/movie/search?q=' + that.value, null, function(err, response) {
                    if (err) {
                        console.error(err.message);
                    } else {
                        that.result = response.subjects;
                    }
                });
            }
        },
        methods: {
            toDetail: function(id) {
                this.$router.push({
                    path: '/movieDetail/' + id
                })
            },
        }
}
</script>
<style>
.mint-search-list-warp {
    padding-top: 48px;
}

.search-li {
    display: block;
    height: 103px;
}

.search-title {
    font-size: 18px;
    float: left;
    left: 10px;
    min-width: 190px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.search-rating {
    float: right;
    right: 10px;
    font-size: 16px;
    color: #888;
}

.search-rating,
.search-title {
    position: relative;
    top: 40px;
    height: 103px;
    display: block;
}

.search-li img {
    /*position: absolute;*/
    float: left;
}
</style>
