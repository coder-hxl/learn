<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改名字</button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    const firstName = ref("kobe");
    const lastName = ref("Bryant");

    // computed：返回值是一个ref对象
    // 1.用法一：接收一个getter函数，并为 getter 函数返回的值，返回一个不变的 ref 对象；
    // const fullName = computed(() => {
    //  	return firstName.value + ' ' + lastName.value
    // })

    // 2.用法二：接收一个具有 getter 和 setter 的对象，返回一个可变的（可读写）ref 对象；
    const fullName = computed({
      get: () => firstName.value + " " + lastName.value,
      set(newName) {
        const names = newName.split(" ");
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });
    console.log(fullName);

    function changeName() {
      fullName.value = "fu huan";
    }

    return {
      fullName,
      changeName,
    };
  },
};
</script>

<style scoped>
</style>