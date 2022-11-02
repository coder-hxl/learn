import { useEffect, useState } from 'react'

export default function useScrollPosition() {
  const [scrollX, setScrollX] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const getScroll = () => {
      // console.log(window.scrollX, window.scrollY)
      setScrollX(window.scrollX)
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', getScroll)

    return () => {
      window.removeEventListener('scroll', getScroll)
    }
  }, [])

  return {
    scrollX,
    scrollY
  }
}
