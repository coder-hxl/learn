<template>
  <div class="fh-count-up">
    <slot>
      <div :id="target"></div>
    </slot>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick } from 'vue'
import { CountUp, CountUpOptions } from 'countup.js'

const props = withDefaults(
  defineProps<{
    target: string
    endVal: number
    options?: CountUpOptions
  }>(),
  {
    options: () => ({})
  }
)

const countInstance = computed(() => {
  return new CountUp(props.target, props.endVal, props.options)
})
nextTick(() => {
  countInstance.value.start()
})
</script>

<style scoped lang="less"></style>
