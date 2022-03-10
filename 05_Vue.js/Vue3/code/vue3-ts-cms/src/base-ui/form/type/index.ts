type IFormType = 'input' | 'password' | 'select' | 'picker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}

export interface IForm {
  fromItems: IFormItem[]
  labelWidth?: string
  colLayout: any
  itemLayout: any
}
