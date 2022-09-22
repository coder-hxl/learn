function capitalize(str: string) {
  const res = str.slice(0, 1).toUpperCase() + str.slice(1, str.length)

  return res
}

export { capitalize }
