type IFormType = 'input' | 'password' | 'select' | 'picker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder: any
  // 针对select
  options?: any[]
  // 针对特殊的属性
  otherOptions?: any
}
