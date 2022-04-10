<template>
  <div>
    <h2>home: {{ $store.state.counter }}</h2>
    <hr />
    <h2>{{ counter }}</h2>
    <h2>{{ name }}</h2>
    <h2>{{ age }}</h2>
    <h2>{{ sName }}</h2>
    <h2>{{ sAge }}</h2>
    <hr />
  </div>
</template>

<script>
import { useState } from '../hooks/useState.js'

export default {
  setup() {
    const storeState = useState(['counter', 'name', 'age'])
    const storeState2 = useState({
      sName: (store) => store.name,
      sAge: (store) => store.age
    })

    return {
      ...storeState,
      ...storeState2
    }
  }
}
</script>

<style scoped></style>
