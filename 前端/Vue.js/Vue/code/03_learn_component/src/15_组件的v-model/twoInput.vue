<template>
  <div>
    <input type="text" v-model="value" />
    <input type="text" v-model="fh" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String
    },
    title: {
      type: String
    }
  },
  emits: ['update:modelValue', 'update:title'],
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      }
    },
    fh: {
      set(fh) {
        this.$emit('update:title', fh)
      },
      get() {
        return this.title
      }
    }
  }
}
</script>

<style scoped></style>
