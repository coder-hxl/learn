<template>
  <div>
    <!-- $route.query可以获取传递过来的参数 -->
    <h2>about：{{$route.query.name}} - {{$route.query.age}}</h2>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

</style>