export const contentTableConfig = {
  title: '商品列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      label: '商品名称',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '原价格',
      prop: 'oldPrice',
      minWidth: '100',
      slotName: 'oldPrice'
    },
    {
      label: '现价格',
      prop: 'newPrice',
      minWidth: '100',
      slotName: 'newPrice'
    },
    {
      label: '商品图片',
      prop: 'imgUrl',
      minWidth: '100',
      slotName: 'img'
    },
    {
      label: '状态',
      prop: 'status',
      minWidth: '100',
      slotName: 'status'
    },
    {
      label: '创建时间',
      prop: 'createAt',
      minWidth: '250',
      slotName: 'createAt'
    },
    {
      label: '更新时间',
      prop: 'updateAt',
      minWidth: '250',
      slotName: 'updateAt'
    },
    {
      label: '操作',
      minWidth: '100',
      slotName: 'handle'
    }
  ]
}
