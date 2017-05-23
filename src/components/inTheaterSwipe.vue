<template>
    <div id="in-theater-swipe">
        <mt-swipe :auto="4000" @change="getSwipeList">
            <mt-swipe-item><div class=""><router-link to=""><img src=""></router-link></div></mt-swipe-item>
            <mt-swipe-item><div class=""><router-link to=""><img src=""></router-link></div></mt-swipe-item>
            <mt-swipe-item><div class=""><router-link to=""><img src=""></router-link></div></mt-swipe-item>
        </mt-swipe>
    </div>
</template>
<script type="text/javascript">
export default{
	data(){
		return {
			list:[]
		}
	},
	methods:{
		getSwipeList:function (index) {
			var city='广州';
			var that=this;
			this.$http.get('http://127.0.0.1:8081/movie/in_theaters?city='+city).then(function (response) {
				response.data.subjests
			}).catch(function (error) {
				console.log(error);
			})
		}
	}
}
</script>
<style type="text/css">
#in-theater-swipe{
	height:500px; 
}
</style>
