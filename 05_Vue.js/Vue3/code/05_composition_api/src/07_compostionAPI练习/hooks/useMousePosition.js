import { ref } from 'vue'

export default function () {
  let mouseX = ref(0)
  let mouseY = ref(0)

  window.addEventListener('mousemove', (event) => {
    mouseX.value = event.pageX
    mouseY.value = event.pageY
  })

  return {
    mouseX,
    mouseY
  }
}