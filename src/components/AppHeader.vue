<template>
	<div class="boxheader" id="header">
		<div class="boxheader__box">
			<p class="boxheader__title boxheader__title--white">Where in the World ?</p>
		</div>
		<div class="boxheader__box">
			<span class="boxheader__titlesmall boxheader__title--white">Dark Mode</span>
			<img class="boxheader__image" :src="require('@/assets/sun.png')">
		</div>
	</div>
</template>

<script>


</script>

<style>
.boxheader {
	background-color: #2b3743;
	height: 60px;
	display: flex;
	justify-content: space-between;
}

.boxheader__box {
	margin: auto 20px;
	display: flex;
	align-items: center;
}

.boxheader__title {
	font-weight: 800;
}

.boxheader__title--white {
	color: #fff;
}

.boxheader__title--black {
	color: #000;
}

.boxheader__titlesmall {
	font-size: 12px;
	margin: 0 5px;
}

.boxheader__image {
	height: 30px;
	cursor: pointer;
}
</style>