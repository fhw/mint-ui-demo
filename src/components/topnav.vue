<template>
	<div id="top-nav" class="nav top-nav">
		<div class="nav-d1">
			<span>1</span>
		</div>
		<div class="nav-d2">
			<span>2</span>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:"top-nav"
	}
</script>
<style type="text/css">
	.nav{
		height: 50px;
		width: 100%;
		line-height: 50px;
		background: yellow;
	}
	.top-nav{
		position: fixed;
		top: 0;
	}
</style>