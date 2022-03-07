<template>
	<div>
		<button @click='addNum'>添加数字</button>
		<button @click='removeNum'>删除数字</button>
		<button @click="shuffleNum">数字洗牌</button>


		<!-- 
			transition-group内置组件：可以用于渲染列表
				- 默认情况下，它不会渲染一个元素的包裹器，但是可以指定一个元素并以 tag属性 进行渲染；
				- 过渡模式不可使用，因为我们不再互相切换特有的元素；
				- 内部元素总是需要提供唯一的key属性值；
				- css 过渡的类将会应用在内部元素中，而不是这个组/容器本身；
		 -->
		<transition-group tag="p" name="fh">
			<span v-for="item in numbers" :key="item" class="item">{{item}}</span>
		</transition-group>
	</div>
</template>

<script>
	import _ from 'lodash'

	export default {
		data() {
			return {
				numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
				numCounter: 10
			}
		},
		methods: {
			addNum() {
				this.numbers.splice(this.randomIndex(), 0, this.numCounter++)
			},
			removeNum() {
				this.numbers.splice(this.randomIndex(), 1)
			},
			shuffleNum() {
				this.numbers = _.shuffle(this.numbers)
			},
			randomIndex() {
				return Math.floor(Math.random() * this.numbers.length)
			}
		}
	}
</script>

<style scoped>
	.item {
		margin-left: 10px;
		display: inline-block;
	}

	.fh-enter-from,
	.fh-leave-to {
		opacity: 0;
		transform: translateY(30px);
	}

	.fh-enter-active,
	.fh-leave-active {
		transition: all 1s ease;
	}

	/* 点击删除还会占着原来的位置，要等完全移除才会腾出位置。这时可以将其脱离文档流，产生移动位置动画 */
	.fh-leave-active {
		position: absolute;
	}

	/* v-move在元素改变位置的过程中应用 */
	.fh-move {
		transition: transform 1s ease;
	}
</style>