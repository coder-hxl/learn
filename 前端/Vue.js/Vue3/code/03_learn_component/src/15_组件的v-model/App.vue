<template>
  <div>
    <!-- <input type="text" v-model="message"> -->
    <!-- <input type="text" :value='message' @input="message = $event.target.value"> -->

    <!-- 组件上使用v-model -->
    <!-- <fh-input v-model='message'></fh-input> -->
    <!-- <fh-input :modelValue='message' @update:model-value='message = $event'></fh-input> -->

    <!-- 绑定两个v-model -->
    <two-input v-model="message" v-model:title="title"></two-input>

    {{ message }}
    {{ title }}
  </div>
</template>

<script>
import fhInput from './fhInput.vue'
import twoInput from './twoInput.vue'

export default {
  components: {
    fhInput,
    twoInput
  },
  data() {
    return {
      message: 'Hello',
      title: 'title'
    }
  }
}
</script>

<style scoped></style>
