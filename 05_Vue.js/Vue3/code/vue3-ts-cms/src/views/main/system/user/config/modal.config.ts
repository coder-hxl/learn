import { IForm } from '@/base-ui/form'

export const modalConfig: IForm = {
  itemLayout: {},
  colLayout: {},
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'realname',
      type: 'input',
      label: '真实姓名',
      placeholder: '请输入真实姓名'
    },
    {
      field: 'password',
      type: 'input',
      label: '用户密码',
      placeholder: '请输入用户密码',
      isHidden: false
    },
    {
      field: 'cellphone',
      type: 'input',
      label: '电话号码',
      placeholder: '请输入电话号码'
    },
    {
      field: 'departments',
      type: 'select',
      label: '部门',
      placeholder: '请选择部门',
      options: []
    },
    {
      field: 'role',
      type: 'select',
      label: '角色',
      placeholder: '请选择角色',
      options: []
    }
  ]
}
