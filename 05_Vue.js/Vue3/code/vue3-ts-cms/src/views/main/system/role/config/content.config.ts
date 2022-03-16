export const contentTableConfig = {
  title: '用户列表',
  showIndexColumn: true,
  showSelectColumn: true,
  propList: [
    {
      label: '角色名',
      prop: 'name',
      minWidth: '100'
    },
    {
      label: '权限介绍',
      prop: 'intro',
      minWidth: '100'
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
