<template>
    <div class="top250-card-list">
        <h1></h1>
        <button @click='getData'>点我</button>
        <el-card class="box-card" v-for="(list, index) in msg" :key="list.id">
            <div class="text item">
                <img :src="list.images.small" class="image">
                <span>{{list.title}}<i>{{list.original_title}}</i></span><br>
                年份：{{list.year}}评分：{{list.rating.average}}
                <a :href="list.alt">查看</a>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'top250-card-list',
    data() {
        return {
            msg: '',
            myData: []
        }
    },
    methods: {
        getData: function() {
            var that = this;
            this.$http.get('http://127.0.0.1:8081/movie/top250').then(function(response) {
                that.msg = response.data.subjects;
            }).catch(function(error) {
                console.log(error);
            });
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 64px;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>
</style>
