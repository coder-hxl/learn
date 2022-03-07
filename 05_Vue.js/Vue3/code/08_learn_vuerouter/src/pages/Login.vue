<template>
  <div>
    <button @click='loginBtn'>Login</button>
  </div>
</template>

<script>
  import { useRouter } from 'vue-router'

  export default {
    setup() {
      const router = useRouter()

      const loginBtn = () => {
        window.localStorage.setItem('token', 'fh')
        router.push('/home')
      }

      return {
        loginBtn
      }
    }
  }
</script>

<style scoped>

</style>