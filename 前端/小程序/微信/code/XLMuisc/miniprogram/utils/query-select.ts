interface IQuerySelectResItem {
  bottom: number
  dataset: {}
  height: number
  id: string
  left: number
  right: number
  top: number
  width: number
  length: number
  nv_length: number
}

export default function querySelect(target: string) {
  return new Promise<IQuerySelectResItem[]>((resolve) => {
    const query = wx.createSelectorQuery()
    query.select(target).boundingClientRect()
    query.selectViewport()
    query.exec(resolve)
  })
}
