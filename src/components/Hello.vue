<template>
    <div class="hello">
        <h1></h1>
        <button @click='getData'>点我</button>
        <el-row>
            <el-col :span="8" v-for="(list, index) in msg" :key="list.id" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '0px' }">
                    <img :src="list.images.small" class="image">
                    <div style="padding: 14px;">
                        <span>{{list.title}}<i>{{list.origin_title}}</i></span>
                        <div class="bottom clearfix">
                            <time class="time">年份：{{list.year}}评分：{{list.rating.average}}</time>
                            <el-button type="text" class="button"><a :href="list.alt">查看</a></el-button>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'hello',
    data() {
        return {
            msg: '',
            myData: []
        }
    },
    methods: {
        getData: function() {
            var that = this;
            // fetch('/movie/top250');
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
