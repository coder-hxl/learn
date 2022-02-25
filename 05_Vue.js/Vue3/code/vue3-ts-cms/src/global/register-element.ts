import { App } from 'vue'

import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElUpload
} from 'element-plus'

import { UserFilled, Iphone } from '@element-plus/icons-vue'

const components = [
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElCheckbox,
  ElLink,
  ElUpload
]
const componentsIcons = [UserFilled, Iphone]

export default function (app: App) {
  for (const component of components) {
    app.component(component.name, component)
  }

  for (const component of componentsIcons) {
    app.component(component.name, component)
  }
}
