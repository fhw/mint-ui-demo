<template>
    <div id="movie-detail">
        <div class="movie-card">
            <h2>{{detail.title}}</h2>
            <h4>({{detail.original_title}})</h4>
            <hr>
            <section class="movie-intro">
                <div class="left">
                    <p>
                        主演：
                        <br><span v-for="castsName in detail.casts">{{castsName.name}}/</span>
                    </p>
                    <p>
                        导演：
                        <br><span v-for="dName in detail.directors">{{dName.name}}/</span>
                    </p>
                    <mt-cell>
                        <span v-if='detail.rating.average!=0'>{{detail.rating.average}}分</span>
                        <span v-else>暂无评分</span>
                        <img v-for="starNum in Math.round(detail.rating.average/2)" slot="icon" src="../../static/images/ratingStar.png" width="18" height="18">
                    </mt-cell>
                </div>
                <div class="right">
                    <img :src="detail.images.medium" :alt="detail.title">
                </div>
            </section>
            <hr>
            <section class="summary">
                <h3>简介</h3>
                <p>{{detail.summary}}</p>
            </section>
            <hr>
        </div>
    </div>
</template>
<script>
export default {
    data() {
            return {
                detail: {
                    rating: {
                        average: ''
                    },
                    images: {
                        medium: ''
                    }
                }
            }
        },
        watch: {
            '$route': 'getDetail'
        },
        created: function() {
            this.getDetail();
        },
        methods: {
            getDetail: function() {
                var that = this;
                if (that.$route.params.id == null) {
                    that.detail.title = '查询失败！';
                } else {
                    this.$http('https://api.douban.com/v2/movie/subject/' + that.$route.params.id, null, function(err, response) {
                        if (err) {
                            console.error(err.message);
                        } else {
                            that.detail = response;
                        }
                    });
                }

            }
        }
}
</script>
<style scoped>
#movie-detail {
    background: #FFF;
    width: 100%;
    height: 100%;
}

.movie-card h2,
.movie-card h4 {
    margin: 10px 0 10px 10px;
    text-align: left;
    font-weight: normal;
    font-style: italic;
    min-width: 310px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.left {
    text-align: left;
    margin-left: 10px;
    float: left;
    width: 55%;
}

.right {
    float: left;
    width: 40%;
}

.movie-intro {
    height: auto;
    overflow: hidden;
}

.summary {
    text-align: left;
    margin: 5px;
    line-height: 20px;
}

.summary p {
    text-indent: 2em;
    margin: 4px 5px;
}

div.mint-cell-wrapper {
    background-image: none;
}

a.mint-cell:last-child {
    background-image: none;
}
</style>
