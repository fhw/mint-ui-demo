<template>
    <div id="search-movie">
        <mt-search v-model="value" :result.sync="result">
            <mt-cell v-for="item in result" :key="item.id" :title="item.title" :value="item.rating.average" :to="item.alt">
            </mt-cell>
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
                this.$http.get('http://127.0.0.1:8081/movie/search?q=' + that.value).then(function(response) {
                    that.result = response.data.subjects;
                }).catch(function(error) {
                    console.log(error);
                });
            }
        }
}
</script>
<style>
	#search-movie{
		padding-top:40px;
	}
</style>
