<template>
  <!-- 
		在Vue中有渲染作用域的概念
			- 父级模板里的所有内容都是在父作用域中编译的；
			- 子级模板里的所有内容都是在子作用域中编译的；
	-->

  <div>
    <!-- 编译作用域 -->
    <!-- <children-cpn>
			<button>{{title}}</button>
		</children-cpn> -->

    <!-- 插槽作用域 -->
    <!-- 使用 v-slot='变量' 接收在插槽自定义属性的数据 -->
    <show-names :names="names">
      <template v-slot="fh">
        <button>{{ fh.item }} - {{ fh.index }}</button>
      </template>
    </show-names>

    <!-- 独具占默认插槽 -->
    <show-names :names="names" v-slot="fh">
      <button>{{ fh.item }} - {{ fh.index }}</button>
    </show-names>

    <!-- 注意：如果还有其他的具名插槽，那么默认插槽也必须使用template来编写 -->
    <show-names :names="names">
      <template v-slot="SlotProps">
        <i>{{ SlotProps.item }} - {{ SlotProps.index }}</i>
      </template>

      <template v-slot:fuhuan> hi </template>
    </show-names>
  </div>
</template>

<script>
import ChildrenCpn from './ChildrenCpn.vue'

import ShowNames from './ShowNames.vue'

export default {
  components: {
    ChildrenCpn,
    ShowNames
  },
  data() {
    return {
      names: ['fh', 'pink', 'why']
    }
  }
}
</script>

<style scoped></style>
