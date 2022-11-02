import { useEffect, useState } from 'react'

export default function useLocalStorage(key) {
  const [data, setData] = useState(() => {
    const item = localStorage.getItem(key)
    if (item === 'undefined') return item
    return JSON.parse(item)
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  return [data, setData]
}
