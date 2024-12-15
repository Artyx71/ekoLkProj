<template>
	<MainHeader />
	<router-view></router-view>
	<MainFooter />
</template>

<script>
import MainFooter from '../components/MainFooter.vue'
import MainHeader from '../components/MainHeader.vue'
export default {
	components: {
		MainHeader,
		MainFooter,
	},
}
</script>
